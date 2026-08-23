import { useRef, useState } from "react"
import styles from "./ProjectDetails.module.css"
import Button from "../../components/UI/Button/button"

function ProjectDetails({ project }) {
  const processRef = useRef(null)
  const [activeProcessSlide, setActiveProcessSlide] = useState(0)
  const bookingRef = useRef(null)
  const [activeBookingSlide, setActiveBookingSlide] = useState(0)

  if (!project?.details) return null

  const handleProcessScroll = () => {
    const container = processRef.current

    if (!container) return

    const slideWidth = container.clientWidth

    if (!slideWidth) return

    const activeSlide = Math.round(container.scrollLeft / slideWidth)

    setActiveProcessSlide(Math.min(activeSlide, 2))
  }

  const handleBookingScroll = () => {
  const container = bookingRef.current

  if (!container) return

  const slideWidth = container.clientWidth

  if (!slideWidth) return

  const activeSlide = Math.round(container.scrollLeft / slideWidth)

  setActiveBookingSlide(Math.min(activeSlide, 3))
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div id={project.id} className={styles.details}>
            {/* BACK */}
            <a href="/#projects" className={styles.backLabel}>
              ← Volver a proyectos
            </a>

            {/* HERO */}
            <div
              className={styles.hero}
              style={{
                backgroundImage: project.details.hero?.background
                  ? `url(${project.details.hero.background})`
                  : "none",
              }}
            >
              <div className={styles.heroContent}>
                <h2>{project.details.hero?.title || project.title}</h2>

                <p>{project.details.hero?.subtitle}</p>

                <div className={styles.tags}>
                  {project.details.hero?.tags?.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {project.details.hero?.mockup && (
                <div className={styles.mockup}>
                  <img
                    src={project.details.hero.mockup}
                    alt={project.title}
                  />
                </div>
              )}
            </div>

            {/* PROJECT ACTIONS */}
            <div className={styles.projectActions}>
              {project.demo && (
                <Button variant="outline" href={project.demo}>
                  Ver proyecto
                </Button>
              )}

              {project.github && (
                <Button variant="link" href={project.github}>
                  Ver código
                </Button>
              )}

              {project.figma && (
                <Button variant="link" href={project.figma}>
                  Ver prototipo
                </Button>
              )}
            </div>

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
                  <h3>Contexto</h3>
                  <p>{project.details.context.problema}</p>
                </div>

                <div>
                  <h3>Objetivo</h3>
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
                <h3>Decisiones clave</h3>

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
                  alt="User flow del proyecto Health"
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
                  alt="Wireframes iniciales del proyecto Health"
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
                  alt="Foundations y componentes del sistema de diseño de Health"
                  className={styles.processImage}
                />
              </div>
            )}

            {/* HEALTH — BOOKING FLOW */}
            {project.details.bookingFlow && (
              <div className={styles.bookingFlow}>
                <div className={styles.processText}>
                  <span className={styles.processEyebrow}>
                    {project.details.bookingFlow.eyebrow}
                  </span>

                  <h3>{project.details.bookingFlow.title}</h3>
                  <p>{project.details.bookingFlow.description}</p>
                </div>

                <div
                  ref={bookingRef}
                  className={styles.bookingGrid}
                  onScroll={handleBookingScroll}
                >
                  {project.details.bookingFlow.screens?.map((screen) => (
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
                  aria-label={`Paso ${activeBookingSlide + 1} de 4`}
                >
                  {[0, 1, 2, 3].map((index) => (
                    <span
                      key={index}
                      className={`${styles.bookingDot} ${
                        activeBookingSlide === index
                          ? styles.bookingDotActive
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </div>
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
                  alt="Diseño final del prototipo Health"
                  className={styles.processImage}
                />
              </div>
            )}

            {/* ALDO — PROCESS */}
            {project.details.process && (
              <>
                <div
                  ref={processRef}
                  className={styles.process}
                  onScroll={handleProcessScroll}
                >
                  {/* SITEMAP */}
                  <div className={styles.processBlock}>
                    <div className={styles.processText}>
                      <span className={styles.processEyebrow}>
                        Proceso
                      </span>

                      <h3>{project.details.process.sitemap.title}</h3>
                      <p>{project.details.process.sitemap.description}</p>
                    </div>

                    <img
                      src={project.details.process.sitemap.img}
                      alt="Arquitectura de información del archivo artístico digital"
                      className={styles.processImage}
                    />
                  </div>

                  {/* INTERACTION */}
                  <div className={styles.processBlock}>
                    <div className={styles.processText}>
                      <h3>{project.details.process.interaction.title}</h3>
                      <p>{project.details.process.interaction.description}</p>
                    </div>

                    <img
                      src={project.details.process.interaction.img}
                      alt="Diseño de interacción de la sección Obras"
                      className={styles.processImage}
                    />
                  </div>

                  {/* RESPONSIVE */}
                  <div className={styles.processBlock}>
                    <div className={styles.processText}>
                      <h3>{project.details.process.responsive.title}</h3>
                      <p>{project.details.process.responsive.description}</p>

                      {project.details.process.responsive.technologies?.length >
                        0 && (
                        <div className={styles.techList}>
                          {project.details.process.responsive.technologies.map(
                            (tech) => (
                              <span key={tech} className={styles.techItem}>
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    <img
                      src={project.details.process.responsive.img}
                      alt={`Implementación responsive de ${project.title}`}
                      className={styles.processImage}
                    />
                  </div>
                </div>

                <div
                  className={styles.processDots}
                  aria-label={`Paso ${activeProcessSlide + 1} de 3`}
                >
                  {[0, 1, 2].map((index) => (
                    <span
                      key={index}
                      className={`${styles.processDot} ${
                        activeProcessSlide === index
                          ? styles.processDotActive
                          : ""
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* RESULT / SCOPE */}
            {project.details.result && (
              <div className={styles.detailBlock}>
                <h3>{project.details.result.title}</h3>
                <p>{project.details.result.content}</p>
              </div>
            )}

            {/* LEARNINGS */}
            {project.details.learnings?.length > 0 && (
              <div className={styles.detailBlock}>
                <h3>Aprendizajes</h3>

                <ul>
                  {project.details.learnings.map((learning) => (
                    <li key={learning}>{learning}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails