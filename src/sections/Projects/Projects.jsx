import styles from "./Projects.module.css"
import { FiFigma } from "react-icons/fi"
import Button from "../../components/UI/Button/button"
import { projects } from "./ProjectsData.js"

function Projects() {
  const handleCardClick = (project) => {
    if (project.details) {
      window.location.href = `#${project.id}`
      return
    }

    const target = project.demo || project.github

    if (!target) return

    window.open(target, "_blank", "noopener,noreferrer")
  }

  const handleKeyDown = (event, project) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleCardClick(project)
    }
  }

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Proyectos seleccionados</h2>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              key={project.id}
              className={styles.card}
              role="link"
              tabIndex={0}
              onClick={() => handleCardClick(project)}
              onKeyDown={(event) => handleKeyDown(event, project)}
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

                {project.figma && (
                  <div className={styles.actions}>
                    <Button
                      variant="link"
                      href={project.figma}
                      icon={<FiFigma />}
                      onClick={(event) => event.stopPropagation()}
                    >
                      Ver prototipo
                    </Button>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects