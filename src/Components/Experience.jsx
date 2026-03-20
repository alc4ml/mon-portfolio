import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const experience = [
  {
    role: "Computer Vision Research Intern",
    company: "L2TI Laboratory × COSE Company",
    date: "March 2026 – September 2026",
    highlights: [
      "Working on object detection problems in cross-domain settings.",
    ],
    featured: true,
  },
  {
    role: "Private Math Tutor",
    company: "Complétude",
    date: "January 2025 – Present",
    highlights: [
      "Provided personalized tutoring to high school students in mathematics.",
      "Prepared students for exams and reinforced key concepts.",
      "Developed problem-solving strategies adapted to each student’s needs.",
    ],
    featured: false,
  },
];

const Experience = () => {
  return (
    <section className="bg-[#111132] text-white py-2 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">
          Experience
        </h2>

        <div className="grid gap-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl p-3 md:p-8  transition-all duration-300 border-white/10"
              
            >
              {/* Company */}
              <h3 className="text-center font-semibold text-lg md:text-xl italic text-gray-300 mb-5">
                {exp.company}
              </h3>

              {/* Role + Date */}
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-5">
                <p className="text-xl font-semibold text-white">
                  {exp.role}
                </p>
                <p className="text-[#43e97b] text-sm md:text-base font-medium whitespace-nowrap">
                  {exp.date}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {exp.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 hover:translate-x-1 transition"
                  >
                    <FaCheckCircle
                      className="text-[#43e97b]/90 mt-1 shrink-0"
                      size={16}
                    />
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;