import React from "react";
import { MessageCircle, Phone, Shield } from "lucide-react";
import img from "../../assets/images/Banner.jpg";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const Hero = () => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  return (
    <section className="pt-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] ${
            isRTL ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content */}
          <div className={`py-8 lg:py-12 ${isRTL ? "lg:col-start-2" : ""}`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full mb-8 shadow-lg">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">{t.hero.trustedSince}</span>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.hero.mainHeading}
              <span className="text-blue-600 block">{t.hero.forEveryHome}</span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.hero.subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/966530061228"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-lg">{t.hero.freeConsultation}</span>
              </a>

              <a
                href="tel:0530061228"
                className="inline-flex items-center justify-center gap-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span className="text-lg">{t.hero.emergencyCall}</span>
              </a>
            </div>

            {/* Stats */}
            {/* <div className="flex items-center gap-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">
                  {t.hero.projects}
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 font-medium">
                  {t.hero.satisfaction}
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">14+</div>
                <div className="text-sm text-gray-600 font-medium">
                  {t.hero.years}
                </div>
              </div>
            </div> */}
          </div>

          {/* Image Section */}
          <div className={`relative ${isRTL ? "lg:col-start-1" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Professional Plumbing and Electrical Services"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-xl shadow-2xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 font-medium">
                  {t.hero.emergency247}
                </div>
                <div className="text-xs text-blue-600 font-semibold mt-1">
                  0530061228
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-blue-600 text-white rounded-xl shadow-2xl p-4 text-center">
                <div className="text-2xl font-bold">14+</div>
                <div className="text-sm">{t.hero.yearsExperience}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
