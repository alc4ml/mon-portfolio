import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    date: "Oct 2025",
    title: "Breast Cancer Type Prediction",
    description:
      "Comparison of classical ML models (SVM, Random Forest, MLP) for tumor classification from tabular data.",
    tools: ["Scikit-learn", "PyTorch", "Git"],
    github: "https://github.com/alc4ml/Prediction-du-type-de-cancer",
  },
  {
    date: "Sept 2025",
    title: "Financial Anomaly Detection",
    description:
      "Using PCA and Isolation Forest to detect suspicious financial transactions.",
    tools: ["Scikit-learn", "Pandas", "Git"],
    github: "https://github.com/alc4ml/Detection-de-fraudes",
  },
  {
    date: "Aug 2025 – Oct 2025",
    title: "AI Knowledge-Worker using RAG",
    description:
      "Building an intelligent assistant using RAG and LLMs for document analysis.",
    tools: ["Python", "LangChain", "Chroma", "OpenAI API", "Git"],
  },
  {
    date: "May 2025",
    title: "DTM Filtration & Topological Data Analysis",
    description:
      "Exploration of DTM-based filtrations for topological vectorization and ML classification.",
    tools: ["Scikit-learn", "GUDHI", "Pandas"],
    github: "https://github.com/alc4ml/TDA-DTM-based-filtration",
  },
  {
    date: "Apr 2025",
    title: "Distributed File Download System",
    description:
      "Designed and implemented a distributed system that allows multiple clients to download a file in parallel from a central server. The project simulates network failures and delegation between clients to ensure fault tolerance and optimize download efficiency. Developed in a three-person team",
    tools: ["Java", "Threads", "Sockets", "ProcessBuilder"],
    github: "",
  },
  {
    date: "Mar – May 2025",
    title: "ActiLife – Smart Health Tracking App",
    description:
      "Developed a mobile application for health and wellness monitoring, including step tracking, medication reminders, sleep and hydration alerts, and personalized sports planning. The project followed Agile methodology and emphasized team collaboration, modular design, and user-centered development. Developed in four-person team",
    tools: ["Java", "XML", "Android Studio", "Agile Methodology"],
    github: "",
  },

  {
    date: "Dec 2024",
    title: "Movie Recommendation System Based on User Similarity",
    description:
      "Built a movie recommendation engine using the Annoy library to compute user similarity and generate personalized suggestions efficiently from large datasets. Developed in a pair team",
    tools: ["Python", "Annoy"],
    github: "",
  },
  {
    date: "Apr 2024",
    title: "Customer Segmentation and Recommendation",
    description:
      "Clustering customers using K-Means with recommendation logic based on similarity. Developed in a pair team",
    tools: ["NumPy", "Pandas"],
    github: "",
  },
  {
    date: "Dec 2023 – Feb 2024",
    title: "Crisis Management Multi-Agent System",
    description:
      "Developed a crisis management simulation system using the GAMA platform. Modeled agents representing humans, robots, and coordinators to manage emergencies dynamically through collaboration, resource allocation, and 3D visualization. Developed in a pair team",
    tools: ["GAMA Platform", "GAIA Methodology", "LaTeX"],
    github: "",
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

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Projects1 = () => {
  return (
    <section
      id="projects"
      className="bg-[#111132] text-white pt-11 pb-5 px-0 md:px-0 sm:px-0"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold text-left font-heading mb-6">
            Projects
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative group bg-[#0e0e2d] border border-[#1c1c3a] hover:border-pink-600 rounded-xl p-5 shadow-lg h-full flex flex-col justify-between overflow-hidden"
            >
              {/* Glow background */}
              <div className="absolute inset-0 z-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500 group-hover:scale-105 bg-gradient-to-r from-pink-500/20 to-purple-500/20" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {proj.title}
                  </h4>
                  <span className="text-xs text-gray-400">{proj.date}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{proj.description}</p>
                <div className="flex flex-wrap ">
                  {proj.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full  text-gray-300 font-mono shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Icon (if applicable) */}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 text-gray-400 hover:text-white transition"
                  title="View on GitHub"
                >
                  <FaGithub size={20} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects1;
