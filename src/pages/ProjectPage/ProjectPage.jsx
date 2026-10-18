import { useLanguage, localize } from "../../i18n/language"
import { useParams } from "react-router-dom"
import { projects as sourceProjects } from "../../sections/Projects/ProjectsData"
import ProjectDetails from "../../sections/ProjectDetails/ProjectDetails"

function ProjectPage() {
  const { t, language } = useLanguage()
  const projects = localize(language, sourceProjects)
  const { slug } = useParams()

  const project = projects.find(
    (project) => project.slug === slug
  )

  if (!project) {
    return (
      <section className="container">
        <h1>{t("Proyecto no encontrado")}</h1>
        <p>{t("El proyecto que buscas no está disponible.")}</p>
        <a href="/#projects">{t("Volver a proyectos")}</a>
      </section>
    )
  }

  return <ProjectDetails project={project} />
}

export default ProjectPage
