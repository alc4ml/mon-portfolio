import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/arrow.jpg"; // Remplace par ta photo
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";
import morel1 from "../assets/1.jpeg"

const roles = ["Data Scientist", "Research Scientist", "Machine learning Engineer"];

const Home3 = () => {
  const [index, setIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    const currentRole = roles[index];
    let i = 0;

    const typingDelay = 100;
    const erasingDelay = 100;
    const pauseAfterTyping = 1500;
    const pauseAfterErasing = 300;

    const type = () => {
      if (i <= currentRole.length) {
        setDisplayText(currentRole.slice(0, i));
        i++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(() => {
          let j = currentRole.length;
          const erase = () => {
            if (j >= 0) {
              setDisplayText(currentRole.slice(0, j));
              j--;
              setTimeout(erase, erasingDelay);
            } else {
              setTimeout(() => {
                setIndex((prev) => (prev + 1) % roles.length);
              }, pauseAfterErasing);
            }
          };
          erase();
        }, pauseAfterTyping);
      }
    };

    type();
  }, [index]);

  return (
    <section className="relative w-full h-screen bg-[#111132] text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-purple-500 to-transparent opacity-20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6">
        <img
          src={morel1}
          alt="Marcel"
          className="w-40 h-40 rounded-full object-cover border-2 border-purple-500 shadow-md"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-4xl md:text-6xl font-bold"
        >
          <span className="text-white font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-green-400">
            {displayText}
          </span>
          <span className="animate-pulse">|</span>
        </motion.h1>

        <p className="text-gray-400 max-w-2xl">
        Je suis passionné par la data science et l’intelligence artificielle. Mon objectif ? Transformer les données en solutions intelligentes et utiles.
        </p>



        {/* CTA Buttons */}
        <div className="flex gap-4 pt-4 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-br from-green-400 to-blue-500 hover:text-white text-white rounded-full shadow-md hover:opacity-90 transition"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-400 text-blue-300 rounded-full hover:bg-blue-500 hover:text-white transition"
          >
            Me contacter
          </a>
        </div>

                {/* Réseaux sociaux */}
        <div className="flex items-center justify-center gap-6 text-xl text-gray-400">
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ton.email@example.com"
            className="hover:text-red-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://discordapp.com/users/tonID"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition"
          >
            <FaDiscord />
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Home3;
