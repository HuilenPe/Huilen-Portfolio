import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./header.module.css"
import logoStyles from "./logo.module.css"

function LogoMark({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 369 420"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className={`${logoStyles.path} ${logoStyles.hStart}`}
        d="M174.5 1.5L94.5 16.5L1.5 355.5L77 341.5C79 330.3 105.594 228.5 115 207C120.833 193.667 141.8 167 179 167C216.2 167 212.833 205 206.5 224L176.5 341.5L246 337.5L283 196.5C295 139 273.5 108.995 232.5 103.5C184 97 150.5 123.5 128.5 149.5L174.5 1.5Z"
        fill="black"
        stroke="black"
      />

      <path
        className={`${logoStyles.path} ${logoStyles.dotStart}`}
        d="M365.5 293.5C346.5 252 286.5 280 289.5 318.5C291.5 341.5 311 353.5 341.5 341C365.9 331 371 310 365.5 293.5Z"
        fill="black"
        stroke="black"
      />
    </svg>
  )
}

function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === "/"

  const logoAnchorRef = useRef(null)
  const movingLogoRef = useRef(null)
  const burgerRef = useRef(null)
  const mobileNavRef = useRef(null)

  const skipAboutAnimationRef = useRef(false)
  const navigationCleanupRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isAboutActive, setIsAboutActive] = useState(false)

  const showAboutLogo = isHome && isAboutActive

  /* MOBILE MENU — lock scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  /* MOBILE MENU — close on desktop */
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  /* MOBILE MENU — keyboard and focus management */
  useEffect(() => {
    if (!isOpen) return

    const menu = mobileNavRef.current
    const burger = burgerRef.current

    const focusFrame = requestAnimationFrame(() => {
      menu?.querySelector("a[href]")?.focus()
    })

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false)

        requestAnimationFrame(() => {
          burger?.focus()
        })

        return
      }

      if (event.key !== "Tab" || !menu || !burger) return

      const focusableElements = [
        burger,
        ...menu.querySelectorAll("a[href], button:not([disabled])"),
      ]

      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement =
        focusableElements[focusableElements.length - 1]

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault()
        lastElement.focus()
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      cancelAnimationFrame(focusFrame)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

