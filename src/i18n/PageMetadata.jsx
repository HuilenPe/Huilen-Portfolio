import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { projects } from "../sections/Projects/ProjectsData"
import { translate, useLanguage } from "./language"

export default function PageMetadata() {
  const { language } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    const project = projects.find((item) => pathname === `/projects/${item.slug}`)
    document.title = project
      ? `${translate(language, project.title)} | Huilen Peña`
      : "Huilen Peña — Frontend Developer · UI Designer"
    const description = project?.description || (language === "es"
      ? "Portfolio de Huilen Peña: diseño UI/UX y desarrollo frontend. Proyectos desde Figma hasta código."
      : "Huilen Peña’s portfolio: UI/UX design and frontend development. Projects from Figma to code.")
    document.querySelector('meta[name="description"]')?.setAttribute("content", translate(language, description))
  }, [language, pathname])

  return null
}
