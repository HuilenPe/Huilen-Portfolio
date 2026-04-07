import styles from "./Projects.module.css"
import photo from "/images/Health.png"
import photoPortfolio from "/images/MacBook.png"
import Button from "../../components/Button/button.jsx"
import { FiArrowUpRight, FiGithub, FiFigma } from "react-icons/fi"

const handleScrollToFullProject = () => {
    document.getElementById("project-details").scrollIntoView({
        behavior: "smooth"
    });
};

function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Proyectos</h2>

                <div className={styles.grid}>

                    <div className={styles.card}>
                        <img src={photo} alt="" className={styles.img} />

                        <div className={styles.content}>
                            <h3>Health Client Management</h3>
                            <p>UX/UI Design</p>
                            <div className={styles.actions}>
                                <Button
                                    variant="link"
                                    onClick={handleScrollToFullProject}
                                    icon={<FiArrowUpRight />}
                                >
                                    Ver proyecto
                                </Button>

                                <Button
                                    variant="link"
                                    href="https://github.com/HuilenPe/Huilen-Portfolio"
                                    icon={<FiGithub />}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="" alt="" className={styles.img} />
                        <div className={styles.content}>
                            <h3>Proyecto</h3>
                            <p>Descripción</p>
                            <div className={styles.actions}>
                                <Button
                                    variant="link"
                                    onClick={handleScrollToFullProject}
                                    icon={<FiArrowUpRight />}
                                >
                                    Ver proyecto
                                </Button>

                                <Button
                                    variant="link"
                                    href="https://github.com/HuilenPe/Huilen-Portfolio"
                                    icon={<FiFigma />}
                                >
                                    Prototipo
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={photoPortfolio} alt="" className={styles.img} />
                        <div className={styles.content}>   
                            <h3>Portfolio web personal</h3>
                            <p>Desarrollo Frontend </p>
                            <div className={styles.actions}>
                                <Button
                                    variant="link"
                                    onClick={handleScrollToFullProject}
                                    icon={<FiArrowUpRight />}
                                >
                                    Ver proyecto
                                </Button>

                                <Button
                                    variant="link"
                                    href="https://github.com/HuilenPe/Huilen-Portfolio"
                                    icon={<FiGithub />}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src="" alt="" className={styles.img} />
                        <div className={styles.content}>
                            <h3>Proyecto</h3>
                            <p>Desarrollo Frontend </p>
                            <div className={styles.actions}>
                                <Button
                                    variant="link"
                                    onClick={handleScrollToFullProject}
                                    icon={<FiArrowUpRight />}
                                >
                                    Ver proyecto
                                </Button>

                                <Button
                                    variant="link"
                                    href="https://github.com/HuilenPe/Huilen-Portfolio"
                                    icon={<FiGithub />}
                                >
                                    GitHub
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects