import styles from "./skills.module.css"

const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "UI / UX",
    items: ["Figma", "Wireframes", "Prototipos", "Design Systems", "Usabilidad"],
  },
  {
    title: "Workflow",
    items: ["Git", "GitHub", "VSCode", "Trello", "Scrum"],
  },
]

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.label}>Skills</p>
          <h2>Herramientas para diseñar y construir.</h2>
          <p className={styles.description}>
            Combino diseño visual, pensamiento UX y desarrollo frontend para
            crear interfaces claras, responsivas y funcionales.
          </p>
        </div>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.card}>
              <span className={styles.number}>0{skillGroups.indexOf(group) + 1}</span>
              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills