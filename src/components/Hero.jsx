// import content
import { content } from "../Content";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const Hero = () => {
  const { hero } = content;
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI Designer.", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home" className="overflow-hidden">
      <div className="lg:min-h-screen lg:py-0 py-20 relative flex lg:flex-row flex-col-reverse justify-center items-center lg:items-end">
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
        <div className="lg:pb-48 px-6 lg:pt-0 pt-20" data-aos="fade-down">
          <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex flex-col gap-3 w-full md:w-1/2 md:ms-10 mt-2 text-center">
              <h4 className="text-base md:text-lg font-normal">
                WELCOME TO MY WORLD
              </h4>

              <h1 className="text-2xl md:text-5xl font-semibold text-black">
                Hi, I'm{" "}
                <span className="text-designColor capitalize">Liza Afrin</span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-bold text-black">
                a <span>{text}</span>
                <Cursor
                  cursorBlinking="false"
                  cursorStyle="|"
                  cursorColor="#ff014f"
                />
              </h2>
              <p className="text-base w-[80%] py-5 mx-auto font-bodyFont leading-6 tracking-wide text-justify">
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I'm not
                adding motion just to spruce things up, but doing it in ways
                that.
              </p>
              <Media></Media>
            </div>
            <div className="mx-auto md:mx-0 h-[20rem] md:h-[30rem]">
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
