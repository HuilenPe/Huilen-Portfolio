import { useLanguage } from "../../i18n/language"
import styles from "./Contact.module.css"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>{t("Contacto")}</p>

          <h2>{t("¿Creamos algo?")}</h2>

          <p className={styles.description}>{t("Estoy abierta a oportunidades en frontend, UX/UI y equipos de producto donde diseño e implementación formen parte del mismo proceso.")}</p>

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

        <p className={styles.footerText}>portfolio — frontend & UI/UX</p>
      </div>
    </section>
  )
}

export default Contact