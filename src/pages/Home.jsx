import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ServicesSection from "./components/Services";
import ProductsSection from "./components/Products";
import WhyChooseSection from "./components/WhyChooseUs";
import ContactSection from "./components/Contact";
import FooterSection from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      <Navbar />

      <section id="home" className="scroll-mt-20">
        <HeroSection />
      </section>

      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="products" className="scroll-mt-20">
        <ProductsSection />
      </section>

      <section id="whyus" className="scroll-mt-20">
        <WhyChooseSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>

      <FooterSection />
    </div>
  );
};

export default Home;
