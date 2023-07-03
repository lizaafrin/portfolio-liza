import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary pt-6 my-28" id="projects">
      <div className="lg:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
          <div className="flex flex-col gap-10">
            {Projects.project_content.map((content, i) => (
              <div className="group flex flex-col lg:flex-row gap-10 justify-center items-center mb-10 bg-white p-8 rounded-xl">
                <div className="w-full lg:w-1/2 h-60 md:h-72 lg:h-96 overflow-hidden cursor-pointer">
                  <img
                    src={content.image}
                    alt="..."
                    className="h-auto group-hover:-translate-y-[87%] duration-[7s]"
                  />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-1 mt-2 lg:px-8">
                  <h5 className="font-bold font-Poppins text-2xl lg:text-4xl">
                    {content.title}
                  </h5>
                  <p className="md:text-base lg:text-lg my-4 text-justify">
                    {content.description}
                  </p>
                  <div className="lg:flex grid grid-cols-2 gap-4 mb-8 mt-2">
                    {content.technologies.map((tenology, i) => (
                      <p className=" bg-slate-200 px-4 py-2 text-center capitalize rounded-full text-sm">
                        {tenology}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-12 items-center group">
                    <a
                      href={content.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 group-hover:scale-105 duration-500"
                    >
                      <span className="text-lg w-10 h-10 rounded-full bg-red-200 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <BsGithub />
                      </span>
                      <p>Github</p>
                    </a>
                    <a
                      href={content.livesite}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 group-hover:scale-105 duration-500"
                    >
                      <span className="text-lg w-10 h-10 rounded-full bg-red-200 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                        <FaGlobe />
                      </span>
                      <p>Live Site</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-2xl drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <div className="flex gap-4">
                  <div className="w-1/2 h-full">
                    <img src={content.image} alt="..." />
                  </div>
                  <div className="flex flex-col gap-1 mt-2">
                    <h5 className="font-bold font-Poppins">{content.title}</h5>
                    <p>{content.description}</p>
                    <div className="flex gap-4 items-center">
                      <div className="flex items-center gap-2">
                        <a
                          href={content.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg w-10 h-10 rounded-full bg-red-200 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                        >
                          <BsGithub />
                        </a>
                        <p>Github</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={content.livesite}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg w-10 h-10 rounded-full bg-red-200 inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                        >
                          <FaGlobe />
                        </a>
                        <p>LiveSite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
        {/* <div className="">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button className="font-bold text-gray self-end">
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
