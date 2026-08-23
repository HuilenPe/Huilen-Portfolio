import { useRef, useState } from "react"
import styles from "../ProjectDetails.module.css"

function ProcessCarousel({ process, projectTitle }) {
  const processRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      ...process.sitemap,
      eyebrow: "Proceso",
      alt: "Arquitectura de información del archivo artístico digital",
    },
    {
      ...process.interaction,
      alt: "Diseño de interacción de la sección Obras",
    },
    {
      ...process.responsive,
      alt: `Implementación responsive de ${projectTitle}`,
    },
  ].filter((slide) => slide.title)

  const handleScroll = () => {
    const container = processRef.current

    if (!container) return

    const slideWidth = container.clientWidth

    if (!slideWidth) return

    const activeSlideIndex = Math.round(
      container.scrollLeft / slideWidth
    )

    setActiveSlide(
      Math.min(activeSlideIndex, slides.length - 1)
    )
  }

  return (
    <>
      <div
        ref={processRef}
        className={styles.process}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={styles.processBlock}
          >
            <div className={styles.processText}>
              {slide.eyebrow && (
                <span className={styles.processEyebrow}>
                  {slide.eyebrow}
                </span>
              )}

              <h3>{slide.title}</h3>
              <p>{slide.description}</p>

              {slide.technologies?.length > 0 && (
                <div className={styles.techList}>
                  {slide.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techItem}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <img
              src={slide.img}
              alt={slide.alt}
              className={styles.processImage}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.processDots}
        aria-label={`Paso ${activeSlide + 1} de ${slides.length}`}
      >
        {slides.map((slide, index) => (
          <span
            key={slide.title}
            className={`${styles.processDot} ${
              activeSlide === index
                ? styles.processDotActive
                : ""
            }`}
          />
        ))}
      </div>
    </>
  )
}

export default ProcessCarousel
