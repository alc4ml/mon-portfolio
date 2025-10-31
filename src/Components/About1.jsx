import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/arrow.jpg"; // Remplace par ton image
import a2 from "../assets/2.jpeg"

const About1 = () => {
  return (
    <section className="bg-[#111132] text-white sm:px-0 pt-7 md:px-16">
      <div className="max-w-6xl mx-auto">
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
                src={a2}
                alt="Marcel"
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-6"
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
            <p className="text-white text-lg text-left sm:max-w-prose sm:mx-auto leading-relaxed">
              My academic background in a few words? <br /><br />
              Preparatory classes at the Institute of Mathematics and Physical Sciences (IMSP),
              followed by a specialized Bachelor’s degree in Computer Science. <br /><br />
              After that, I joined the Institut Galilée at Université Sorbonne Paris Nord
              thanks to the Excellence Scholarship from the EUR in Mathematics and Computer Science (EUR M&CS).<br /><br />
              During my first year of the Master’s program in Computer Science,
              I strengthened both my technical and theoretical foundations.
              Following this experience, my growing interest in applied research;
              particularly in Artificial Intelligence and Data Science naturally led me to
              pursue the Master in Data Mathematics, which I am currently enrolled in.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0b0b2b] hover:bg-blue-700 px-6 py-3 rounded-md text-sm font-medium transition"
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
