import React from "react";
import resume from "/Lizaafrin.pdf";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Media = () => {
  return (
    <div className="">
      <a
        download="Lizaafrin.pdf"
        href={resume}
        target="_blank"
        rel="noreferrer"
        className="block md:hidden w-60 border-2 font-semibold border-red-700/70 hover:bg-red-700/70 hover:text-white duration-500 cursor-pointer rounded-md items-center justify-center px-4 mx-auto py-2 text-lg"
      >
        Download Resume
      </a>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 mt-8">
          Find me in
        </h2>
        <div className="flex gap-4 mb-7 justify-center">
          <a
            download="Lizaafrin.pdf"
            href={resume}
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex border-2 font-semibold border-red-700/70 hover:bg-red-700/70 hover:text-white duration-500 cursor-pointer rounded-md items-center justify-center px-4"
          >
            Download Resume
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/lizaafrin"
            className="w-14 h-14 bg-red-500 bg-opacity-50 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <span>
              <FaGithub />
            </span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/liza-afrin-313b38146"
            className="w-14 h-14 bg-red-500 bg-opacity-50 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <span>
              <FaLinkedinIn />
            </span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/"
            className="w-14 h-14 bg-red-500 bg-opacity-50 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <span>
              <FaInstagram />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
