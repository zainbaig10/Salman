import React, { useState, useEffect } from "react";
import { Phone, Wrench, Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // 👈 NEW
  const { language, toggleLanguage, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  // Scroll to section
  const scrollToSection = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
    setIsMobileMenuOpen(false); // 👈 close mobile menu after click
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "products",
        "whyus",
        "contact",
      ];
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setActiveSection("home");
        return;
      }

      if (window.innerHeight + scrollY >= document.body.offsetHeight - 100) {
        setActiveSection("contact");
        return;
      }

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - 120;
          const sectionHeight = element.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking anywhere
  useEffect(() => {
    const handleClickOutside = () => {
      if (isLanguageDropdownOpen) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      toggleLanguage();
    }
    setIsLanguageDropdownOpen(false);
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "products", label: t.nav.products },
    { id: "whyus", label: t.nav.whyus },
    { id: "contact", label: t.nav.contact },
  ];

  const languageOptions = [
    { code: "En", name: "English", flag: "🇺🇸" },
    { code: "Ar", name: "العربية", flag: "🇸🇦" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-20 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className={isRTL ? "text-right" : "text-left"}>
              <h1 className="text-base font-medium text-gray-900">
                Jawahir R. Al Ajmi
              </h1>
              <p className="text-xs text-blue-600 font-medium">
                Trading Establishment
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1 font-medium transition duration-300 text-sm uppercase tracking-wide ${
                  activeSection === item.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                } py-2 px-1`}
              >
                <span>{item.label}</span>
              </button>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 min-w-[100px] justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    {language}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => handleLanguageChange(option.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 ${
                        language === option.code
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="text-lg">{option.flag}</span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {option.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {option.code}
                        </span>
                      </div>
                      {language === option.code && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:0530061228"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callNow}</span>
            </a>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-blue-500 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {language}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-gray-500 transition-transform duration-200 ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => handleLanguageChange(option.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-150 ${
                        language === option.code
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="text-lg">{option.flag}</span>
                      <span className="text-sm font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Hamburger Button */}
            <button
              className="text-gray-700"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen((prev) => !prev);
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (below bar) */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 mt-2 pt-2 pb-4">
            <div
              className={`flex flex-col gap-2 ${
                isRTL ? "items-end text-right" : "items-start text-left"
              }`}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full py-2 text-sm font-medium uppercase tracking-wide ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="tel:0530061228"
                className="mt-2 inline-flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>{t.nav.callNow}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
