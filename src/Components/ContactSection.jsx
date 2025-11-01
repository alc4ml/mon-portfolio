import React from "react";

const ContactSection = () => {
  return (
    <section id ="contact" className="bg-[#111132] pt-0 pb-4 px-6 md:px-0 text-white">
      <div className="max-w-screen-md mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center font-heading mb-10">
          Contact <span className="text-blue-400">Me!</span>
        </h2>

        {/* Intro Let's Talk */}
        <div className="text-center text-white mb-10 space-y-2">
          {/* <h3 className="text-xl font-semibold">Let’s Talk</h3> */}
          <p className="text-gray-400">
            Do you have any questions? Contact me at  
            <a
              href="mailto:moreladjalla@gmail.com"
              className="text-pink-500 font-medium hover:underline inline-flex items-center gap-1"
            >
                📩  moreladjalla@gmail.com
            </a>
          </p>
          <p className="text-gray-400">or leave me a message</p>
        </div>

        {/* Formulaire */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Email Subject"
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full bg-transparent border border-blue-400 text-white px-4 py-2 rounded resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
