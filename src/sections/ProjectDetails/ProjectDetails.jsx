import styles from "./ProjectDetails.module.css";
import { projects } from "../Projects/ProjectsData";

function ProjectDetails() {
    return (
        <section className={styles.section}>
            <div className="container">

                {projects.map(project => (
                    <div
                        key={project.id}
                        id={project.id}
                        className={styles.details}
                    >

                        {/* 👉 SOLO renderiza si tiene details */}
                        {project.details && (
                            <>
                                {/* HERO */}
                                <div className={styles.hero}>
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

                                {/* CONTEXT + APPROACH */}
                                <div className={styles.gridTwo}>

                                    {/* LEFT */}
                                    <div>
                                        <h3>Context</h3>

                                        <p>
                                            <strong>Problema:</strong><br />
                                            {project.details.context?.problema}
                                        </p>

                                        <p>
                                            <strong>Objetivo:</strong><br />
                                            {project.details.context?.objetivo}
                                        </p>

                                        <ul>
                                            {project.details.context?.usuario?.map((u, i) => (
                                                <li key={i}>{u}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* RIGHT */}
                                    <div>
                                        <h3>Approach</h3>

                                        <ul>
                                            {project.details.approach?.decisiones?.map((d, i) => (
                                                <li key={i}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>

                                {/* USER FLOW */}
                                {project.details.flowImage && (
                                    <div className={styles.flow}>
                                        <img src={project.details.flowImage} alt="User flow" />
                                    </div>
                                )}

                                {/* SCREENS */}
                                <div className={styles.screens}>
                                    {project.details.screens?.map((screen, i) => (
                                        <div key={i} className={styles.screenCard}>
                                            <img src={screen.img} alt={screen.title} />
                                            <h4>{screen.title}</h4>
                                            <p>{screen.description}</p>
                                        </div>
                                    ))}
                                </div>

                            </>
                        )}

                    </div>
                ))}

            </div>
        </section>
    );
}

export default ProjectDetails;