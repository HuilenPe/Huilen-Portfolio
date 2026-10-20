import EquinoxProcess from "./components/EquinoxProcess"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"
import styles from "./ProjectDetails.module.css"
import Button from "../../components/UI/Button/button"
import ProcessCarousel from "./components/ProcessCarousel"
import BookingFlow from "./components/BookingFlow"

function ProjectDetails({ project }) {
  const { t } = useTranslation()
  const titleRef = useRef(null)

  useEffect(() => {
    titleRef.current?.focus()
  }, [project.slug])

  useEffect(() => {
    if (project?.id !== "equinox") return

    const previousTitle = document.title
    document.title = "Equinox — Huilen Peña"

    return () => {
      document.title = previousTitle
    }
  }, [project?.id])

  const SectionHeading = project?.id === "equinox" ? "h2" : "h3"

  if (!project?.details) return null

  const covers = {
    "aldo-pena": {
      title: "Aldo Peña",
      category: t("projects.cards.aldo.category"),
      description:
        t("caseUI.aldoSummary"),
      image: "/images/aldo/aldo-practice-desktop.png",
      url: "https://xn--aldopea-9za.com/",
    },
    equinox: {
      title: "Equinox",
      category: t("projects.cards.equinox.category"),
      description:
        t("caseUI.equinoxSummary"),
      image: "/images/equinox/equinox-cover.png",
      mobile: "/images/equinox/equinox-mobile.png",
      url: project.demo,
    },
  }

  const cover = covers[project.id] || {
    title: project.details.hero?.title || project.title,
    category: t("caseUI.digitalProject"),
    description: project.details.hero?.subtitle,
    image: project.details.hero?.mockup,
    url: project.demo,
  }


  return (
    <section className={styles.section}>
      <div className="container">
        <div id={project.id} className={styles.details}>
            {/* BACK */}
            <a href="/#projects" className={styles.backLabel}>{t("caseUI.backArrow")} </a>

            {/* HERO */}
            <header className={styles.caseHeader}>
              <div className={styles.caseIntro}>
                <div>
                  <p className={styles.caseCategory}>{cover.category}</p>
                  <h1
                    ref={titleRef}
                    tabIndex={-1}
                    className={`${styles.projectTitle} ${styles.caseTitle}`}
                  >
                    {cover.title}
                  </h1>
                </div>

                <div className={styles.caseSummary}>
                  <p>{cover.description}</p>
                  <p className={styles.caseRole}>
                    {covers[project.id]
                      ? t("caseUI.role")
                      : project.details.hero?.tags?.join(" · ")}
                  </p>

                  <div className={styles.caseLinks}>
                    {cover.url && (
                      <a
                        href={cover.url}
                        aria-label={t("caseUI.visitWebsiteLabel", { name: cover.title })}
                        target="_blank"
                        rel="noopener noreferrer"
                      >{t("caseUI.visitWebsite")} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.github && (
                      <Button variant="link" href={project.github}>{t("caseUI.viewCode")} </Button>
                    )}
                    {project.figma && (
                      <Button variant="link" href={project.figma}>{t("caseUI.viewPrototype")} </Button>
                    )}
                  </div>
                </div>
              </div>

              {cover.image && (
                <div className={styles.caseStage}>
                  <figure className={styles.caseVisual}>
                    <img
                      src={cover.image}
                      alt={
                        project.id === "aldo-pena"
                          ? t("caseUI.aldoPracticeAlt")
                          : t("caseUI.desktopAlt", { name: cover.title })
                      }
                      decoding="async"
                    />
                  </figure>

                  {cover.mobile && (
                    <figure className={styles.casePhone}>
                      <img
                        src={cover.mobile}
                        alt={t("caseUI.mobileAlt", { name: cover.title })}
                        decoding="async"
                      />
                    </figure>
                  )}
                </div>
              )}
            </header>

            {/* ORIGIN */}
            {project.details.origin && (
              <div className={styles.origin}>
                <span className={styles.originEyebrow}>
                  {project.details.origin.eyebrow}
                </span>

                <div className={styles.originGrid}>
                  <h3>{project.details.origin.title}</h3>
                  <p>{project.details.origin.content}</p>
                </div>
              </div>
            )}

            {/* CONTEXT */}
            {project.details.context && (
              <div className={styles.gridTwo}>
                <div>
                  <SectionHeading>{t("caseUI.context")}</SectionHeading>
                  <p>{project.details.context.problema}</p>
                </div>

                <div>
                  <SectionHeading>{t("caseUI.goal")}</SectionHeading>
                  <p>{project.details.context.objetivo}</p>

                  {project.details.context.usuario?.length > 0 && (
                    <ul>
                      {project.details.context.usuario.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}

            {/* KEY DECISIONS */}
            {project.details.approach?.decisiones?.length > 0 && (
              <div className={styles.detailBlock}>
                <h3>{t("caseUI.keyDecisions")} </h3>

                <ul>
                  {project.details.approach.decisiones.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* HEALTH — USER FLOW */}
            {project.details.flow && (
              <div className={styles.processBlock}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.flow.eyebrow}
                  </span>

                  <h3>{project.details.flow.title}</h3>
                  <p>{project.details.flow.description}</p>
                </div>

                <img
                  src={project.details.flow.img}
                  alt={project.details.flow.alt}
                  className={styles.processImage}
                />
              </div>
            )}

            {/* HEALTH — WIREFRAMES */}
            {project.details.exploration && (
              <div className={styles.processBlock}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.exploration.eyebrow}
                  </span>

                  <h3>{project.details.exploration.title}</h3>
                  <p>{project.details.exploration.description}</p>
                </div>

                <img
                  src={project.details.exploration.img}
                  alt={project.details.exploration.alt}
                  className={styles.processImage}
                />
              </div>
            )}

            {/* HEALTH — DESIGN SYSTEM */}
            {project.details.designSystem && (
              <div className={styles.processBlock}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.designSystem.eyebrow}
                  </span>

                  <h3>{project.details.designSystem.title}</h3>
                  <p>{project.details.designSystem.description}</p>

                  {project.details.designSystem.items?.length > 0 && (
                    <div className={styles.techList}>
                      {project.details.designSystem.items.map((item) => (
                        <span key={item} className={styles.techItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <img
                  src={project.details.designSystem.image}
                  alt={project.details.designSystem.alt}
                  className={styles.processImage}
                />
              </div>
            )}

            {/* HEALTH — BOOKING FLOW */}
            {project.details.bookingFlow && (
              <BookingFlow bookingFlow={project.details.bookingFlow} />
            )}

            {/* HEALTH — FINAL UI */}
            {project.details.finalDesign && (
              <div className={styles.processBlock}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.finalDesign.eyebrow}
                  </span>

                  <h3>{project.details.finalDesign.title}</h3>
                  <p>{project.details.finalDesign.description}</p>
                </div>

                <img
                  src={project.details.finalDesign.image}
                  alt={project.details.finalDesign.alt}
                  className={styles.processImage}
                />
              </div>
            )}

            {/* ALDO — PROCESS */}
            {project.details.process && (
              <ProcessCarousel
                process={project.details.process}
                projectTitle={project.title}
              />
            )}

            {/* ARTWORK EXPERIENCE */}
            {project.details.artworkExperience && (
              <div className={styles.processBlock}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.artworkExperience.eyebrow}
                  </span>

                  <h3>{project.details.artworkExperience.title}</h3>
                  <p>{project.details.artworkExperience.description}</p>

                  {project.details.artworkExperience.items?.length > 0 && (
                    <div className={styles.techList}>
                      {project.details.artworkExperience.items.map((item) => (
                        <span key={item} className={styles.techItem}>
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.details.artworkExperience.image && (
                  <img
                    src={project.details.artworkExperience.image}
                    alt={project.details.artworkExperience.alt}
                    className={styles.processImage}
                  />
                )}
              </div>
            )}


            {project.id === "equinox" && <EquinoxProcess />}



            {/* PRACTICE — MOBILE VIEWS */}
            {project.details.practiceShowcase && (
              <section className={styles.practiceShowcase}>
                <div>
                  <h3>{project.details.practiceShowcase.title}</h3>
                  <p>{project.details.practiceShowcase.description}</p>
                </div>

                <div className={styles.practiceScreens}>
                  <img
                    src={project.details.practiceShowcase.heroImage}
                    alt={project.details.practiceShowcase.heroAlt}
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={project.details.practiceShowcase.categoryImage}
                    alt={project.details.practiceShowcase.categoryAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </section>
            )}

            {/* PROJECT CLOSING */}
            {(project.details.result ||
              project.details.learnings?.length > 0) && (
              <div className={styles.projectClosing}>
                {project.details.result && (
                  <div className={styles.closingResult}>
                    <span className={styles.processEyebrow}>{t("caseUI.outcome")} </span>
                    <SectionHeading>{project.details.result.title}</SectionHeading>
                    <p>{project.details.result.content}</p>
                  </div>
                )}

                {project.details.learnings?.length > 0 && (
                  <div className={styles.closingLearnings}>
                    <span className={styles.processEyebrow}>{t("caseUI.learnings")} </span>

                    <ul>
                      {project.details.learnings.map((learning) => (
                        <li key={learning}>{learning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
