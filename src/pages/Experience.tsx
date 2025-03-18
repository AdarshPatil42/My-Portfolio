import React from "react";
import ProjectCard from "../components/ProjectCard";
import GlowingCard from "../components/GlowingCard";
import { StudingImg } from "../theme/images.ts";
import { ProjectsData, InternShipProjects } from "../utils/constants.ts";

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
      <div className="px-6 md:ms-12 my-12 relative text-center md:text-left">
        <h2
          className="text-3xl md:text-4xl font-bold text-green-400 inline-block relative 
          after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 
          after:bg-gradient-to-r after:from-green-400 after:to-transparent after:mt-2 after:rounded-full"
        >
          Experience
        </h2>
        <p className="text-gray-300 text-sm mt-2">
          My professional journey so far
        </p>
      </div>

      {/* Work Experience */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 px-6">
        <div className="w-full md:w-[40%] p-4 md:ps-12">
          <GlowingCard identifier={"experience-1"} isSticky={true}>
            <div className="w-full flex items-center gap-4 md:gap-6 bg-transparent rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <img
                  src={StudingImg}
                  alt="experience"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Full Stack Developer
                </h2>
                <p className="text-sm md:text-lg italic text-gray-300">
                  Springup Labs Pvt Ltd.
                </p>
                <p className="text-sm md:text-lg text-gray-400">
                  📍 Baner, Pune
                </p>
                <p className="text-sm md:text-lg text-gray-400">
                  📅 Dec 2022 - Present
                </p>
              </div>
            </div>
          </GlowingCard>
        </div>

        {/* Projects Section */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-6">
          {ProjectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Experience */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 px-6 mt-8">
        <div className="w-full md:w-[40%] p-4 md:ps-12">
          <GlowingCard identifier={"experience-2"} isSticky={true}>
            <div className="w-full flex items-center gap-4 md:gap-6 bg-transparent rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                <img
                  src={StudingImg}
                  alt="experience"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  Full Stack Developer (Intern)
                </h2>
                <p className="text-sm md:text-lg italic text-gray-300">
                  Edureka
                </p>
                <p className="text-sm md:text-lg text-gray-400">📍 Bengaluru</p>
                <p className="text-sm md:text-lg text-gray-400">
                  📅 Jan 2022 – Aug 2022
                </p>
              </div>
            </div>
          </GlowingCard>
        </div>

        {/* Internship Projects */}
        <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-6">
          {InternShipProjects.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="w-full mx-auto max-w-2xl md:sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-lg transition-all duration-500">
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
