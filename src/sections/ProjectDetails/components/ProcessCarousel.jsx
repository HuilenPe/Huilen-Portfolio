import { useTranslation } from "react-i18next"
import { useEffect, useRef, useState } from "react"
import styles from "../ProjectDetails.module.css"
import ProcessPhase from "./ProcessPhase"

function ProcessCarousel({ process, projectTitle }) {
  const { t } = useTranslation()
  const processRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      ...process.sitemap,
      phase: {
        area: "UX/UI",
      },
      alt: t("carousel.archiveArchitectureAlt"),
    },
    {
      ...process.interaction,
      alt: t("carousel.worksInteractionAlt"),
    },
    {
      ...process.responsive,
      phase: {
        area: "Frontend",
      },
      alt: t("carousel.responsiveAlt", { name: projectTitle }),
    },
  ].filter((slide) => slide.title)

  function scrollToSlide(index) {
    const container = processRef.current

    if (!container) return

    const clampedIndex = Math.max(
      0,
      Math.min(index, slides.length - 1)
    )

    container.scrollTo({
      left: container.clientWidth * clampedIndex,
      behavior: "smooth",
    })

    setActiveSlide(clampedIndex)
  }

  function handleScroll() {
    const container = processRef.current

    if (!container) return

    const slideWidth = container.clientWidth

    if (!slideWidth) return

    const activeSlideIndex = Math.round(
      container.scrollLeft / slideWidth
    )

    setActiveSlide(
      Math.max(
        0,
        Math.min(activeSlideIndex, slides.length - 1)
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
    const container = processRef.current

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
      className={styles.carousel}
      aria-roledescription={t("carousel.role")}
      aria-label={t("carousel.processLabel", { name: projectTitle })}
    >
      <div
        ref={processRef}
        className={styles.process}
        onScroll={handleScroll}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.processBlock}
            role="group"
            aria-roledescription={t("carousel.slide")}
            aria-label={t("carousel.itemLabel", { index: index + 1, total: slides.length, title: slide.title })}
          >
            <div className={styles.processText}>
              {slide.phase && (
                <ProcessPhase {...slide.phase} />
              )}

              <h3>{slide.title}</h3>
              <p>{slide.description}</p>

              {slide.technologies?.length > 0 && (
                <div className={styles.techList}>
                  {slide.technologies.map((tech) => (
                    <span key={tech} className={styles.techItem}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}


            </div>

            {slide.dataModelImg ? (
              <figure className={styles.dataModelFigure}>
                <a
                  href={slide.dataModelImg}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={slide.dataModelImg}
                    alt={t("carousel.dataModelAlt")}
                    loading="lazy"
                    decoding="async"
                    width={824}
                    height={826}
                  />
                </a>
                <figcaption>{t("carousel.dataModelCaption")}</figcaption>
              </figure>
            ) : slide.mobileImg && slide.desktopImg ? (
              <div className={styles.responsiveImages}>
                <img
                  src={slide.mobileImg}
                  alt={t("caseUI.mobileAlt", { name: projectTitle })}
                  className={`${styles.processImage} ${styles.responsiveMobileImage}`}
                />

                <img
                  src={slide.desktopImg}
                  alt={t("caseUI.desktopAlt", { name: projectTitle })}
                  className={`${styles.processImage} ${styles.responsiveDesktopImage}`}
                />
              </div>
            ) : (
              <img
                src={slide.img}
                alt={slide.alt}
                className={styles.processImage}
              />
            )}
          </div>
        ))}
      </div>

      <p
        className={styles.srOnly}
        aria-live="polite"
        aria-atomic="true"
      >
        {t("carousel.stepAnnouncement", {
          index: activeSlide + 1,
          total: slides.length,
          title: slides[activeSlide]?.title ?? "",
        })}
      </p>

      <div className={styles.processDots}>
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.processDot} ${
              activeSlide === index
                ? styles.processDotActive
                : ""
            }`}
            onClick={() => scrollToSlide(index)}
            aria-label={t("carousel.goToStep", { index: index + 1, title: slide.title })}
            aria-current={
              activeSlide === index ? "step" : undefined
            }
          />
        ))}
      </div>
    </section>
  )
}

export default ProcessCarousel
