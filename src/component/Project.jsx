import React from "react";
import ProjectCard from "./ProjectCard";

// Example project data
const project = [
  {
    title: "NetflixGPT",
    description:
      "An AI-powered movie recommendation platform inspired by Netflix. It integrates the TMDB API for fetching real-time movie data and uses OpenAI’s GPT to generate personalized recommendations based on user queries. It also uses authentication to secure user data with help of Firebase. The app includes features like search, category-wise browsing, and a responsive UI for a seamless experience.",
    image: "/Projects/Netflix.png",
    liveLink: "https://netflixgpt-acae9.web.app",
    repoLink: "https://github.com/priyanshi-gupta15/NetflixGPT.git",
  },
  {
    title: "Food Ordering App",
    description:
      "A food ordering application where users can browse restaurants, add items to cart, and complete checkout with payment integration. Built using React for frontend and Redux for state management, the app ensures smooth navigation, fast performance, and a clean, responsive design.",
    image: "/Projects/FoodApp.png",
    liveLink: "https://food-ordering-app-cxj9.vercel.app/",
    repoLink: "https://github.com/priyanshi-gupta15/food_ordering_app",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and interactive portfolio website created with React, featuring dark mode support, smooth navigation, and reusable components. It highlights projects, skills, and achievements in a visually appealing way while being fully responsive across devices.",
    image: "/Projects/Portfolio.png",
    liveLink: "https://portfolio-nu-orcin-5y83qwcfo7.vercel.app/resume",
    repoLink: "https://github.com/priyanshi-gupta15/Portfolio.git",
  },
  {
    title: "QR Code Generator",
    description:
      "A simple yet powerful web application that generates QR codes instantly for text, URLs. Built with JavaScript and a QR code API, it provides options for downloading the QR code and is designed to be mobile-friendly and easy to use.",
    image: "/Projects/QR.png",
    liveLink: "https://qr-generator-nu-three.vercel.app/",
    repoLink: "https://github.com/priyanshi-gupta15/QRGenerator.git",
  },

  {
    title: "WhatsApp Automation with Python",
    description:
      "A Python-based automation project using OpenCV and PyWhatKit that captures images through the webcam and sends them automatically via WhatsApp. It demonstrates computer vision integration with real-world messaging automation, making it a useful utility for sending instant updates or alerts.",
    image: "/Projects/Automation.png",
    repoLink:
      "https://github.com/priyanshi-gupta15/Python_projects/blob/main/2daycrt/webcamproject.ipynb",
  },
];

const Project = () => {
  return (
    <section className="relative min-h-screen py-16 bg-[#0d0d1a] overflow-hidden">
      {/* Stars Overlay (on top of background) */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] bg-cover bg-center opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12 mt-6">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {project.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
