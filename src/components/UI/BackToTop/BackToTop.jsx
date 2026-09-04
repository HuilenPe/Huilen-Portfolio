import { useEffect, useState } from "react"
import { FiArrowUp } from "react-icons/fi"
import styles from "./BackToTop.module.css"

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 600)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function handleClick() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <button
      type="button"
      className={`${styles.button} ${
        isVisible ? styles.visible : ""
      }`}
      onClick={handleClick}
      aria-label="Volver arriba"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <FiArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
