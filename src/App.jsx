import React from "react";
import { LanguageProvider } from "./pages/context/LanguageContext";
import Navbar from "./pages/components/Navbar";
import Hero from "./pages/components/Hero";
import About from "./pages/components/About";
import Services from "./pages/components/Services";
import Products from "./pages/components/Products";
import WhyChooseUs from "./pages/components/WhyChooseUs";
import Contact from "./pages/components/Contact";
import Footer from "./pages/components/Footer";

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // adjust for fixed navbar height (~80px)
      const navbarHeight = 80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar scrollToSection={scrollToSection} />

        {/* padding-top so content isn’t hidden behind fixed navbar */}
        <main className="pt-20">
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="services" className="scroll-mt-24">
            <Services />
          </section>

          <section id="products" className="scroll-mt-24">
            <Products />
          </section>

          <section id="whyus" className="scroll-mt-24">
            <WhyChooseUs />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
