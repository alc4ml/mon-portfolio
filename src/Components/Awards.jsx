import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Awards = () => {
  const distinctions = [
    {
      title: "Bourse d’excellence EUR M&CS – Sorbonne Paris Nord",
      year: "2024-2026",
      description:
        "Attribuée par l'École Universitaire de Recherche Mathématiques et Informatique pour des résultats académiques d’excellence. Elle permet l’accès à des formations avancées en IA et mathématiques appliquées au sein de l’Institut Galilée.",
    },
    {
      title: "Bourse d’excellence Fondation Vallet",
      year: "2021 – 2023",
      description:
        "Financée par la Fondation Vallet, cette bourse est octroyée aux meilleurs étudiants du Bénin sur des critères stricts de mérite académique et de performance continue.",
    },
    // {
    //   title: "Bourse de la Direction des Bourses du Bénin",
    //   year: "2021 – 2023",
    //   description:
    //     "Bourse nationale d'excellence attribuée aux étudiants les mieux classés dans les institutions publiques, couvrant les frais de formation pour l’ensemble du cursus universitaire.",
    // },
    {
      title: "12ᵉ du Bénin au Baccalauréat 2020 (série C)",
      year: "2020",
      description:
        "Classé parmi les 0,02 % meilleurs bacheliers du pays, avec la 9ᵉ place nationale dans la série scientifique C. Cette distinction reflète un niveau élevé en mathématiques, physique et sciences fondamentales.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#111132] text-white pt-0 px-0 md:px-0">
      <div className="max-w-screen-xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-left font-heading">
          Distinctions & Bourses
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {distinctions.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4"
            >
              <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}{" "}
                  <span className="text-gray-400 font-normal">
                    ({item.year})
                  </span>
                </h3>
                <p className="text-gray-300 text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
