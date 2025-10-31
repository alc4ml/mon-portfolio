import React from "react";

const categories = [
  {
    title: "🚀 Core Skills",
    color: "bg-yellow-700",
    skills: ["Python", "SQL", "Machine Learning", "Deep Learning", "scikit-learn", "Transformers", "FastAPI"],
  },
  {
    title: "🛠️ Tools & Libraries",
    color: "bg-sky-700",
    skills: ["NumPy", "pandas", "matplotlib", "seaborn", "PyTorch (in progress)", "gradio", "Hugging Face", "LangChain", "Linux"],
  },
  {
    title: "💻 Dev & Frameworks",
    color: "bg-blue-800",
    skills: ["React", "Tailwind CSS", "VS Code", "Git"],
  },
  {
    title: "🌐 Languages",
    color: "bg-cyan-800",
    skills: ["French: Native", "English: Fluent (TOEIC preparation ongoing)"],
  },
  {
    title: "🤝 Soft Skills",
    color: "bg-amber-800",
    skills: ["Autonomy", "Team Spirit", "Scientific Curiosity"],
    description: "Enjoy collaborative problem solving and staying up to date with AI innovation.",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-[#111132] text-white py-20 px-0">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          My Skills
        </h2>

        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              {cat.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-sm px-3 py-1 rounded-xl bg-[#14142b] text-gray-100 hover:brightness-125 transition`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {cat.description && (
              <p className="text-sm text-gray-400 mt-2">{cat.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
