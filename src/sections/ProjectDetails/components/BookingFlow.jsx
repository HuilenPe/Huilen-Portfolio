import { useRef, useState } from "react"
import styles from "../ProjectDetails.module.css"

function BookingFlow({ bookingFlow }) {
  const bookingRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const screens = bookingFlow.screens ?? []

  const handleScroll = () => {
    const container = bookingRef.current

    if (!container) return

    const slideWidth = container.clientWidth

    if (!slideWidth) return

    const activeSlideIndex = Math.round(
      container.scrollLeft / slideWidth
    )

    setActiveSlide(
      Math.min(activeSlideIndex, screens.length - 1)
    )
  }

  return (
    <div className={styles.bookingFlow}>
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
      >
        {screens.map((screen) => (
          <article
            key={screen.title}
            className={styles.bookingScreen}
          >
            <img
              src={screen.img}
              alt={screen.title}
            />

            <div className={styles.bookingScreenText}>
              <h4>{screen.title}</h4>
              <p>{screen.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div
        className={styles.bookingDots}
        aria-label={`Paso ${activeSlide + 1} de ${screens.length}`}
      >
        {screens.map((screen, index) => (
          <span
            key={screen.title}
            className={`${styles.bookingDot} ${
              activeSlide === index
                ? styles.bookingDotActive
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BookingFlow
