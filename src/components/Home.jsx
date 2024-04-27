import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
          Hello, I am deeply interested in a variety of fields including data science, machine learning, and software development, leveraging these disciplines to explore and innovate across the broader technology landscape
          </h2>
          <p className="text-gray-500 py-4 max-w-xl">
          Skilled in C++, Python, SQL, and HTML, I specialize in crafting efficient and data-driven 
          applications. My expertise with tools like NumPy, Pandas, and Jupyter Notebook bolsters my
          capacity to manage complex datasets and develop predictive models, establishing a robust
          foundation for my innovative contributions to technology.
          </p>

          <div>
            <Link
              to="project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
