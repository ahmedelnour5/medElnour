import React from "react";
import { Link } from "react-router-dom";

const ProjectContainer = ({ project }) => {
  return (
    <div className="bg-white shadow-md text-black rounded-lg p-8 relative md:w-[60%] ">
      <div className="flex flex-col">
        <h2 className="text-xl font-semibold"> {project.projectTitle}</h2>
        <div className="w-full flex justify-between items-center">
          <p className="font-medium">{project.projectType}</p>
          <p className="text-gray-500">{project.dates}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center pb-5 text-gray-500">
          <p className="pb-2 md:pb-0">{project.role}</p>
          <ul className="list-outside md:flex">
            {project.technologies.map((tech, index) => {
              const techArray = tech.split(","); // Split the tech string into an array
              return techArray.map((subTech, subIndex) => (
                <li className="md:mr-1 last:mr-0" key={index * 100 + subIndex}>
                  {subTech.trim()}
                </li>
              ));
            })}
          </ul>
        </div>
        <Link to={project.projectLink} className="text-gray-500 underline mb-2">
          Link
        </Link>
        <p className="leading-6">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectContainer;
