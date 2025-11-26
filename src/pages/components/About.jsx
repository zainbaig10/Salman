import React from "react";
import { Award, Calendar, Users } from "lucide-react";
import img from "../../assets/images/aboutus.jpg";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const About = ({ aboutRef }) => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  return (
    <section ref={aboutRef} className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
            isRTL ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Content */}
          <div className={isRTL ? "lg:col-start-2" : ""}>
            <h2
              className={`text-3xl font-bold text-gray-900 mb-6 ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.about.title}
            </h2>
            <p
              className={`text-base text-gray-600 mb-6 leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.about.description1}
            </p>
            <p
              className={`text-base text-gray-600 mb-6 leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.about.description2}
            </p>
            <p
              className={`text-base text-gray-600 mb-8 leading-relaxed ${
                isRTL ? "text-right" : "text-left"
              }`}
            >
              {t.about.description3}
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600 font-medium">
                  {t.about.projectsCompleted}
                </div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
                <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600">2010</div>
                <div className="text-gray-600 font-medium">
                  {t.about.servingSince}
                </div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100 hover:shadow-lg transition duration-300">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600">100+</div>
                <div className="text-gray-600 font-medium">
                  {t.about.trustedByClients}
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative ${isRTL ? "lg:col-start-1" : ""}`}>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Professional Plumbing and Electrical Team"
                className="w-full h-[400px] object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-blue-900/20"></div>

              {/* Overlay Text */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-8 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t.about.trustedSince}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {t.about.trustedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
