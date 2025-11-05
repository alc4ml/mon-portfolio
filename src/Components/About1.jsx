import React from "react";
import { motion } from "framer-motion";



const About1 = () => {
  return (
    <section id="about" className="bg-[#111132] text-white sm:px-0 pt-7 ">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-left font-heading mb-6">
          About
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image */}
          <motion.div
            className="flex justify-center lg:justify-start relative z-10"
            initial={{ opacity: 0, x: -100, rotate: -3, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative w-80 h-96 bg-[#0b0b2b] overflow-hidden [clip-path:polygon(10%_0%,100%_0%,100%_90%,90%_100%,0%_100%,0%_10%)] shadow-lg">
              <img
                src="2.jpeg"
                alt="Marcel"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6 " 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              I am <span className="font-magiestra">Marcel Morel Adjalla</span>
            </h2>
            <div className="text-white text-lg text-left max-w-9xl text-justify  leading-relaxed">
            Born in Benin in 2003, I grew up at a time when artificial intelligence was starting to inspire dreams.
After earning my scientific baccalaureate in 2020, I joined preparatory classes where mathematics and physics taught me both humility and rigor.

I then pursued a Bachelor’s and a first year master degree in Data Science, before joining the Institut Galilée at Université Sorbonne Paris Nord with an Excellence Scholarship from the Graduate School in Mathematics and Computer Science.
There, i did a first year of master in Computer Science.

But curiosity and a growing interest in the intersection between mathematics and AI, led me to shift my path toward applied mathematics and data science.
Today, I’m pursuing a Master’s in Data Mathematics, where I combine statistical learning, deep learning, and applied research to explore how data and intelligence can help solve real-world problems.

My journey is built on a blend of mathematics, computer science, and a good dose of curiosity ; the driving force behind everything I do.
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0b0b2b] hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium transition"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Lets Talk
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About1;
