export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      ministries: "Ministerios",
      events: "Eventos",
      contact: "Contacto",
      donate: "Donar Ahora",
    },
    // Add more translations as needed
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      ministries: "Ministries",
      events: "Events",
      contact: "Contact",
      donate: "Donate Now",
    },
    // Add more translations as needed
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.es 