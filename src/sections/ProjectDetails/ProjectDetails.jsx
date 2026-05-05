import styles from "./ProjectDetails.module.css";
import { projects } from "../Projects/ProjectsData";
import Button from "../../components/UI/Button/button";

function ProjectDetails() {
  return (
    <section className={styles.section}>
      <div className="container">
        <a href="#projects" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          Volver a proyectos
        </a>

        {projects.map((project) => (
          <div key={project.id} id={project.id} className={styles.details}>
            {project.details && (
              <>
                <div
                  className={styles.hero}
                  style={{
                    backgroundImage: project.details.hero?.background
                      ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project.details.hero.background})`
                      : "none",
                  }}
                >
                  <div className={styles.heroContent}>
                    <h2>{project.details.hero?.title || project.title}</h2>
                    <p>{project.details.hero?.subtitle}</p>

                    <div className={styles.tags}>
                      {project.details.hero?.tags?.map((tag, i) => (
                        <span key={i} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.details.hero?.mockup && (
                    <div className={styles.mockup}>
                      <img src={project.details.hero.mockup} alt="mockup" />
                    </div>
                  )}
                </div>

                {/* resto igual */}
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectDetails;