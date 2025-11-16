import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("En");

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "En" ? "Ar" : "En";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const value = {
    language,
    toggleLanguage,
    isRTL: language === "Ar",
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: value },
    React.createElement(
      "div",
      {
        dir: value.isRTL ? "rtl" : "ltr",
        className: value.isRTL ? "font-arabic" : "font-english",
      },
      children
    )
  );
};
