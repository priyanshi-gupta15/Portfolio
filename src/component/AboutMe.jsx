import React from "react";
import avatar from "../assets/avatar.svg"; // your image here
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const AboutMe = () => {
  return (
    <section className="relative min-h-screen bg-[#0d0d1a] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Stars Background (optional dots effect) */}
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1204246901/photo/dusty-particles-background-image.jpg?s=2048x2048&w=is&k=20&c=1nuob9DzscxbcwR6iiK_y0xImT26-1AgWN2QcCsEjqY=')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 ">
            LET ME <span className="text-purple-400">INTRODUCE</span> MYSELF
          </h1>

          <p className="mb-4 text-lg leading-relaxed">
            Hi 👋 I'm{" "}
            <span className="text-purple-400 font-semibold">
              Priyanshi Gupta
            </span>
            , a passionate learner and frontend developer. I love building
            clean, interactive, and responsive web applications.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            I am skilled in{" "}
            <span className="text-purple-400 font-semibold">
              HTML, CSS, JavaScript, and React.js
            </span>
            , and I enjoy turning creative ideas into real working projects.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            Currently, I am exploring{" "}
            <span className="text-purple-400 font-semibold">Next.js </span>
            and diving deeper into UI/UX design to enhance my frontend skills.
          </p>

          <p className="mb-4 text-lg leading-relaxed">
            I also practice regularly on{" "}
            <span className="text-purple-400 font-semibold">LeetCode </span>
            solved 350+ problems , to improve my problem-solving skills and
            strengthen my coding foundation.
          </p>
        </div>

        {/* Right Avatar */}
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt="Avatar"
            className="w-64 h-64 rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>
      {/* find me section */}
      <div className="relative z-10 mt-12 text-center">
        <h2 className="text-4xl font-extrabold mb-2 ">FIND ME ON</h2>
        <p className="text-lg mb-4">
          Feel free to <span className="text-purple-400">connect</span> with me
        </p>

        {/* contact and mail */}
        <div>
          <div className="mb-2 flex justify-around items-center max-w-sm mx-auto">
            <a
              href="mailto:gpriyanshi2005@gmail.com"
              className="flex items-center justify-center rounded-3xl px-6 py-1 bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition duration-300"
            >
              <span className="text-sm">Email Me</span>
            </a>
            <div className="flex  items-start text-sm">
              <p>Contact:-</p>
              <p>7471168215</p>
            </div>
          </div>


        <div className="flex space-x-6 justify-center mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/priyanshi-gupta15"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            <FaGithub size={24} />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            <FaTwitter size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/priyanshigupta2005"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* leetcode */}
          <a
            href="https://leetcode.com/u/priyanshiscode/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-purple-600 hover:bg-purple-500 hover:text-white transition duration-300"
          >
            {/* <FaLeetcode size={24} /> */}
            <SiLeetcode size={24} />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};


export default AboutMe;
