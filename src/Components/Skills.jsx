import React from "react";

const categories = [
  {
    title: "🚀 Core Skills",
    skills: ["Python", "R", "C", "C++", "Java", "SQL", "PL/SQL", "LaTeX"],
  },
  {
    title: "🧠 Data Science & AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Statistics",
      "RAG",
      "Transformers",
      "Hugging Face",
      "AI Agents",
    ],
  },
  {
    title: "🛠️ Libraries & Tools",
    skills: [
      "NumPy",
      "pandas",
      "matplotlib",
      "seaborn",
      "scikit-learn",
      "PyTorch",
      "gradio",
      "LangChain",
      "FastAPI",
      "Linux",
    ],
  },
  {
    title: "💻 Frameworks & Dev",
    skills: ["React", "Tailwind CSS", "VS Code", "Git", "Docker"],
  },
  {
    title: "🌍 Languages",
    skills: ["French: Native", "English: Fluent (TOEIC preparation in progress)"],
  },
  {
    title: "🤝 Soft Skills",
    skills: ["Autonomy", "Team Spirit", "Scientific Curiosity"],
    description:
      "Enjoy collaborative problem solving, continuous learning, and innovation in AI.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#111132] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-semibold font-heading">My Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-lg bg-[#14142b] text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              {cat.description && (
                <p className="text-sm text-gray-400 mt-1 leading-snug">
                  {cat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
