import { useParams } from "react-router-dom"
import { projects } from "../../sections/Projects/ProjectsData"
import ProjectDetails from "../../sections/ProjectDetails/ProjectDetails"

function ProjectPage() {
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return (
      <section className="container">
        <h1>Proyecto no encontrado</h1>
        <p>
          El proyecto que buscas no está disponible.
        </p>
        <a href="/#projects">
          Volver a proyectos
        </a>
      </section>
    )
  }

  return <ProjectDetails project={project} />
}

export default ProjectPage
