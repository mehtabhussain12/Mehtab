import React from "react";
import Projects from './Projects'

const Aboutme = () => {
  return (
   <>
    <div className="  pt-12">
    <div className="flex flex-col justify-center items-center text-white">
    <h3 className="text-4xl font-semibold">
        About me
      </h3>
        <p className=" text-center text-md sm:leading-loose sm:max-w-4xl mx-4 mt-4 text-white sm:text-md text-sm  leading-6">
          I am actively seeking opportunities to apply my acquired skills and
          knowledge to real-world projects. My educational background has
          equipped me with a solid foundation in AI and ML algorithms, data
          analysis, and programming languages such as Python. Additionally, I
          have gained practical experience through hands-on projects, both
          independently and collaboratively.
        </p>
    </div>
    </div>
   
   <Projects/>
   </>
  );
};

export default Aboutme;
