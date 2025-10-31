import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "LLM Engineering: Master AI, LLMs and Agents",
    description:
      "Maîtriser les LLMs en créant 8 applications d’IA en 8 semaines — Udemy (2025)",
  },
  {
    title: "Deep Learning avec TensorFlow et Keras",
    description: "MasterClass Python — Udemy (2025)",
  },
  {
    title: "Programmer en Python pour la Data Science de A à Z",
    description: "Udemy (2023)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Certifications = () => {
  return (
    <section className="bg-[#111132] text-white pt-16 px-0 md:px-0 sm:px-0">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          Certifications
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6 text-base md:text-lg"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <p className="text-white font-semibold">{cert.title}</p>
              <p className="text-gray-400">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
