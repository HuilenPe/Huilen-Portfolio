import { useTranslation } from "react-i18next"
import styles from "./About.module.css"

function About() {
  const { t } = useTranslation()
  const education = [
    "Google UX Design",
    t("about.bootcamp"),
    t("about.visualArts"),
  ]

  const stack = ["React", "JavaScript / TypeScript", "CSS", "Supabase", "Figma", "Git"]

  const focus = [
    "UX/UI Design",
    "UI Systems",
    "Responsive Frontend",
  ]

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.blob}>
              <span
                id="about-logo-target"
                className={styles.logoTarget}
                aria-hidden="true"
              />
            </div>
            <p className={styles.verticalText}>{t("about.visualLabel")}</p>

            <div className={styles.sketchBox}>
              <span className={styles.sketchLine}></span>
              <span className={styles.sketchLineSmall}></span>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.label}>{t("about.label")}</p>

            <h2>{t("about.titleFirst")}<br />{t("about.titleSecond")}</h2>

            <div className={styles.text}>
              <p>{t("about.description")}</p>
              <p>{t("about.background")}</p>
            </div>

            <a href="#projects" className={styles.cta}>{t("about.projectsCta")}<span>→</span>
            </a>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoBlock title={t("about.education")} items={education} />
          <InfoBlock title="Stack" items={stack} />
          <InfoBlock title={t("about.focus")} items={focus} />
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ title, items }) {
  return (
    <article className={styles.infoBlock}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default About