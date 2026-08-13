import styles from "./ProjectDetails.module.css";
import { projects } from "../Projects/ProjectsData";
import Button from "../../components/UI/Button/button";

function ProjectDetails() {
  const projectsWithDetails = projects.filter((project) => project.details);

  if (!projectsWithDetails.length) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        {projectsWithDetails.map((project) => (
          <div key={project.id} id={project.id} className={styles.details}>
            <a href="#projects" className={styles.backLabel}>
              ← Volver a proyectos
            </a>

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

            <div className={styles.projectActions}>
              {project.demo && (
                <Button
                  variant="outline"
                  href={project.demo}
                >
                  Ver proyecto
                </Button>
              )}

              {project.github && (
                <Button
                  variant="link"
                  href={project.github}
                >
                  Ver código
                </Button>
              )}

              {project.figma && (
                <Button
                  variant="link"
                  href={project.figma}
                >
                  Ver prototipo
                </Button>
              )}
            </div>

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

            {project.details.process && (
              <div className={styles.process}>
                <div className={styles.processBlock}>
                  <div className={styles.processText}>
                    <span className={styles.processEyebrow}>Proceso</span>
                    <h3>{project.details.process.sitemap.title}</h3>
                    <p>{project.details.process.sitemap.description}</p>
                  </div>

                  <img
                    src={project.details.process.sitemap.img}
                    alt="Arquitectura de información del archivo artístico digital"
                    className={styles.processImage}
                  />
                </div>

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

                <div className={styles.processBlock}>
                  <div className={styles.processText}>
                    <h3>{project.details.process.responsive.title}</h3>
                    <p>{project.details.process.responsive.description}</p>

                    <div className={styles.techList}>
                      {project.details.process.responsive.technologies.map((tech) => (
                        <span key={tech} className={styles.techItem}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <img
                    src={project.details.process.responsive.img}
                    alt="Implementación responsive del proyecto Aldo Peña"
                    className={styles.processImage}
                  />
                </div>
              </div>
            )}  

            {project.details.uxDecisions?.length > 0 && (
              <div className={styles.detailBlock}>
                <h3>Decisiones UX/UI</h3>

                <ul>
                  {project.details.uxDecisions.map((decision) => (
                    <li key={decision}>{decision}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.details.result && (
              <div className={styles.detailBlock}>
                <h3>{project.details.result.title}</h3>

                <p>{project.details.result.content}</p>
              </div>
            )}

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
        ))}
      </div>
    </section>
  );
}

export default ProjectDetails;