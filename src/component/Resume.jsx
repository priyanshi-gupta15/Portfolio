import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/resume.jpg"; // your resume image

const Resume = () => {
  return (
    <section className="relative min-h-screen bg-[#0d0d1a] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Stars Background */}
      <div className="absolute inset-0  bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] bg-cover bg-center opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          📄 My <span className="text-purple-400">Resume</span>
        </h2>

        {/* Resume Image Preview */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={resume}
            alt="My Resume"
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-lg"
          />
        </div>

        {/* Download Button */}
        <a
          href={resume}
          download="Priyanshi_Gupta_Resume.jpg" // match your file type
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-transform hover:scale-105"
        >
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
