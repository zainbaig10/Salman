import React from "react";
import { Wrench, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const Footer = () => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8 ${
            isRTL ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Company Info */}
          <div className={`md:col-span-2 ${isRTL ? "md:col-start-3" : ""}`}>
            <div
              className={`flex items-center space-x-3 mb-4 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Wrench className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Jawahir R. Al Ajmi</span>
            </div>
            <p
              className={`text-gray-400 mb-6 max-w-md leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/966530061228"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:0530061228"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? "md:col-start-2" : ""}>
            <h3
              className={`text-lg font-bold mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.footer.services}
            </h3>
            <ul className={`space-y-2 ${isRTL ? "text-right" : "text-left"}`}>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.footer.plumbing}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.footer.electrical}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.footer.renovation}
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {t.footer.materials}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isRTL ? "md:col-start-1" : ""}>
            <h3
              className={`text-lg font-bold mb-4 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.footer.contact}
            </h3>
            <div className={`space-y-3 ${isRTL ? "text-right" : "text-left"}`}>
              <div
                className={`flex items-center space-x-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">0530061228 </span>
              </div>
              <div
                className={`flex items-center space-x-2 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Al Khobar, KSA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <a
            href="https://www.ex-ion.com/software.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            © {new Date().getFullYear()} Ex-ion {t.footer.rights}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
