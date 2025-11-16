import React from "react";
import { Wrench, Zap, Home, ShoppingCart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const Services = ({ servicesRef }) => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: t.services.plumbing.title,
      description: t.services.plumbing.description,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.services.electrical.title,
      description: t.services.electrical.description,
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: t.services.renovation.title,
      description: t.services.renovation.description,
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t.services.sales.title,
      description: t.services.sales.description,
    },
  ];

  return (
    <section ref={servicesRef} className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-300 transition duration-300 hover:shadow-lg"
            >
              <div
                className={`flex items-start space-x-6 ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                <div className="bg-blue-500 text-white group-hover:bg-blue-700 transition duration-300 p-4 rounded-lg">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
