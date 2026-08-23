import { useParams } from "react-router-dom"
import { projects } from "../../sections/Projects/ProjectsData"
import ProjectDetails from "../../sections/ProjectDetails/ProjectDetails"

function ProjectPage() {
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return <p>Proyecto no encontrado.</p>
  }

  return <ProjectDetails project={project} />
}

export default ProjectPage
