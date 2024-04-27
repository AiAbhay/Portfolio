import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        As a software engineer, I thrive on solving complex problems with elegant code solutions. My passion for technology drives my continuous learning, ensuring I stay ahead in rapidly evolving tech landscapes. I specialize in full-stack development, balancing backend logic with user-centric frontend design.
        </p>

        <br />

        <p className="text-xl">
        In my career, I've contributed to diverse projects, from developing scalable web applications to integrating innovative APIs. My collaborative spirit and analytical skills make me a valuable team player. I'm dedicated to delivering high-quality software that meets and exceeds project objectives.
        </p>
      </div>
    </div>
  );
};

export default About;
