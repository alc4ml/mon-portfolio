import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2025–2026",
    title: "2nd Year of Master: Applied Mathematics for Data Science",
    school: "Institut Galilée",
    university: "Université Sorbonne Paris Nord",
    description: "EUR Math & Computer Science",
  },
  {
    year: "2024–2025",
    title: "1st Year of Master: Computer Science (top 6%)",
    school: "Institut Galilée",
    university: "Université Sorbonne Paris Nord",
    description: "EUR Math & Computer Science",
  },
  {
    year: "2023–2024",
    title: "Master 1: Data Science ",
    school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    university: "Université d'Abomey-Calavi",
    description: "Programme interrompu",
  },
  {
    year: "2022–2023",
    title: "Bachelor’s Degree in Computer Science (top 5%)",
    school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    university: "Université d'Abomey-Calavi",
    description: "",
  },
  {
    year: "2020–2022",
    title: "Preparatory Classes for Top Engineering Schools — MPSI",
    school: "IMSP",
    university: "Université d'Abomey-Calavi",
    description: "",
  },
  {
    year: "2020",
    title: "Baccalauréat Série C — Mention Très Bien",
    school: "Lycée au Bénin",
    university: "",
    description: "Sciences et Techniques (Mathématiques, Physique, Chimie)",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Education2 = () => {
  return (
    <section className="w-full pb-9 pt-0 bg-[#111132] text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          Education
        </h2>

        {/* Animation container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative group bg-[#111132] border border-[#2b2b50] hover:border-pink-500 rounded-2xl p-4 shadow-lg h-[240px] flex flex-col justify-between overflow-hidden"
            >
              {/* Glow aura */}
              <div className="absolute inset-0 z-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-105 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />

              <div className="relative z-10">
                <span className="text-sm text-green-400">{item.year}</span>
                <h3 className="text-lg font-bold mt-2 text-white">
                  {item.title}
                </h3>
                <p className="italic text-sm text-gray-300 mt-1">
                  {item.school}
                </p>
                {item.university && (
                  <p className="italic text-sm text-gray-500">
                    {item.university}
                  </p>
                )}
                {item.description && (
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 mt-4 text-sm text-orange-500  hover:text-white border border-black px-2 py-1 rounded-sm cursor-pointer w-fit hover:bg-transparent transition"

              >
                click me
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education2;
