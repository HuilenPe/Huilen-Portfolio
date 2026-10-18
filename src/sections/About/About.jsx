import { useLanguage } from "../../i18n/language"
import styles from "./About.module.css"

function About() {
  const { t } = useLanguage()
  const education = [
    "Google UX Design",
    t("Bootcamp Full Stack — Factoría F5"),
    t("Artes Visuales — UPC"),
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
            <p className={styles.verticalText}>{t("DISEÑO · CÓDIGO")}</p>

            <div className={styles.sketchBox}>
              <span className={styles.sketchLine}></span>
              <span className={styles.sketchLineSmall}></span>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.label}>{t("Sobre mí")}</p>

            <h2>{t("Del arte visual")}<br />{t("al producto digital.")}</h2>

            <div className={styles.text}>
              <p>{t("Diseño y desarrollo interfaces digitales, desde la definición de la experiencia y el diseño UI hasta su implementación frontend. Trabajo en proyectos para clientes y desarrollo proyectos propios, combinando diseño visual y código.")}</p>

              <p>{t("Mi formación en Artes Visuales complementa mi perfil técnico y aporta una mirada especialmente atenta a la composición, la jerarquía visual y la experiencia de usuario.")}</p>
            </div>

            <a href="#projects" className={styles.cta}>{t("Ver proyectos")}<span>→</span>
            </a>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoBlock title={t("Educación")} items={education} />
          <InfoBlock title="Stack" items={stack} />
          <InfoBlock title={t("Enfoque")} items={focus} />
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