import { useTranslation } from "react-i18next"
import styles from "./LanguageSwitcher.module.css"

function LanguageSwitcher({ containerRef }) {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage || "es"

  return (
    <div
      ref={containerRef}
      className={styles.switcher}
      role="group"
      aria-label={t("common.language")}
    >
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={code === "es" ? "Español" : "English"}
          aria-pressed={language === code}
          onClick={() => i18n.changeLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
