import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14 mb-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer rounded-xl text-center p-6 flex-1 bg-gradient-to-r from-red-50 to-red-100 group hover:bg-gradient-to-b hover:from-orange-200 hover:to-[#dee3ed] transition-colors group"
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto w-10 group-hover:scale-125 duration-500"
              />
              <h6 className="my-3 group-hover:scale-110 duration-500">
                {content.title}
              </h6>
              <p className="leading-7 text-justify pt-4 pb-6">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
