import React from "react";
import heroBg from "../assets/home-bg.jpg"; // your image here


const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
      {/* Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')] opacity-10"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-6 text-center md:text-left">
        {/* Text Section */}
        <div className="mt-16 md:mt-0 ">
          <h2 className="text-4xl md:text-6xl font-bold">Hi There! 👋</h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            I'M <span className="text-purple-400">PRIYANSHI GUPTA</span>
          </h1>
          <p className="mt-4 text-lg max-w-xl">
            Frontend Developer | Passionate about building web applications and
            learning new technologies.
          </p>
        </div>

        {/* Illustration Section */}
        <div>
          <img
            src="https://img.freepik.com/premium-photo/female-developer-background_665280-9658.jpg"
            alt="developer"
            className="w-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
