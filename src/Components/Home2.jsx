import React from "react";
import arrowImg from "../assets/arrow.jpg"; // remplace par ton image
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";
console.log("Home2 loaded");

const Home2 = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-[#03030a] to-[#0b0b2b] text-white px-8 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] items-center gap-12 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 z-0 before:content-[''] before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:bg-repeat"></div>

      {/* Left Side - Text */}
      <div className="space-y-6 relative z-10">
        {/* Tagline supprimé temporairement */}

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-magiestra">
            Marcel M.
          </span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl">
          Passionate about Artificial Intelligence and Data Science applied to
          finance, healthcare, and complex systems. I love turning data into
          impactful solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-md shadow-md hover:opacity-90 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-purple-500 text-purple-300 rounded-md hover:bg-purple-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 pt-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-purple-400 transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="mailto:email@example.com">
            <FaEnvelope className="text-2xl hover:text-pink-400 transition" />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="text-2xl hover:text-indigo-400 transition" />
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center lg:justify-end relative z-10">
        <div className="relative w-80 h-96 bg-[#0b0b2b] overflow-hidden [clip-path:polygon(10%_0%,100%_0%,100%_90%,90%_100%,0%_100%,0%_10%)] shadow-lg">
          <img
            src={arrowImg}
            alt="Marcel"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>
    </section>
  );
};

export default Home2;
