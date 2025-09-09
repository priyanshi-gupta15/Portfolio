// components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaFileAlt,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gradient-to-bl from-purple-900 via-purple-950 to-black shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-8 py-4">
        {/* photo from linkden https://media.licdn.com/dms/image/v2/D4D35AQH9fyjFPLP7eQ/profile-framedphoto-shrink_400_400/B4DZc7NetmGgAc-/0/1749045079280?e=1757944800&v=beta&t=Xrr6QrIEM4Ejsfy5cN2qvwBnEUPDcX4iMB0cW0ELnug */}

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400 mb-2 ">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D35AQH9fyjFPLP7eQ/profile-framedphoto-shrink_400_400/B4DZc7NetmGgAc-/0/1749045079280?e=1757944800&v=beta&t=Xrr6QrIEM4Ejsfy5cN2qvwBnEUPDcX4iMB0cW0ELnug"
              alt=""
            />
          </div>

          <h1 className="text-2xl font-bold text-purple-400">MyPortfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-bold text-xl">
          <Link
            to="/home"
            className="hover:text-purple-400 flex items-center gap-1"
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 flex items-center gap-1"
          >
            <FaUser />
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-400 flex items-center gap-1"
          >
            <FaBriefcase />
            Projects
          </Link>
          <Link
            to="/resume"
            className="hover:text-purple-400 flex items-center gap-1"
          >
            <FaFileAlt />
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-bl from-purple-900 via-purple-950 to-black text-white font-bold text-xl flex flex-col items-center py-4 space-y-4 shadow-lg">
          <Link
            to="/home"
            className="hover:text-purple-400 flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-purple-400 flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FaUser />
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-400 flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FaBriefcase />
            Projects
          </Link>
          <Link
            to="/resume"
            className="hover:text-purple-400 flex items-center gap-1"
            onClick={() => setIsOpen(false)}
          >
            <FaFileAlt />
            Resume
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
