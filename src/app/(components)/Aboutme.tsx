import React from "react";
import Projects from "./Projects";

const Aboutme = () => {
  return (
    <>
      <div className="  pt-12">
        <div className="flex flex-col justify-center items-center text-white">
          <h3 className="text-4xl font-semibold">About me</h3>
          <p className=" text-center text-lg sm:leading-loose sm:max-w-4xl mx-4 mt-4 text-white sm:text-md   leading-6">
            I am a final-year Software Engineering student at Government Boys
            Polytechnic Institute with expertise in Front-End React Web
            Development. I am well-equipped to create dynamic and responsive
            user interfaces, adapting to industry trends effectively.
          </p>
        </div>
      </div>

      <Projects />
    </>
  );
};

export default Aboutme;
