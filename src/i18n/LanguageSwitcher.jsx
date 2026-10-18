import { useLanguage } from "./language"
import styles from "./LanguageSwitcher.module.css"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className={styles.switcher} role="group" aria-label={language === "es" ? "Idioma" : "Language"}>
      {["es", "en"].map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-label={code === "es" ? "Español" : "English"}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
