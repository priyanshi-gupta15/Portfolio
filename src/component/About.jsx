import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiLeetcode,
  SiTailwindcss,
  SiPython,
  SiBootstrap,
  SiFirebase,
} from "react-icons/si";
import avatar from "../assets/avatar.svg"; // your image here

const About = () => {
  return (
    <section className=" relative min-h-screen bg-[#0d0d1a] text-white flex flex-col items-center justify-center px-6 py-16">
      
      {/* Stars Background (optional dots effect) */}
      <div className="absolute inset-0  bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] opacity-10"></div>

      {/* Intro */}
      <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16 mt-28 md:mt-40">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Know who <span className="text-purple-400">I'M</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Hello Everyone I’m{" "}
            <span className="text-purple-400">Priyanshi Gupta </span>a
            self-taught frontend developer, currently pursuing B.tech. I love
            building modern web apps that are fast, user-friendly, and scalable.
            ✨
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Beyond development, I regularly practice problem-solving on
            <span className="text-purple-400 font-semibold"> LeetCode</span> to
            sharpen my DSA & coding skills.
          </p>
        </div>

        {/* Right Avatar */}
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt="Avatar"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>

      {/* Professional Skillset */}
      <div className="w-full max-w-5xl text-center mb-16 mt-4 md:mt-24">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">
          ⚡ Professional Skillset
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-purple-400">
          {[
            { icon: <FaHtml5 />, label: "HTML5" },
            { icon: <FaCss3Alt />, label: "CSS3" },
            { icon: <SiJavascript />, label: "JavaScript" },
            { icon: <FaReact />, label: "React.js" },
            { icon: <FaNodeJs />, label: "Node.js" },
            { icon: <SiMongodb />, label: "MongoDB" },
            { icon: <SiTailwindcss />, label: "Tailwind CSS" },
            { icon: <SiPython />, label: "Python" },
            { icon: <SiBootstrap />, label: "Bootstrap" },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-purple-400 p-4 rounded-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <span className="text-sm md:text-lg mt-2">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools I Use */}
      <div className="w-full max-w-5xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-8">
          🛠 Tools I Use
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-purple-400">
          {[
            { icon: <FaGitAlt />, label: "Git" },
            { icon: <SiLeetcode />, label: "LeetCode" },
            { icon: <SiFirebase />, label: "Firebase" },
          ].map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-purple-400 p-4 rounded-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl md:text-5xl">{tool.icon}</div>
              <span className="text-sm md:text-lg mt-2">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
