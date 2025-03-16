import React from "react";
import ProjectCard from "../components/ProjectCard";
import GlowingCard from "../components/GlowingCard";
import { StudingImg } from "../theme/images";
import { ProjectsData, InternShipProjects } from "../uitls/constants";

const Experience: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b pb-16 from-[#0b0f32] to-[#211944] text-white">
      {/* Center Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      {/* Heading */}
      <div className="ms-12 my-12 relative">
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
