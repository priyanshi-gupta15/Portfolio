import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0b0616] text-white py-4  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between
      items-center px-6 ">
        {/* Left Side */}
        <p className="text-sm mb-2 md:mb-0">
          Designed and Developed by{" "}
          <span className="font-semibold">Priyanshi Gupta</span>
        </p>

        {/* Center */}
        <p className="text-sm mb-2 md:mb-0">© {new Date().getFullYear()}</p>

        {/* Right Side - Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/priyanshi-gupta15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-gray-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/priyanshigupta2005"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-gray-400 transition" />
          </a>
          <a
            href="https://leetcode.com/u/priyanshiscode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
