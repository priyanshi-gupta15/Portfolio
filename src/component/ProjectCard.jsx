// components/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ title, description, image, liveLink, repoLink }) => {
  return (
    <div
      className="bg-transparent rounded-lg overflow-hidden flex flex-col 
  border-2 border-purple-400 shadow-lg 
  transform transition duration-300 
  hover:scale-105 hover:shadow-[0_0_25px_#8b5cf6]"
    >
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 flex-1">{description}</p>
        <div className="mt-auto flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
            >
              Live
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
