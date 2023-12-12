import React from "react";
import frontEnd from "../../images/ux.png";
import backEnd from "../../images/backend.png";
import task from "../../images/task.png";
import startup from "../../images/start-up.png";

const Cv = () => {
  return (
    <div
    // className="bg-cover bg-center p-8 mx-32"
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* First Row with Two Columns */}
      <div className="flex mb-8">
        <div className="w-1/2 p-4  ">
          <h1 className="font-bold text-3xl">
            What do <span className="text-[#F97316]">I Do?</span>
          </h1>
          <div>
            <button class="mr-4 mt-4 bg-gray-200 hover:bg-gray-600 text-gray-500 font-semibold hover:text-white py-2 px-6 border-emerald-500 ring-2 rounded-3xl hover:border-transparent ">
              Download my Resume
            </button>
            <button class="bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
              Hire Me Now
            </button>
          </div>
        </div>
        <div className="w-1/2 p-4 text-center">
          <div className="border shadow-2xl w-52 py-16">
            <img
              src={frontEnd}
              alt="frontEnd "
              className="mx-auto h-10 w-10 "
            />
            <h1 className="font-semibold pt-6 text-gray-800">FrontEnd</h1>
            <p className="text-gray-500">React</p>
            <p className="text-gray-500">Tailwind Css</p>
            <p className="text-gray-500">Bootstrap</p>
          </div>
        </div>
      </div>

      {/* Second Row with Four Columns */}
      <div className="flex">
        <div className="w-1/4 p-4  "></div>
        <div className="w-1/4 p-4  ">
          <div className="border shadow-2xl w-52 py-16">
            <img src={backEnd} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">BackEnd</h1>
            <p className="text-gray-500">NodeJS</p>
          </div>
        </div>
        <div className="w-1/4 p-4  ">
          <div className="border shadow-2xl w-52 py-16">
            <img src={task} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">Team Leader</h1>
            <p className="text-gray-500">Planning Team</p>
            <p className="text-gray-500">Leading Development & Execution</p>
          </div>
        </div>
        <div className="w-1/4 p-4  ">
          <div className="border shadow-2xl w-52 py-16">
            <img src={startup} alt="frontEnd " className="mx-auto h-10 w-10 " />
            <h1 className="font-semibold pt-6 text-gray-800">Start Up</h1>
            <p className="text-gray-500 p-2">
              Invite me in your team! Let's grow together. Let's grow bigger!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;