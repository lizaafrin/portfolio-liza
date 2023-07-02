// import content
import { useEffect } from "react";
import { content } from "../Content";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import LeftBanner from "./Banner/LeftBanner";
import RightBanner from "./Banner/RightBanner";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Media from "./Banner/Media";

const Hero = () => {
  const { hero } = content;
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer.", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full lg:w-4/12 w-8/12 top-0 right-0 lg:bg-primaryLinear bottom-0 -z-10 flex justify-center"
        >
          <h1 className="hidden lg:block rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-20" data-aos="fade-down">
          {/* <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div> */}
          {/* <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div> */}
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex flex-col gap-3 w-1/2 ms-10 mt-2 text-center">
              <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>

              <h1 className="text-5xl font-semibold text-black">
                Hi, I'm{" "}
                <span className="text-designColor capitalize">Liza Afrin</span>
              </h1>

              <h2 className="text-3xl font-bold text-black">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <p className="text-base font-bodyFont leading-6 tracking-wide">
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I'm not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
              <Media></Media>
            </div>
            <div className="h-[20rem] md:h-[30rem]">
              <img
                src={hero.image}
                data-aos="slide-up"
                alt="..."
                className="h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
