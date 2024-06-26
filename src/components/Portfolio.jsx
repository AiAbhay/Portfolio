import React from "react";
import tictactoe from "../assets/portfolio/TIcTacToe.png";
import voice from "../assets/portfolio/voice.png";
import feedthedragon from "../assets/portfolio/FeedTheDragon.png";
import medical from "../assets/portfolio/medicaldata.png";
import Grocery from "../assets/portfolio/Grocery.png";

const project = () => {
  const projects = [
    {
      id: 1,
      src: tictactoe,
      codeLink: "https://github.com/AiAbhay/Abhay-Kushwah.github.io",
    },
    {
      id: 2,
      src: voice,
      codeLink: "https://github.com/AiAbhay/VoiceAssisteance",
    },
    {
      id: 3,
      src: feedthedragon,
      codeLink: "https://github.com/AiAbhay/Feed-The-Dragon",
    },
    {
      id: 4,
      src: medical,
      codeLink: "https://github.com/AiAbhay/MedicalDataExtraction",
    },
    {
      id: 5,
      src: Grocery,
      codeLink: "https://github.com/AiAbhay/Grocery-store-management",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-100 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project;
