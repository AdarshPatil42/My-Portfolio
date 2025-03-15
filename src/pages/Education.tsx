import React from "react";
import LottieAnimatedImg from "../components/LottieAnimatedImg";
import educationImg from "../assets/lottie/education.json";
import { FaGraduationCap } from "react-icons/fa"; // Education icon
import GlowingCard from "./GlowingCard";
import { div } from "framer-motion/client";

const educationData = [
  {
    title: "Bachelor of Technology",
    college: "XYZ University",
    percentage: "82%",
    duration: "2019 - 2023",
  },
  {
    title: "High School",
    college: "ABC Senior Secondary",
    percentage: "88%",
    duration: "2017 - 2019",
  },
  {
    title: "Secondary School",
    college: "DEF Public School",
    percentage: "90%",
    duration: "2015 - 2017",
  },
  {
    title: "Primary Education",
    college: "GHI Academy",
    percentage: "95%",
    duration: "2010 - 2015",
  },
];

const Education: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b0f32] to-[#211944]">
      <div className="flex justify-end me-36 py-16 relative">
        <h2 className="text-4xl font-bold text-sky-400 relative after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-sky-400 after:to-transparent after:mt-2 after:rounded-full">
          Education
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-12 py-12 px-6">
        {/* Left: Lottie Animated Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <LottieAnimatedImg animationData={educationImg} />
        </div>

        {/* Right: Education Cards */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "lg:self-start" : "lg:self-end"
              } w-full lg:w-3/5`}
            >
              <GlowingCard identifier={`education-${index + 1}`}>
                <div
                  className={`flex items-center gap-6 p-6 rounded-xl shadow-lg 
                `}
                >
                  {/* bg-gradient-to-r from-[#1a1b33] to-[#111123] */}
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-violet-500 rounded-full shadow-md">
                    <FaGraduationCap className="text-white text-2xl" />
                  </div>

                  {/* Education Details */}
                  <div className="flex flex-col ms-8">
                    <h2 className="text-xl font-semibold text-white">
                      {edu.title}
                    </h2>
                    <p className="italic text-gray-300">{edu.college}</p>
                    <p className="text-gray-400">📊 {edu.percentage}</p>
                    <p className="text-gray-400">📅 {edu.duration}</p>
                  </div>
                </div>
              </GlowingCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
