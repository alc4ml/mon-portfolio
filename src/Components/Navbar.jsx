import React, { useState } from "react";
import { FiSun } from "react-icons/fi"; // Icône light mode
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLightModeClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#03030a]/80 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 md:px-32 py-4 flex items-center justify-between">
        {/* Logo / Nom */}
        <div className="text-green-400 font-south text-3xl tracking-wide pb-4">
          Orelis
        </div>

        {/* Liens */}
        <nav className="flex items-center gap-6 text-sm text-gray-300 relative">
          <a href="#projects" className="hover:text-white transition">Projets</a>
          <a href="#skills" className="hover:text-white transition">Compétences</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>

          {/* Bouton light mode */}
          <button
            onClick={handleLightModeClick}
            className="text-yellow-400 hover:text-yellow-300 transition text-lg"
            title="Switch to light mode"
          >
            <FiSun />
          </button>

          {/* Pop-up humoristique */}
          <AnimatePresence>
            {showPopup && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute right-0 top-10 text-sm bg-[#1f1f3a] border border-yellow-500 text-white px-4 py-2 rounded shadow-lg z-50"
              >
                Good devs never use light mode ⚡
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
