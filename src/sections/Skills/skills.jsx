import styles from "./Skills.module.css"

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: "Construcción de interfaces responsive y orientadas a producto.",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Responsive Design",
      ],
    },
    {
      number: "02",
      title: "UI / UX",
      description: "Diseño de interfaces claras, consistentes y fáciles de usar.",
      skills: [
        "Figma",
        "Design Systems",
        "Wireframing",
        "Prototyping",
        "User Flows",
      ],
    },
    {
      number: "03",
      title: "Workflow",
      description: "Herramientas y metodologías para trabajar de forma organizada.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Agile / Scrum",
      ],
    },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.label}>Skills</p>

          <div className={styles.intro}>
            <h2>
              Diseño, estructura
              <br />
              y código.
            </h2>

            <p>
              Combino pensamiento visual, estructura y código para construir
              interfaces claras y consistentes.
            </p>
          </div>
        </header>

        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <article key={group.title} className={styles.skillGroup}>
              <span className={styles.number}>{group.number}</span>

              <h3>{group.title}</h3>

              <p className={styles.description}>{group.description}</p>

              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
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