import { useTranslation } from "react-i18next"
import styles from "../ProjectDetails.module.css"

export default function EquinoxProcess() {
  const { t } = useTranslation()
  const text = (key) => t(`equinoxCase.${key}`)

  function screen(file, label) {
    const caption = text(label)
    return (
      <figure className={styles.equinoxCaseScreen}>
        <figcaption>{caption}</figcaption>
        <a
          href={`/images/equinox/${file}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("equinoxCase.openImage", { name: caption })}
        >
          <img
            src={`/images/equinox/${file}`}
            alt={caption}
            loading="lazy"
            decoding="async"
          />
        </a>
      </figure>
    )
  }

  return (
    <div className={styles.equinoxCaseProcess}>
      <section className={styles.equinoxCaseConstraints}>
        <h2>{text("constraintsTitle")}</h2>
        <p>{text("constraintsText")}</p>
        <p className={styles.equinoxCaseHint}>{text("photographyNote")}</p>
        <p>{text("briefText")}</p>
      </section>

      <section>
        <div className={styles.equinoxCaseText}>
          <h2>{text("designTitle")}</h2>
          <p>{text("designText")}</p>
          <p className={styles.equinoxCaseHint}>{text("imageHint")}</p>
        </div>
        <div
          className={styles.equinoxCaseComparison}
          tabIndex={0}
          role="region"
          aria-label={text("comparisonLabel")}
        >
          {screen("equinox-home-wireframe-desktop.png", "wireframeDesktop")}
          {screen("equinox-home-design-desktop.png", "designDesktop")}
        </div>
      </section>

      <section>
        <div className={styles.equinoxCaseText}>
          <h2>{text("mobileTitle")}</h2>
          <p>{text("mobileText")}</p>
        </div>
        <div className={styles.equinoxCaseMobile}>
          {screen("equinox-home-wireframe-mobile.png", "wireframeMobile")}
          {screen("equinox-mobile.png", "implementationMobile")}
        </div>
      </section>

      <section>
        <h2>{text("developmentTitle")}</h2>
        <p>{text("developmentText")}</p>
      </section>

      <details className={styles.equinoxCaseSupport}>
        <summary>{text("supportTitle")}</summary>
        <p>{text("supportText")}</p>
        <div className={styles.equinoxCaseSupportGrid}>
          {screen("equinox-about-wireframe-desktop.png", "aboutWireframe")}
          {screen("equinox-contact-wireframe-desktop.png", "contactDesktop")}
          {screen("equinox-contact-wireframe-mobile.png", "contactMobile")}
        </div>
      </details>


    </div>
  )
}
