import React from "react";
import pro1 from "../../assets/product4.jpg";
import pro2 from "../../assets/images/pro2.jpg";
import pro3 from "../../assets/product3.jpg";
import pro4 from "../../assets/images/pro4.jpg";
import { useLanguage } from "../context/LanguageContext";
import { En } from "../context/En";
import { Ar } from "../context/Ar";

const Products = () => {
  const { language, isRTL } = useLanguage();
  const t = language === "En" ? En : Ar;

  const products = [
    {
      title: t.products.pipes,
      img: pro1,
    },
    {
      title: t.products.switches,
      img: pro2,
    },
    {
      title: t.products.lighting,
      img: pro3,
    },
    {
      title: t.products.cables,
      img: pro4,
    },
  ];

  return (
    <section className="bg-gray-100 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.products.title}
        </h2>

        <p
          className={`text-sm text-gray-600 text-center max-w-2xl mx-auto mb-10 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.products.description}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-gray-100 bg-[#F5F7FB]"
            >
              <div className="h-44 w-full bg-gray-200">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <p
                  className={`text-sm font-semibold text-gray-900 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {p.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
