import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "🚀 Core Skills",
    skills: ["Python", "SQL", "Machine Learning", "Deep Learning", "scikit-learn", "Transformers", "FastAPI"],
  },
  {
    title: "🛠️ Tools & Libraries",
    skills: ["NumPy", "pandas", "matplotlib", "seaborn", "PyTorch", "gradio", "Hugging Face", "LangChain", "Linux"],
  },
  {
    title: "💻 Dev & Frameworks",
    skills: ["React", "Tailwind CSS", "VS Code", "Git"],
  },
  {
    title: "🌐 Languages",
    skills: ["French: Native", "English: Fluent"],
  },
  {
    title: "🤝 Soft Skills",
    skills: ["Autonomy", "Team Spirit", "Scientific Curiosity"],
    description: "Enjoy collaborative problem solving and staying up to date with AI innovation.",
  },
];

const Marquee = ({ items, speed = 40 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {[...items, ...items].map((skill, i) => (
          <span
            key={i}
            className="inline-block text-sm px-4 py-1 rounded-xl bg-[#14142b] text-gray-100 hover:brightness-125 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#111132] text-white py-10">
      <div className="max-w-screen-xl mx-auto space-y-10 px-4">
        <h2 className="text-3xl font-semibold font-heading">My Skills</h2>

        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {cat.title}
            </h3>
            <Marquee items={cat.skills} speed={25 + idx * 5} />
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