function handleSectionNav(targetId) {
  setIsOpen(false)

  // Si el usuario quiere ir a About, permitimos la animación normal.
  if (targetId === "about") {
    navigationCleanupRef.current?.()
    navigationCleanupRef.current = null

    skipAboutAnimationRef.current = false
    return
  }

  // Si va a otra sección, About puede cruzarse durante el scroll
  // pero el logo debe permanecer en el navbar.
  skipAboutAnimationRef.current = true
  setIsAboutActive(false)

  navigationCleanupRef.current?.()

  let scrollEndTimer

  function releaseAboutAnimation() {
    window.clearTimeout(scrollEndTimer)
    window.removeEventListener("scroll", handleNavigationScroll)

    skipAboutAnimationRef.current = false
    navigationCleanupRef.current = null
  }

  function handleNavigationScroll() {
    window.clearTimeout(scrollEndTimer)

    // Consideramos terminado el scroll cuando lleva
    // un pequeño tiempo sin volver a moverse.
    scrollEndTimer = window.setTimeout(
      releaseAboutAnimation,
      180
    )
  }

  window.addEventListener(
    "scroll",
    handleNavigationScroll,
    { passive: true }
  )

  // Fallback por si el enlace apunta a una sección que
  // ya está prácticamente en la posición actual.
  scrollEndTimer = window.setTimeout(
    releaseAboutAnimation,
    1200
  )

  navigationCleanupRef.current = releaseAboutAnimation
}

  function handleNavClick(event, targetId) {
    event.preventDefault()

    handleSectionNav(targetId)

    navigate(`/#${targetId}`)
  }

  /* ABOUT — detect target entering viewport */
  useEffect(() => {
    let observer
    let frame
    let attempts = 0

    if (!isHome) {
      return
    }

    function connectObserver() {
      const target = document.getElementById("about-logo-target")

      if (!target) {
        attempts += 1

        if (attempts < 60) {
          frame = requestAnimationFrame(connectObserver)
        }

        return
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (skipAboutAnimationRef.current) {
            setIsAboutActive(false)
            return
          }

          setIsAboutActive(
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.35
          )
        },
        {
          threshold: [0, 0.35, 1],
        }
      )

      observer.observe(target)
    }

    frame = requestAnimationFrame(connectObserver)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [isHome])

  /* CLEANUP navigation observer */
    useEffect(() => {
      return () => {
        navigationCleanupRef.current?.()
      }
    }, [])

  /* MOVING LOGO — position */
  useEffect(() => {
    const movingLogo = movingLogoRef.current
    const source = logoAnchorRef.current

    if (!movingLogo || !source) return

    let frame

    function updateLogoPosition() {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        // Reconsultamos el target porque Home puede haberse
        // desmontado y montado de nuevo al cambiar de ruta.
        const target = document.getElementById("about-logo-target")

        const destination =
          showAboutLogo && target && !isOpen
            ? target.getBoundingClientRect()
            : source.getBoundingClientRect()

        movingLogo.style.left = `${destination.left}px`
        movingLogo.style.top = `${destination.top}px`
        movingLogo.style.width = `${destination.width}px`
        movingLogo.style.height = `${destination.height}px`
      })
    }

    updateLogoPosition()

    window.addEventListener("resize", updateLogoPosition)
    window.addEventListener("scroll", updateLogoPosition, {
      passive: true,
    })

    return () => {
      cancelAnimationFrame(frame)

      window.removeEventListener("resize", updateLogoPosition)
      window.removeEventListener("scroll", updateLogoPosition)
    }
  }, [showAboutLogo, isOpen, location.pathname])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* LOGO ANCHOR */}
        <div
          ref={logoAnchorRef}
          className={styles.logo}
        >
          <LogoMark className={styles.h} />
        </div>

        {/* MOVING LOGO */}
        <a
          ref={movingLogoRef}
          href={isHome ? "#hero" : "/#hero"}
          className={`${styles.movingLogo} ${
            showAboutLogo ? styles.logoInAbout : ""
          }`}
          aria-label="Volver al inicio"
          onClick={(event) => handleNavClick(event, "hero")}
        >
          <LogoMark />
        </a>

        {/* NAV DESKTOP */}
        <nav className={styles.nav} aria-label="Menú principal">
          <a
            href={isHome ? "#projects" : "/#projects"}
            className={styles.menuLink}
            onClick={(event) => handleNavClick(event, "projects")}
          >
            Proyectos
          </a>

          <a
            href={isHome ? "#about" : "/#about"}
            className={styles.menuLink}
            onClick={(event) => handleNavClick(event, "about")}
          >
            Sobre mí
          </a>

          <a
            href={isHome ? "#skills" : "/#skills"}
            className={styles.menuLink}
            onClick={(event) => handleNavClick(event, "skills")}
          >
            Skills
          </a>

          <a
            href={isHome ? "#contact" : "/#contact"}
            className={styles.menuLink}
            onClick={(event) => handleNavClick(event, "contact")}
          >
            Contacto
          </a>
        </nav>

        {/* BURGER */}
        <button
          ref={burgerRef}
          type="button"
          className={`${styles.burger} ${
            isOpen ? styles.burgerOpen : ""
          }`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV MOBILE */}
        {isOpen && (
          <nav
            ref={mobileNavRef}
            id="mobile-menu"
            className={styles.mobileNav}
            aria-label="Menú principal mobile"
          >
            <a
              href={isHome ? "#projects" : "/#projects"}
              className={styles.burgerMenu}
              onClick={(event) => handleNavClick(event, "projects")}
            >
              Proyectos
            </a>

            <a
              href={isHome ? "#about" : "/#about"}
              className={styles.burgerMenu}
              onClick={(event) => handleNavClick(event, "about")}
            >
              Sobre mí
            </a>

            <a
              href={isHome ? "#skills" : "/#skills"}
              className={styles.burgerMenu}
              onClick={(event) => handleNavClick(event, "skills")}
            >
              Skills
            </a>

            <a
              href={isHome ? "#contact" : "/#contact"}
              className={styles.burgerMenu}
              onClick={(event) => handleNavClick(event, "contact")}
            >
              Contacto
            </a>

            <div className={styles.mobileSignature}>
              <LogoMark />
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header