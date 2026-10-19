import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import es from "./locales/es.json"
import en from "./locales/en.json"

function getInitialLanguage() {
  try {
    return localStorage.getItem("portfolio-language") === "en"
      ? "en"
      : "es"
  } catch {
    return "es"
  }
}

function syncLanguage(language) {
  const currentLanguage = language === "en" ? "en" : "es"

  document.documentElement.lang = currentLanguage

  try {
    localStorage.setItem("portfolio-language", currentLanguage)
  } catch {
    // El cambio de idioma funciona aunque el navegador bloquee el almacenamiento.
  }
}

i18n.on("languageChanged", syncLanguage)

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "es",
  supportedLngs: ["es", "en"],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
