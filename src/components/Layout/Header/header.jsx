import { useEffect, useRef, useState } from "react"
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
  const logoAnchorRef = useRef(null)
  const movingLogoRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [isAboutActive, setIsAboutActive] = useState(false)

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

  /* MOBILE MENU — Escape */
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  /* ABOUT — detect target entering viewport */
  useEffect(() => {
    const target = document.getElementById("about-logo-target")
    const desktop = window.matchMedia("(min-width: 768px)")

    if (!target || !desktop.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutActive(
          entry.isIntersecting && entry.intersectionRatio >= 0.45
        )
      },
      {
        threshold: [0, 0.45, 1],
      }
    )

    observer.observe(target)

    return () => {
      observer.disconnect()
    }
  }, [])

  /* MOVING LOGO — position */
  useEffect(() => {
    const movingLogo = movingLogoRef.current
    const source = logoAnchorRef.current
    const target = document.getElementById("about-logo-target")

    if (!movingLogo || !source) return

    let frame

    function updateLogoPosition() {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const desktop = window.innerWidth >= 768

        if (!desktop) return

        const destination =
          isAboutActive && target
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
    window.addEventListener("scroll", updateLogoPosition, { passive: true })

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", updateLogoPosition)
      window.removeEventListener("scroll", updateLogoPosition)
    }
  }, [isAboutActive])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo anchor — mantiene el espacio original */}
        <div
          ref={logoAnchorRef}
          className={styles.logo}
        >
          <LogoMark className={styles.h} />
        </div>

        {/* Logo viajero — desktop */}
        <div
          ref={movingLogoRef}
          className={`${styles.movingLogo} ${
            isAboutActive ? styles.logoInAbout : ""
          }`}
          aria-hidden="true"
        >
          <LogoMark />
        </div>

        {/* NAV DESKTOP */}
        <nav className={styles.nav} aria-label="Menú principal">
          <a href="#projects" className={styles.menuLink}>
            Proyectos
          </a>

          <a href="#about" className={styles.menuLink}>
            Sobre mí
          </a>

          <a href="#skills" className={styles.menuLink}>
            Skills
          </a>

          <a href="#contact" className={styles.menuLink}>
            Contacto
          </a>
        </nav>

        {/* BURGER */}
        <button
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
            id="mobile-menu"
            className={styles.mobileNav}
            aria-label="Menú principal mobile"
          >
            <a
              href="#projects"
              className={styles.burgerMenu}
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>

            <a
              href="#about"
              className={styles.burgerMenu}
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </a>

            <a
              href="#skills"
              className={styles.burgerMenu}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>

            <a
              href="#contact"
              className={styles.burgerMenu}
              onClick={() => setIsOpen(false)}
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