import styles from "./Contact.module.css"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>Contacto</p>

          <h2>¿Creamos algo juntas?</h2>

          <p className={styles.description}>
            Estoy abierta a oportunidades junior frontend, UI design y proyectos
            donde pueda seguir creciendo diseñando y construyendo interfaces.
          </p>

          <div className={styles.links}>
            <a href="mailto:huilenpe@gmail.com" className={styles.mainLink}>
              huilenpe@gmail.com
              <span>→</span>
            </a>

            <div className={styles.socials}>
              <a
                href="https://github.com/HuilenPe"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/huilen-pe"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>

              <a href="mailto:huilenpe@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <p className={styles.footerText}>h. portfolio — frontend & UI/UX</p>
      </div>
    </section>
  )
}

export default Contact