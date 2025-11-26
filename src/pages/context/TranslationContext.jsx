import React, { createContext, useContext, useState } from "react";

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      // Navigation
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      whyUs: "Why Us",
      contact: "Contact",
      callNow: "Call Now",

      // Hero Section
      heroHeadline: "Reliable Plumbing & Electrical Solutions for Every Home",
      heroSubheadline:
        "Your trusted partner for expert installations, repairs, and quality materials in Al Khobar.",
      contactUsNow: "Contact Us Now →",
      getFreeConsultation: "Get Free Consultation",
      emergencyCall: "Emergency Call",

      // About Section
      aboutHeading: "About Jawahir R. Al Ajmi Trad. Est.",
      aboutParagraph1:
        "We are a trusted name in house plumbing and electrical works, serving homes and businesses across Al Khobar.",
      aboutParagraph2:
        "With years of experience and a commitment to quality, our team delivers fast, reliable, and affordable services.",
      aboutParagraph3:
        "We also supply a wide range of plumbing and electrical materials, ensuring every project is completed with durable products.",
      projectsCompleted: "Projects Completed",
      servingSince: "Serving Al Khobar Since",
      trustedClients: "Trusted by Local Clients",

      // Services Section
      servicesHeading: "What We Do",
      plumbingServices: "Plumbing Installations & Repairs",
      electricalServices: "Electrical Wiring & Maintenance",
      renovationServices: "Complete House Renovation Support",
      materialsSales: "Sales of Plumbing and Electrical Materials",

      // Products Section
      productsHeading: "Quality Materials We Offer",
      productsDescription:
        "From pipes, fittings, and valves to switches, lighting, and cables — we stock everything you need for reliable electrical and plumbing work.",

      // Why Choose Us Section
      whyChooseUsHeading: "Why Choose Us",
      experiencedTechnicians: "Experienced and Skilled Technicians",
      fastResponse: "Fast Response and Timely Delivery",
      competitivePricing: "Competitive Pricing",
      qualityAssured: "Quality Assured Products",

      // Contact Section
      contactHeading: "Get in Touch",
      phone: "Phone",
      address: "Address",
      businessHours: "Business Hours",
      emergencyService: "Emergency Service",
      contactWhatsApp: "Contact on WhatsApp",

      // Footer
      allRightsReserved: "All rights reserved",
    },
    ar: {
      // Navigation
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      products: "منتجاتنا",
      whyUs: "لماذا نحن",
      contact: "اتصل بنا",
      callNow: "اتصل الآن",

      // Hero Section
      heroHeadline: "حلول سباكة وكهرباء موثوقة لكل منزل",
      heroSubheadline:
        "شريكك الموثوق للتركيبات الخبيرة والإصلاحات ومواد عالية الجودة في الخبر.",
      contactUsNow: "اتصل بنا الآن →",
      getFreeConsultation: "احصل على استشارة مجانية",
      emergencyCall: "اتصال طوارئ",

      // About Section
      aboutHeading: "عن جوهر ر. العجمي للتجارة",
      aboutParagraph1:
        "نحن اسم موثوق في أعمال السباكة والكهرباء المنزلية، نخدم المنازل والشركات في جميع أنحاء الخبر.",
      aboutParagraph2:
        "مع سنوات من الخبرة والالتزام بالجودة، يقدم فريقنا خدمات سريعة وموثوقة وبأسعار معقولة.",
      aboutParagraph3:
        "نحن أيضًا نورد مجموعة واسعة من مواد السباكة والكهرباء، مما يضمن اكتمال كل مشروع بمنتجات متينة.",
      projectsCompleted: "مشروع مكتمل",
      servingSince: "نخدم الخبر منذ",
      trustedClients: "عملاء محليين يثقون بنا",

      // Services Section
      servicesHeading: "ما نقدمه",
      plumbingServices: "تركيبات وإصلاحات السباكة",
      electricalServices: "الأسلاك الكهربائية والصيانة",
      renovationServices: "دعم تجديد المنزل الكامل",
      materialsSales: "بيع مواد السباكة والكهرباء",

      // Products Section
      productsHeading: "المواد عالية الجودة التي نقدمها",
      productsDescription:
        "من الأنابيب والتجهيزات والصمامات إلى المفاتيح والإضاءة والكابلات — لدينا كل ما تحتاجه لأعمال الكهرباء والسباكة الموثوقة.",

      // Why Choose Us Section
      whyChooseUsHeading: "لماذا تختارنا",
      experiencedTechnicians: "فنيون ذوو خبرة ومهارة",
      fastResponse: "استجابة سريعة وتوصيل في الوقت المحدد",
      competitivePricing: "أسعار تنافسية",
      qualityAssured: "منتجات مضمونة الجودة",

      // Contact Section
      contactHeading: "ابق على تواصل",
      phone: "هاتف",
      address: "عنوان",
      businessHours: "ساعات العمل",
      emergencyService: "خدمة الطوارئ",
      contactWhatsApp: "اتصل عبر واتساب",

      // Footer
      allRightsReserved: "جميع الحقوق محفوظة",
    },
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      <div
        dir={language === "ar" ? "rtl" : "ltr"}
        className={language === "ar" ? "font-arabic" : ""}
      >
        {children}
      </div>
    </TranslationContext.Provider>
  );
};
