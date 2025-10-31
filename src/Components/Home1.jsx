// src/components/Home1.jsx

import React from "react";
import arrowImg from "../assets/arrow.jpg";

const Home1 = () => {
  return (
    <section className="min-h-[66vh] flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 bg-gradient-to-br from-[#03030a] to-[#0b0b2b] text-white">
      {/* Left : Text content */}
      <div className="max-w-xl space-y-6 text-center lg:text-left">
        <div className="flex gap-3 justify-center lg:justify-start text-sm text-[#999] uppercase tracking-widest">
          <span>Web</span>
          <span>Developer</span>
          <span>Experience</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hello, I'm <span className="text-blue-400">Marcel M.</span>
        </h1>
        <p className="text-gray-300 text-lg">
          Research Scientist | Data Scientist
          <p>Passionnate about AI and Data Applied to finance, Healthcare and industry.</p>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="flex items-center justify-center space-x-1 w-40 h-16 rounded-lg border bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg hover:bg-none hover:border border-blue-800"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center px-3 py-2 h-16 w-40 border border-blue-800 text-white rounded-md text-sm font-medium hover:text-white transition hover:bg-gradient-to-br from-pink-500 to-purple-500 hover:text-[#0b0b2b]"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Right : Illustration */}
      <div className="hidden lg:block">
        <img
          src={arrowImg}
          alt="Illustration"
          className="max-w-md rounded-fullw-full h-full object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default Home1;
