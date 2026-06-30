import { createContext, useContext, useState, ReactNode } from "react";
import { TRANSLATIONS, TranslatedData } from "./translations";

export type LanguageCode = "es" | "en" | "de" | "val";

interface LanguageContextProps {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  data: TranslatedData;
  t: TranslatedData["UI"];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "es" || saved === "en" || saved === "de" || saved === "val") {
      return saved as LanguageCode;
    }
    return "es";
  });

  const setLang = (newLang: LanguageCode) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const data = TRANSLATIONS[lang];
  const t = data.UI;

  return (
    <LanguageContext.Provider value={{ lang, setLang, data, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
