import React from "react";

const educationData = [
  {
    year: "2025–2026",
    title: "2nd Year of Master: Applied Mathematics for Data Science",
    institution: "Université Sorbonne Paris Nord – Institut Galilée",
    details:
      "Statistical Learning, High-dimensional Statistics, Numerical Data Science, Deep Learning, Topological Data Analysis, Combinatorics and Probability.",
  },
  {
    year: "2024–2025",
    title: "1st Year of Master: Computer Science (top 6%)",
    institution: "Université Sorbonne Paris Nord – Institut Galilée",
    details: "Excellence Scholar, Graduate School of Mathematics & Computer Science (EUR PNGS M&CS).",
  },
  {
    year: "2022–2023",
    title: "Bachelor’s Degree in Computer Science (top 5%)",
    institution: "Institute of Mathematics and Physical Sciences (IMSP)",
    details: "Excellence Scholar, Vallet Foundation & DBAU Scholarship (Benin Government).",
  },
  {
    year: "2020–2022",
    title: "Preparatory Classes for Top Engineering Schools – MPSI",
    institution: "IMSP – Benin",
    details: "",
  },
  {
    year: "2020",
    title: "Scientific Baccalaureate – Benin (top 0.02%)",
    institution: "",
    details: "",
  },
];

const Education1 = () => {
  return (
    <section className="bg-[#03030a] text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl text-purple-700 font-glamor font-bold text-left mb-16">
          My <span className="">Education</span>
        </h3>

        <div className="space-y-8 border-l-4 border-blue-500 pl-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border border-gray-700 rounded-lg p-0 bg-[#0b0b2b]"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-blue-500"></div>

              <p className="text-sm text-gray-400 mb-2">{edu.year}</p>
              <h4 className="text-xl font-semibold mb-1">{edu.title}</h4>
              <p className="text-gray-300 italic mb-2">{edu.institution}</p>
              {edu.details && (
                <p className="text-gray-400 text-sm leading-relaxed">{edu.details}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education1;
