// import images
import Hero_person from "./assets/images/bannerImg/logo.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import firebase from "./assets/images/Skills/firebase2.png";
import github from "./assets/images/Skills/github.png";
import vercel from "./assets/images/Skills/vercel.svg";
import javascript from "./assets/images/Skills/javascript.png";
import express from "./assets/images/Skills/express.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/dancewave2.png";
import project2 from "./assets/images/projects/kitchencanvas.png";
import project3 from "./assets/images/projects/edujoytoy.png";
import person_project from "./assets/images/projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdWhatsapp } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { SiTailwindcss } from "react-icons/si";
import {
  FaCogs,
  FaHandsHelping,
  FaLinkedin,
  FaProjectDiagram,
  FaShoppingCart,
} from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "#home",
      icon: BiUser,
    },
    {
      link: "#skills",
      icon: FaCogs,
    },
    {
      link: "#services",
      icon: FaHandsHelping,
    },
    {
      link: "#projects",
      icon: FaProjectDiagram,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "LIZA",
    LastName: "AFRIN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "20+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        expertise: "Advanced",
        icon: reactjs,
      },
      {
        name: "Node js",
        expertise: "Beginner",
        icon: nodejs,
      },
      {
        name: "Express js",
        expertise: "Intermediate",
        icon: express,
      },
      {
        name: "JavaScript",
        expertise: "Intermediate",
        icon: javascript,
      },
      {
        name: "Figma",
        expertise: "Intermediate",
        icon: figma,
      },

      {
        name: "Tailwind",
        expertise: "Advanced",
        icon: tailwind,
      },
      {
        name: "Bootstrap",
        expertise: "Advanced",
        icon: bootstrap,
      },

      {
        name: "MongoDB",
        expertise: "Intermediate",
        icon: mongodb,
      },
      {
        name: "GitHub",
        expertise: "Intermediate",
        icon: github,
      },
      {
        name: "Firebase",
        expertise: "Intermediate",
        icon: firebase,
      },
      {
        name: "Vercel",
        expertise: "Intermediate",
        icon: vercel,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: " Custom Web Development",
        para: "Offering custom web development services for creating user-friendly and responsive websites. From front-end to back-end development, the team brings visions to life, delivering fully functional online presences that meet clients' unique needs. Trust the team to deliver exceptional results.",
        logo: services_logo1,
      },
      {
        title: "E-commerce Website Development:",
        para: "Offering e-commerce website development services to help businesses establish their online presence, enabling secure transactions. Showcase expertise in integrating payment gateways, managing product catalogs, and optimizing the shopping experience using React and other frameworks.",
        logo: services_logo2,
      },
      {
        title: "Website Maintenance and Support:",
        para: "Offering ongoing website maintenance and support services, including bug fixes, security updates, performance optimization, and content updates. Ensuring clients' websites remain up-to-date, secure, and fully functional, providing a seamless online experience for users.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Dance Wave",
        image: project1,
        description:
          "The dance school website includes separate dashboards for the admin, instructors, and students. Users register and log in to access classes. Students select classes, make payments, and get enrolled. Instructors add classes, subject to admin approval. The admin manages user roles, assigning them as instructors or admins.",
        technologies: ["firebase", "react query", "jwt token", "stripe.js"],
        livesite: "https://dance-wave.web.app",
        githubLink: "https://github.com/lizaafrin/dance-wave-client",
      },
      {
        title: "Kitchen Canvas",
        image: project2,
        description:
          "This responsive web app was created for online food ordering. Users can view profiles of top chefs and their best recipes. The app features a Login and Registration system with authentication via Google and GitHub using Firebase. Private routes were implemented to ensure secure access to recipe details.",
        technologies: ["mongoDB", "vercel", "react router", "firebase"],
        livesite: "https://chef-recipe-hunter-3bf76.web.app",
        githubLink: "https://github.com/lizaafrin/kitchencanvas-client",
      },
      {
        title: "EduJoyToy",
        image: project3,
        description:
          "This is an e-commerce website for an educational / scientific kits. Users can easily find desired products by category and also utilize the search system to find specific items. The 'Add a Toy' private route allows users to contribute new products to the database, while the 'My Toys' page enables them to view and delete their own listings.",
        technologies: ["react router", "tailwind", "vercel", "express.js"],
        livesite: "https://edujoytoy.web.app",
        githubLink: "https://github.com/lizaafrin/edujoy-toy-client",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "lizaafrin446@gmail.com",
        icon: GrMail,
        link: "mailto:lizaafrin446@gmail.com",
      },
      {
        text: "+88 01778527559",
        icon: MdWhatsapp,
        link: "https://web.whatsapp.com/",
      },
      {
        text: "Liza Afrin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/liza-afrin-313b38146",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
