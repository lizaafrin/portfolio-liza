import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
    return (
        <div className="">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4 mt-8">
            Find me in
          </h2>
          <div className="flex gap-4 justify-center">
            <span className="w-14 h-14 bg-red-700 bg-opacity-70 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
             <a href="https://www.facebook.com/liza.afrin.1804"><FaFacebookF /></a>
            </span>
            <span className="w-14 h-14 bg-red-500 bg-opacity-50 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <a href="https://github.com/lizaafrin"><FaGithub /></a>
              
            </span>
            <span className="w-14 h-14 bg-red-500 bg-opacity-50 text-gray-200 text-xl inline-flex items-center justify-center rounded-md hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <a href="https://www.linkedin.com/in/liza-afrin-313b38146/"><FaLinkedinIn /></a>
              
            </span>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    );
};

export default Media;