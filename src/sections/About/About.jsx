import styles from "./About.module.css"

function About() {
  const education = [
    "Google UX Design",
    "Bootcamp Full Stack — Factoría F5",
    "Artes Visuales — UPC",
  ]

  const stack = ["React", "JavaScript", "CSS", "Figma", "Git", "VSCode"]

  const focus = [
    "UI Systems",
    "Responsive Frontend",
    "UX Thinking",
  ]

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.blob}></div>
            <p className={styles.verticalText}>DISEÑO · CÓDIGO · EXPERIENCIA</p>

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
                Vengo del mundo de las artes visuales y encontré en el diseño
                digital una forma de unir creatividad y funcionalidad.
              </p>

              <p>
                Actualmente desarrollo interfaces frontend y experiencias UI/UX
                enfocadas en claridad, estética y usabilidad.
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

        <p className={styles.quote}>
          Creo en interfaces simples, humanas y visualmente honestas.
        </p>
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