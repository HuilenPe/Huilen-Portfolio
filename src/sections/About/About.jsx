import styles from "./About.module.css"

function About() {
  const education = [
    "Google UX Design",
    "Bootcamp Full Stack — Factoría F5",
    "Artes Visuales — UPC",
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
            <p className={styles.verticalText}>DISEÑO · CÓDIGO</p>

            <div className={styles.sketchBox}>
              <span className={styles.sketchLine}></span>
              <span className={styles.sketchLineSmall}></span>
            </div>
          </div>

          <div className={styles.content}>
            <p className={styles.label}>Sobre mí</p>

            <h2>
              Del arte visual
              <br />
              al producto digital.
            </h2>

            <div className={styles.text}>
              <p>
                Diseño y desarrollo interfaces para productos digitales, trabajando desde la definición de la experiencia y el diseño UI hasta su implementación frontend. He participado en proyectos reales para clientes y también desarrollo productos propios de principio a fin.
              </p>

              <p>
                Mi formación en Artes Visuales complementa mi perfil técnico y aporta una mirada especialmente atenta a la composición, la jerarquía visual y la experiencia de usuario.
              </p>
            </div>

            <a href="#projects" className={styles.cta}>
              Ver proyectos
              <span>→</span>
            </a>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <InfoBlock title="Educación" items={education} />
          <InfoBlock title="Stack" items={stack} />
          <InfoBlock title="Enfoque" items={focus} />
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