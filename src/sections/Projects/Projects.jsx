import { Link } from "react-router-dom"
import styles from "./Projects.module.css"
import { FiFigma } from "react-icons/fi"
import Button from "../../components/UI/Button/button"
import { projects } from "./ProjectsData.js"

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Proyectos seleccionados</h2>

        <div className={styles.grid}>
          {projects.map((project) => {
            const internalHref =
              project.details && project.slug
                ? `/projects/${project.slug}`
                : null

            const externalHref =
              !internalHref
                ? project.demo || project.github
                : null

            return (
              <article
                key={project.id}
                className={styles.card}
              >
                {internalHref ? (
                  <Link
                    to={internalHref}
                    className={styles.cardLink}
                    aria-label={`Ver ${project.title}`}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={project.img}
                        alt=""
                        className={styles.img}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </Link>
                ) : (
                  <a
                    href={externalHref || undefined}
                    className={styles.cardLink}
                    aria-label={`Ver ${project.title}`}
                    {...(externalHref && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <div className={styles.imageWrapper}>
                      <img
                        src={project.img}
                        alt=""
                        className={styles.img}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </a>
                )}

                {project.figma && (
                  <div className={styles.actions}>
                    <Button
                      variant="link"
                      href={project.figma}
                      icon={<FiFigma />}
                    >
                      Ver prototipo
                    </Button>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
