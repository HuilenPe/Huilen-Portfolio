import styles from "./Projects.module.css"
import { FiArrowUpRight, FiGithub, FiFigma } from "react-icons/fi"
import Button from "../../components/UI/Button/button"
import { projects } from "./ProjectsData.js"

function Projects() {

    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Proyectos</h2>

                {/* Grid de tarjetas */}
                <div className={styles.grid}>
                    {projects.map((project) => (
                        // Tarjeta individual
                        <div key={project.id} className={styles.card}>
                            <img src={project.img} alt={project.title} className={styles.img} />
                            <div className={styles.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className={styles.actions}>
                                    <Button 
                                        className={styles.primaryButton}
                                        variant="link"
                                        href={`#${project.id}`}
                                        icon={<FiArrowUpRight />}
                                    >
                                        Ver proyecto
                                    </Button>

                                    {project.github && (
                                        <Button
                                            variant="link"
                                            href={project.github}
                                            icon={<FiGithub />}
                                        >
                                            Ver código
                                        </Button>
                                    )}
                                    
                                    {project.figma && (
                                        <Button
                                            variant="link"
                                            href={project.figma}
                                            icon={<FiFigma />}
                                        >
                                            Ver prototipo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects