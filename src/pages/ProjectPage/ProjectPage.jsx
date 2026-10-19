import { useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { projects } from "../../sections/Projects/ProjectsData"
import ProjectDetails from "../../sections/ProjectDetails/ProjectDetails"

function mergeContent(source, translated) {
  const result = { ...source }

  for (const [key, value] of Object.entries(translated)) {
    result[key] =
      value && typeof value === "object" && !Array.isArray(value)
        ? mergeContent(source?.[key] ?? {}, value)
        : value
  }

  return result
}

function ProjectPage() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage || "es"

  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="container">
        <h1>{t("caseUI.notFoundTitle", "Proyecto no encontrado")}</h1>
        <p>
          {t(
            "caseUI.notFoundDescription",
            "El proyecto que buscas no está disponible."
          )}
        </p>
        <a href="/#projects">
          {t("caseUI.back", "Volver a proyectos")}
        </a>
      </section>
    )
  }

  const key = `caseStudies.${project.id}`
  const translated =
    language === "en" && i18n.exists(key)
      ? t(key, { returnObjects: true })
      : null

  const localizedProject =
    translated && typeof translated === "object"
      ? mergeContent(project, translated)
      : project

  return <ProjectDetails project={localizedProject} />
}

export default ProjectPage
