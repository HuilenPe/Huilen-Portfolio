import { useRef, useEffect, useState } from "react"
import styles from "./header.module.css"
import logoStyles from "./logo.module.css"

function Header() {
  const hRef = useRef(null)
  const dotRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  // lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // close mobile menu on desktop
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

  // close mobile menu with Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <div className={styles.logo}>
          <svg
            className={styles.h}
            viewBox="0 0 369 420"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* h */}
            <path
              ref={hRef}
              className={`${logoStyles.path} ${logoStyles.hStart}`}
              d="M174.5 1.5L94.5 16.5L1.5 355.5L77 341.5C79 330.3 105.594 228.5 115 207C120.833 193.667 141.8 167 179 167C216.2 167 212.833 205 206.5 224L176.5 341.5L246 337.5L283 196.5C295 139 273.5 108.995 232.5 103.5C184 97 150.5 123.5 128.5 149.5L174.5 1.5Z"
              fill="black"
              stroke="black"
            />

            {/* dot */}
            <path
              ref={dotRef}
              className={`${logoStyles.path} ${logoStyles.dotStart}`}
              d="M365.5 293.5C346.5 252 286.5 280 289.5 318.5C291.5 341.5 311 353.5 341.5 341C365.9 331 371 310 365.5 293.5Z"
              fill="black"
              stroke="black"
            />
          </svg>
        </div>

        {/* nav desktop */}
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

        {/* burger mobile */}
        <button
          type="button"
          className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* nav mobile */}
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
  <svg
    viewBox="0 0 369 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* h */}
    <path
      className={styles.mobileH}
      d="M174.5 1.5L94.5 16.5L1.5 355.5L77 341.5C79 330.3 105.594 228.5 115 207C120.833 193.667 141.8 167 179 167C216.2 167 212.833 205 206.5 224L176.5 341.5L246 337.5L283 196.5C295 139 273.5 108.995 232.5 103.5C184 97 150.5 123.5 128.5 149.5L174.5 1.5Z"
      fill="black"
    />

    {/* dot */}
    <path
      className={styles.mobileDot}
      d="M365.5 293.5C346.5 252 286.5 280 289.5 318.5C291.5 341.5 311 353.5 341.5 341C365.9 331 371 310 365.5 293.5Z"
      fill="black"
    />
  </svg>
</div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header