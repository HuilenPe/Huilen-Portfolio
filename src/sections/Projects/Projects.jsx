import styles from "./Projects.module.css"
import Button from "../../components/Button/button"

function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Proyectos</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <img src="" alt="" className={styles.img} />

                        <div className={styles.content}>
                            <h3>Health Management</h3>
                            <p>UX/UI Design</p>

                            <div className={styles.actions}>
                                <Button href="#">Ver proyecto</Button>
                                <Button href="#">Figma</Button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>Proyecto</h3>
                        <p>Descripción</p>
                    </div>

                    <div className={styles.card}>
                        <h3>Proyecto</h3>
                        <p>Descripción</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects