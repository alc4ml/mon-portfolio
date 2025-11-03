import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    year: "2025–2026",
    title: "2nd Year of Master: Applied Mathematics for Data Science",
    school: "Institut Galilée",
    university: "Université Sorbonne Paris Nord",
    description: "EUR Math & Computer Science",
    details: [
      "Deep Learning",
      "Statistical Learning",
      "Exploratory Multivariate Statistics",
      "Numerical Data Science",
      "Topological Data Analysis",
      "Descriptive Statistics",
      "High Dimensional Statistics",
      "Combinatorics and Probability",
    ],
  },
  {
    year: "2024–2025",
    title: "1st Year of Master: Computer Science (top 6%)",
    school: "Institut Galilée",
    university: "Université Sorbonne Paris Nord",
    description: "EUR Math & Computer Science",
    details: [
      "Programming Foundations",
      "Advanced Data Structures",
      "Databases",
      "Computational Geometry",
      "Computability and Complexity",
      "Constraint Programming",
      "Text Algorithms",
      "Distributed Programming in Java",
      "Project Management and Leadership",
      "Principles of Programming (Low-Level and Haskell)",
    ],
  },
  {
    year: "2023–2024",
    title: "Master 1: Data Science",
    school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    university: "Université d'Abomey-Calavi",
    description: "Programme interrupted",
    details: [
      "Distributed Databases (attended, no final exam)",
      "Object-Oriented Programming with C++ (completed)",
      "Competitive Programming (completed)",
      "Data Mining (completed)",
      "Introduction to Machine Learning (completed)",
      "Machine Learning Optimization (completed)",
      "Image Processing (attended, no final exam)",
      "Multi-Agent Systems (attended, no final exam)",
      "Artificial Intelligence (attended, no final exam)",
      "Project Management (completed)",
      "Numerical Analysis (completed)",
      "Probability Theory (attended, no final exam)",
      "Operations Research, Graph Theory, and Linear Programming (completed)",
    ],
  },
  {
    year: "2022–2023",
    title: "Bachelor’s Degree in Computer Science (top 5%)",
    school: "Institut de Mathématiques et de Sciences Physiques (IMSP)",
    university: "Université d'Abomey-Calavi",
    description: "",
    details: [
      "Differential Analysis",
      "C Language",
      "Electromagnetism and Matrix Algebra",
      "Information Systems",
      "Linux and Operating Systems",
      "Logic of Digital Systems",
      "English",
      "Fundamentals of Computer Networks",
      "Statistics and Probability",
      "Web Design and Programming",
      "Data Structures and Algorithms",
      "Java",
      "Classical Network Systems",
      "Logic and Proof Techniques",
      "Python",
      "System Programming",
      "Modeling with UML",
    ],
  },
  {
    year: "2020–2022",
    title: "Preparatory Classes for Top Engineering Schools — MPSI",
    school: "IMSP",
    university: "Université d'Abomey-Calavi",
    description: "",
    details: [
      "Multilinear Algebra",
      "Multivariable Functions",
      "Special Relativity",
      "C Language",
      "Electromagnetism and Quantum Mechanics",
      "Sequences and Series of Functions",
      "French and Philosophy",
      "Industrial Engineering Sciences",
      "Advanced Data Structures",
      "Solid Mechanics",
      "Thermodynamics and Physical Optics",
      "Affine Geometry",
      "Generalized Integrals",
      "Probability 2",
      "English",
      "Logic and Set Theory",
      "Classical Mechanics",
      "Algebraic Structures",
      "Analysis 1",
      "Computer Science",
      "Electrokinetics",
      "Electromagnetism and Geometrical Optics",
      "Probability 1",
      "Chemistry",
      "Linear Algebra",
      "Analysis 2",
    ],
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
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Education2 = () => {
  const [selectedProgram, setSelectedProgram] = React.useState(null);

  return (
    <section className="w-full pb-9 pt-0 bg-[#111132] text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          Education
        </h2>

        {/* Cards container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto"
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
              {/* Glow effect */}
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

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProgram(item)}
                className="relative z-10 mt-4 text-sm text-orange-500 hover:text-white border border-black px-2 py-1 rounded-sm cursor-pointer w-fit hover:bg-transparent transition"
              >
                Click me
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POP-UP */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a3a] text-white p-6 rounded-2xl shadow-2xl max-w-md w-full overflow-y-auto max-h-[85vh]"
            >
              <h3 className="text-xl font-bold mb-2">{selectedProgram.title}</h3>
              <p className="text-sm text-gray-400 mb-4">
                {selectedProgram.year} — {selectedProgram.school}
              </p>

              <ul className="list-disc list-inside text-sm space-y-1 mb-6 text-gray-300">
                {selectedProgram.details?.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>

              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md text-sm font-semibold transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education2;
