import React, { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/contact", formData);
      setStatus("Dont use this form ; text me by email ");
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("Dont use this form ; text me by email ");
    }
  };

  return (
    <section id="contact" className="bg-[#111132] pt-0 pb-4 px-6 md:px-0 text-white">
      <div className="max-w-screen-md mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl font-bold text-center font-heading mb-10">
          Contact <span className="text-blue-400">Me!</span>
        </h2>

        {/* Intro Let's Talk */}
        <div className="text-center text-white mb-10 space-y-2">
          <p className="text-gray-400">
            Do you have any questions? Contact me at  
            <a
              href="mailto:moreladjalla@gmail.com"
              className="text-pink-500 font-medium hover:underline inline-flex items-center gap-1"
            >
              📩 moreladjalla@gmail.com
            </a>
          </p>
          <p className="text-gray-400">Don't use the form below.</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-transparent border border-blue-400 text-white px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <textarea
  name="message"
  placeholder="Your Message"
  rows="4"
  value={formData.message}
  disabled
  className="w-full bg-transparent border border-blue-400 text-white px-4 py-2 rounded resize-none opacity-50 cursor-not-allowed"
></textarea>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition duration-300"
            >
              Submit
            </button>
          </div>
          {status && (
            <p className="text-center text-sm mt-2 text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
