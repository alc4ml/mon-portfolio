import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Awards = () => {
  const distinctions = [
    {
      title: "EUR M&CS Excellence Scholarship – Sorbonne Paris Nord",
      year: "2024–2026",
      description:
        "Awarded by the Graduate School of Mathematics and Computer Science (EUR M&CS) for outstanding academic performance. It provides access to advanced training in computer science and applied mathematics within the Institut Galilée.",
    },
    {
      title: "Vallet Foundation Excellence Scholarship",
      year: "2021–2023",
      description:
        "Funded by the Vallet Foundation, this scholarship is awarded to the best students in Benin at the national Baccalaureate level, based on strict academic merit and consistent excellence.",
    },
    // {
    //   title: "National Scholarship – Benin Scholarship Directorate",
    //   year: "2021–2023",
    //   description:
    //     "A national excellence scholarship awarded to the highest-ranking students in public institutions, covering tuition fees for the entire university program.",
    // },
    {
      title: "12th in Benin – Baccalaureate 2020",
      year: "2020",
      description:
        "Ranked among the top 0.02% of high school graduates nationwide, with the 9th position in the scientific track C. This distinction shows a strong background in mathematics, physics, and fundamental sciences.",
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
          Awards & Scholarships
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
