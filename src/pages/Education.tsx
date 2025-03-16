import React from "react";
import LottieAnimatedImg from "../components/LottieAnimatedImg";
import educationImg from "../assets/lottie/education.json";
import { FaGraduationCap } from "react-icons/fa";
import GlowingCard from "../components/GlowingCard.js";
import { educationData } from "../uitls/constants.js";

const Education: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#0b0f32] to-[#211944]">
      {/* Center Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
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
              } w-full lg:w-4/5`}
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
                  <div className="flex flex-col gap-2 ms-8">
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
