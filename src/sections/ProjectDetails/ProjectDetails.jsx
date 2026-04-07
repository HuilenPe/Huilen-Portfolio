import styles from "../ProjectDetails/ProjectDetails.module.css"

function ProjectDetails() {

    return (
        <section>
            <div id="project-details" className={styles.details}>
                <h2>App de tareas UX/UI & Frontend</h2>
                <p>Diseño y desarrollo de una app para mejorar la productividad</p>

                {/* Mockups */}
                <div>
                    <img src="" />
                    <img src="" />
                </div>
                
            </div>
        </section>
    );
}

export default ProjectDetails