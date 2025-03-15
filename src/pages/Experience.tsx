// import React from "react";

// const Experience: React.FC = () => {
//   return <div className="h-dvh w-full bg-pink-300">Experience</div>;
// };

// export default Experience;

import React from "react";
import ProjectCard from "./ProjectCard";
import GlowingCard from "./GlowingCard";
import { StudingImg } from "../theme/images";

const ProjectsData = [
  {
    name: "Blue Ocean Steel(BOS- Ecom Platform for steel materials)",
    tools: [
      "React",
      "MUI",
      "React Native",
      "Node.js",
      "Sequelize",
      "MySQL",
      "AWS",
      "Docker",
      "Jira",
      "node-mailer",
      "Figma",
    ],
    role: "Full Stack Developer",
    description:
      "BOS is a steel material e-commerce platform where suppliers sell steel, and customers can purchase materials. The platform also incorporates inventory management functionalities. \n" +
      "• Led the frontend development, designing the project architecture and building reusable components for a scalable application. \n" +
      "• Contributed to backend development by handling data modeling, creating APIs, and integrating third-party services to enhance platform functionality.",
  },
  {
    name: "Window Seat (Audio Content platform Project - for kids)",
    tools: ["React", "React-Native", "MUI", "Nestjs", "Typeorm", "MariaDB"],
    description:
      "• Engineered an audio content management platform akin to a kid-friendly music player, offering stories, podcasts & devotionals for children to enjoy. \n" +
      "• Spearheaded backend API development & authentication processes, ensuring secure access & seamless operation of platform features. \n" +
      "• Led the development of an authentication web app & implemented responsive UI designs to enhance user accessibility & interaction across devices. Additionally, contributed to mobile application development using React-Native.",
  },
  {
    name: "Heinekingmedia Gmbh (Whiteboard- School Modal Project)",
    tools: [
      "Angular",
      "Angular Material",
      "Fabricjs",
      "Node",
      "express",
      "socket.io",
      "Mysql",
    ],
    description:
      "• Whiteboard is a canvas-based application utilized for collaborative teaching in educational institutions, serving as a crucial tool for both web & android devices. \n" +
      "• Specialized in canvas operations & collaboration functionalities, leading the implementation of real-time whiteboard collaboration features. \n" +
      "• Responsible for UI development, API integration, ensuring smooth communication between frontend & backend systems to enhance user interaction & functionality.",
  },
];

const InternShipProjects = [
  {
    name: "Internship Program",
    tools: [
      "HTML5",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Nodejs",
      "express",
      "MongoDB",
      "GitHub",
    ],
    role: "Full Stack Developer (Intern)",
    description:
      "• Participated in a full stack developer internship at Edureka, contributing to various projects & gaining hands-on experience in web development. \n" +
      "• Assisted in the development of user-friendly interfaces, API integration, & database management tasks, gaining exposure to industry-standard. \n" +
      "• Applied technical skills & learned new technologies such as HTML5, CSS, JavaScript, Bootstrap, React, Nodejs, express, MongoDB, GitHub.",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#0b0f32] to-[#211944] text-white">
      {/* Heading */}
      {/* <div className="ms-12 mb-12">
        <h2 className="text-4xl font-bold text-green-400">Experience</h2>
        <p className="text-gray-300 text-sm mt-2">
          My professional journey so far
        </p>
      </div> */}
      {/* <div className="ms-12 mb-12 relative">
        <h2 className="text-4xl font-bold text-green-400 relative after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-green-400 after:to-transparent after:mt-2 after:rounded-full">
          Experience
        </h2>
        <p className="text-gray-300 text-sm mt-2">
          My professional journey so far
        </p>
      </div> */}
      <div className="ms-12 mb-12 relative">
        <h2 className="text-4xl font-bold text-green-400 inline-block relative after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 after:bg-gradient-to-r after:from-green-400 after:to-transparent after:mt-2 after:rounded-full">
          Experience
        </h2>
        <p className="text-gray-300 text-sm mt-2">
          My professional journey so far
        </p>
      </div>
      <div className=" flex">
        <div className="w-[40%] p-4 ps-12">
          <GlowingCard identifier={"experience-1"} isSticky={true}>
            <div className="w-full relative flex items-center gap-6 bg-transparent rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={StudingImg}
                  alt="experience"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white">
                  Full Stack Developer
                </h2>
                <p className="text-lg italic text-gray-300">
                  Springup Labs Pvt ltd.
                </p>
                <p className="text-lg text-gray-400">📍 Baner, Pune.</p>
                <p className="text-lg text-gray-400">📅 Dec 2022 - Present</p>
              </div>
            </div>
          </GlowingCard>
        </div>
        <div className="w-[60%] flex flex-col gap-6">
          {ProjectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex mt-12">
        <div className="w-[40%] p-4 ps-12">
          <GlowingCard identifier={"experience-2"} isSticky={true}>
            <div className="w-full relative flex items-center gap-6 bg-transparent rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 flex-shrink-0">
                <img
                  src={StudingImg}
                  alt="experience"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-3xl font-semibold text-white">
                  Full Stack Developer (Intern)
                </h2>
                <p className="text-lg italic text-gray-300">Edureka</p>
                <p className="text-lg text-gray-400">📍 Bengaluru</p>
                <p className="text-lg text-gray-400">📅 Jan 2022 – Aug 2022</p>
              </div>
            </div>
          </GlowingCard>
        </div>
        <div className="w-[60%] flex flex-col gap-6">
          {InternShipProjects.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
