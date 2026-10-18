import { createContext, useContext } from "react"
import english from "./en.json"

export const LanguageContext = createContext(null)

// Spanish source messages also serve as stable translation keys.
export function translate(language, message, values = {}) {
  const text = language === "en" ? (english[message] ?? message) : message
  return text.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match)
}

export function localize(language, value) {
  if (language === "es") return value
  if (typeof value === "string") return translate(language, value)
  if (Array.isArray(value)) return value.map((item) => localize(language, item))
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localize(language, item)]))
  }
  return value
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage requires LanguageProvider")
  return { ...context, t: (message, values) => translate(context.language, message, values) }
}
