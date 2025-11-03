import React from "react";

const experience = [
  {
    role: "Private Math Tutor",
    company: "Complétude",
    date: "January 2025 – Present",
    description:
      "Provided personalized tutoring to high school students in mathematics: exam preparation, reinforcement of key concepts, and development of problem-solving strategies.",
  },
];

const Experience = () => {
  return (
    <section className="bg-[#111132] text-white pt-6 pb-0 px-0 md:px-0 sm:px-0">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          Experience
        </h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="p-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {exp.role} <span className="text-blue-400">@ {exp.company}</span>
              </h3>
              <p className="text-sm text-gray-400 mb-4">{exp.date}</p>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
