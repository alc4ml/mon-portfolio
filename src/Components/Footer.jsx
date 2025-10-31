import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b0b2b] text-gray-300 py-12 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        {/* Haut du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Gauche */}
          <div className="text-3xl font-south text-green-400 tracking-wider">
            Orelis
          </div>

          {/* Centre */}
          <ul className="flex flex-wrap gap-6 text-sm text-gray-400 text-center md:text-left">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#discover" className="hover:text-white transition">Discover Orelis</a></li>
          </ul>

          {/* Droite */}
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
            <a href="mailto:your@email.com" className="hover:text-white transition">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Orelis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
