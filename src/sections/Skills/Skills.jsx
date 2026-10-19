import { useTranslation } from "react-i18next"
import styles from "./Skills.module.css"

function Skills() {
  const { t } = useTranslation()
  const skillGroups = [
    {
      number: "01",
      title: "Frontend",
      description: t("skills.frontendDescription"),
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
      description: t("skills.uiDescription"),
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
      description: t("skills.workflowDescription"),
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
            <h2>{t("skills.titleFirst")}<br />{t("skills.titleSecond")}</h2>

            <p>{t("skills.intro")}</p>
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