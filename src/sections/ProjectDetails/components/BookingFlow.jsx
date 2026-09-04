import { useEffect, useRef, useState } from "react"
import styles from "../ProjectDetails.module.css"

function BookingFlow({ bookingFlow }) {
  const bookingRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const screens = bookingFlow.screens ?? []

  function scrollToSlide(index) {
    const container = bookingRef.current

    if (!container) return

    const clampedIndex = Math.max(
      0,
      Math.min(index, screens.length - 1)
    )

    container.scrollTo({
      left: container.clientWidth * clampedIndex,
      behavior: "smooth",
    })

    setActiveSlide(clampedIndex)
  }

  function handleScroll() {
    const container = bookingRef.current

    if (!container) return

    const slideWidth = container.clientWidth

    if (!slideWidth) return

    const activeSlideIndex = Math.round(
      container.scrollLeft / slideWidth
    )

    setActiveSlide(
      Math.max(
        0,
        Math.min(activeSlideIndex, screens.length - 1)
      )
    )
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollToSlide(activeSlide + 1)
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollToSlide(activeSlide - 1)
    }
  }

  useEffect(() => {
    const container = bookingRef.current

    if (!container) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    const timer = window.setTimeout(() => {
      container.classList.add(styles.carouselHint)
    }, 500)

    const cleanupTimer = window.setTimeout(() => {
      container.classList.remove(styles.carouselHint)
    }, 1500)

    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(cleanupTimer)
    }
  }, [])

  return (
    <section
      className={styles.bookingFlow}
      aria-roledescription="carrusel"
      aria-label={bookingFlow.title}
    >
      <div className={styles.processText}>
        <span className={styles.processEyebrow}>
          {bookingFlow.eyebrow}
        </span>

        <h3>{bookingFlow.title}</h3>
        <p>{bookingFlow.description}</p>
      </div>

      <div
        ref={bookingRef}
        className={styles.bookingGrid}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {screens.map((screen, index) => (
          <article
            key={screen.title}
            className={styles.bookingScreen}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${index + 1} de ${screens.length}: ${screen.title}`}
          >
            <img
              src={screen.img}
              alt=""
            />

            <div className={styles.bookingScreenText}>
              <h4>{screen.title}</h4>
              <p>{screen.description}</p>
            </div>
          </article>
        ))}
      </div>

      <p
        className={styles.srOnly}
        aria-live="polite"
        aria-atomic="true"
      >
        Paso {activeSlide + 1} de {screens.length}:{" "}
        {screens[activeSlide]?.title}
      </p>

      <div className={styles.bookingDots}>
        {screens.map((screen, index) => (
          <button
            key={screen.title}
            type="button"
            className={`${styles.bookingDot} ${
              activeSlide === index
                ? styles.bookingDotActive
                : ""
            }`}
            onClick={() => scrollToSlide(index)}
            aria-label={`Ir a ${screen.title}`}
            aria-current={
              activeSlide === index ? "step" : undefined
            }
          />
        ))}
      </div>
    </section>
  )
}

export default BookingFlow
