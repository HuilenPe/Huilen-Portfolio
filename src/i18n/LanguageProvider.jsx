import { useEffect, useState } from "react"
import { LanguageContext } from "./language"

function initialLanguage() {
  try {
    return localStorage.getItem("portfolio-language") === "en" ? "en" : "es"
  } catch {
    return "es"
  }
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem("portfolio-language", language)
    } catch {
      // Language switching remains available when browser storage is blocked.
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
