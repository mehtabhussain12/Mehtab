"use client"
import React, { useState, useEffect } from "react";
import Skills from "./Skills";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const data = [
    {
      id: 1,
      img: "Project1.png",
      name: "Ecobazar",
      description:
        "Ecobazar is an eco-friendly e-commerce platform created with React and Tailwind CSS.",
      github: "https://github.com/mehtabhussain12/eCommerce-Shop-Website",
      live: "https://fasco-35cu.vercel.app/"
    },
    {
      id: 2,
      img: "Project2.png",
      name: "Fasco",
      description:
        "Fasco is an eco-friendly e-commerce platform created with React and Tailwind CSS.",
      github: "https://github.com/mehtabhussain12/FASCO",
      live: "https://fasco-35cu.vercel.app/"
    },
    {
      id: 3,
      img: "Project3.png",
      name: "Toutem",
      description: "Discover natural beauty at Toutem, your go-to e-commerce",
      github: "/",
      live: "https://toutem-iota.vercel.app/"
    }
  ];

  useEffect(() => {
    setSelectedProject(data[0]?.id ?? null);
  }, []);

  const handleProjectClick = (projectId: number | null) => {
    setSelectedProject(projectId);
  };

  return (
    <>
      <div className="pt-12 min-h-screen sm:mb-0 mb-8">
        <div className="sm:mx-44 mx-12 border-b-8 border-[#7733FF] pb-2">
          <h1 className="text-white text-2xl">Projects</h1>
        </div>

        <div className="sm:flex sm:justify-evenly sm:mx-16 mt-20">
          <div className="sm:flex sm:flex-col flex justify-around">
            {data.map((project) => (
              <div
                key={project.id}
                className="border-4 hover:border-gray-700 hover:shadow-lg hover:shadow-gray-600 rounded-full sm:w-32 sm:h-32 w-16 h-16 overflow-hidden sm:ml-12 ml-8 sm:mt-4 cursor-pointer"
                onClick={() => handleProjectClick(project.id)}
              >
                <img
                  className="rounded-full w-full h-full object-cover"
                  src={project.img}
                  alt={project.name}
                />
              </div>
            ))}
          </div>

          <div className="sm:flex items-center mt-4 sm:ml-44 bg-[#232732] sm:w-auto w-full shadow-custom rounded-lg">
            {selectedProject &&
              data.map((project) =>
                project.id === selectedProject ? (
                  <div
                    key={project.id}
                    className="sm:max-w-2xl w-full rounded-lg overflow-hidden p-6 text-center"
                  >
                    <img src={project.img} alt="" />
                    <div className="mt-4">
                      <p className="text-white sm:text-xl font-semibold">
                        {project.name}
                      </p>
                      <p className="text-white leading-9">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center">
                      <button className="shadow-custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-2 sm:mr-2">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          Visit Site
                        </a>
                      </button>
                      <button className="shadow-custom hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mb-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          View Code
                        </a>
                      </button>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default Projects;
