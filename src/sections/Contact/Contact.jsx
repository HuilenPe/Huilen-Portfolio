import { useTranslation } from "react-i18next"
import styles from "./Contact.module.css"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"

function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.label}>{t("contact.label")}</p>

          <h2>{t("contact.title")}</h2>

          <p className={styles.description}>{t("contact.description")}</p>

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

              <a href="mailto:huilenpe@gmail.com" aria-label={t("contact.emailLabel")}>
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