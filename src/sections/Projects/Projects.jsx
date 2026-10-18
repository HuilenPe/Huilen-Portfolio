import { useLanguage, localize } from "../../i18n/language"
import { Link } from "react-router-dom"
import styles from "./Projects.module.css"
import { projects as sourceProjects } from "./ProjectsData.js"

function Projects() {
  const { t, language } = useLanguage()
  const projects = localize(language, sourceProjects)
  const cardPresentation = {
    "aldo-pena": {
      name: "Aldo Peña",
      category: t("Archivo artístico digital"),
      role: t("Diseño UX/UI · Frontend"),
      image: "/images/aldo/aldo_bg_card.png",
    },
    equinox: {
      name: "Equinox",
      category: t("Rediseño web corporativo"),
      role: t("Diseño UX/UI · Frontend"),
      image: "/images/equinox/equinox-cover.png",
    },
  }

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("Proyectos seleccionados")}</h2>

        <div className={styles.grid}>
          {projects
            .filter((project) => project.visible !== false)
            .map((project) => {
              const presentation = cardPresentation[project.id]
              const name = presentation?.name || project.title
              const internalHref = project.details && project.slug
                ? `/projects/${project.slug}`
                : null
              const externalHref = project.demo || project.github || project.figma

              const content = (
                <>
                  <div className={styles.imageWrapper}>
                    <img
                      src={presentation?.image || project.img}
                      alt=""
                      className={styles.img}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <h3>{name}</h3>
                      {(internalHref || externalHref) && (
                        <span className={styles.arrow} aria-hidden="true">
                          {internalHref ? "→" : "↗"}
                        </span>
                      )}
                    </div>

                    <p className={styles.category}>
                      {presentation?.category || project.description}
                    </p>

                    {presentation?.role && (
                      <p className={styles.role}>{presentation.role}</p>
                    )}

                  </div>
                </>
              )

              return (
                <article key={project.id} className={styles.card}>
                  {internalHref ? (
                    <Link
                      to={internalHref}
                      className={styles.cardLink}
                      aria-label={t("Ver el proyecto {name}", { name })}
                    >
                      {content}
                    </Link>
                  ) : externalHref ? (
                    <a
                      href={externalHref}
                      className={styles.cardLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Abrir {name} en otra pestaña", { name })}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={styles.cardLink}>{content}</div>
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
