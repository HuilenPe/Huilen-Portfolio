import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import styles from "./Projects.module.css"
import { projects } from "./ProjectsData.js"

const cardPresentation = {
  "aldo-pena": {
    name: "Aldo Peña",
    categoryKey: "projects.cards.aldo.category",
    image: "/images/aldo/aldo_bg_card.png",
  },
  equinox: {
    name: "Equinox",
    categoryKey: "projects.cards.equinox.category",
    image: "/images/equinox/equinox-cover.png",
  },
}

function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("projects.title")}</h2>

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
                      {presentation
                        ? t(presentation.categoryKey)
                        : project.description}
                    </p>

                    {presentation && (
                      <p className={styles.role}>{t("projects.role")}</p>
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
                      aria-label={t("projects.viewProject", { name })}
                    >
                      {content}
                    </Link>
                  ) : externalHref ? (
                    <a
                      href={externalHref}
                      className={styles.cardLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("projects.openProject", { name })}
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
