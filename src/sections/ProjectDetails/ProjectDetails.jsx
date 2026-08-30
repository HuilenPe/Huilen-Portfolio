import styles from "./ProjectDetails.module.css"
import Button from "../../components/UI/Button/button"
import ProcessCarousel from "./components/ProcessCarousel"
import BookingFlow from "./components/BookingFlow"

function ProjectDetails({ project }) {
  if (!project?.details) return null

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

            {/* PROJECT CLOSING */}
            {(project.details.result ||
              project.details.learnings?.length > 0) && (
              <div className={styles.projectClosing}>
                {project.details.result && (
                  <div className={styles.closingResult}>
                    <span className={styles.processEyebrow}>Resultado</span>
                    <h3>{project.details.result.title}</h3>
                    <p>{project.details.result.content}</p>
                  </div>
                )}

                {project.details.learnings?.length > 0 && (
                  <div className={styles.closingLearnings}>
                    <span className={styles.processEyebrow}>Aprendizajes</span>

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