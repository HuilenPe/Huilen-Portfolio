import styles from "../ProjectDetails/ProjectDetails.module.css"

const projects = [
    {
        id: "health-client",
        title: "Health Client Management",
        description: "App de salud UI",
        images: ["", ""],
    },
    {
        id: "task-app",
        title: "App de tareas UX/UI & Frontend",
        description: "Diseño y desarrollo de una app para mejorar la productividad",
        images: ["", ""],
    },
    {
        id: "portfolio",
        title: "Portfolio web personal",
        description: "Diseño UI & Desarrollo Frontend",
        images: ["", ""],
    },
];

function ProjectDetails() {
    return (
        <section className={styles.section}>
            <div className="container">
                {projects.map(project => (
                    <div key={project.id} id={project.id} className={styles.details}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className={styles.images}>
                            {project.images.map((src, idx) => (
                                <img key={idx} src={src} alt={`${project.title} mockup ${idx + 1}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectDetails;