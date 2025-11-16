import React from "react";
import { Users, Clock, DollarSign, Shield } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const WhyChooseUs = ({ whyUsRef }) => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t.whyus.experienced.title,
      description: t.whyus.experienced.description,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t.whyus.fast.title,
      description: t.whyus.fast.description,
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t.whyus.pricing.title,
      description: t.whyus.pricing.description,
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t.whyus.quality.title,
      description: t.whyus.quality.description,
    },
  ];

  return (
    <section ref={whyUsRef} className="py-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.whyus.title}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
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
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-gray-600 leading-relaxed ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {feature.description}
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

export default WhyChooseUs;
