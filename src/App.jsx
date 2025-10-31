import { useState } from "react";
import "./App.css";
import "./fonts.css";

import Home3 from "./Components/Home3";
import About1 from "./Components/About1";
import Education2 from "./Components/Education2";
import Projects1 from "./Components/Projects1";
import Skills from "./Components/Skills";
import CertificationsSection from "./Components/CertificationsSection";
import Awards from "./Components/Awards";
import Experience from "./Experience";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContactSection from "./Components/ContactSection";

function App() {
  return (
    <>
      <Navbar />
      <Home3 />

      <div className="w-full bg-[#111132]">
        <div className="max-w-screen-xl mx-auto px-4">
          <About1 />
          <hr className="my-16 border-gray-700" />
          <Education2 />
          <Experience />
          <Projects1 />
          <Skills />
          <Awards />
          <CertificationsSection />
          <hr className="my-16 border-gray-700" />
          <ContactSection />
        </div>
      </div>

      {/* Footer en dehors du conteneur centré */}
      <Footer />
    </>
  );
}

export default App;
