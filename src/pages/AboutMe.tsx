import React from "react";
import LottieAnimatedImg from "../components/LottieAnimatedImg";
import { motion } from "framer-motion";
import AboutMeImg from "../assets/lottie/About.json";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#0b0f32] to-[#211944] text-white px-6 md:px-20"
    >
      {/* Center Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      {/* Title */}
      <div className="flex justify-start md:justify-end py-12 me-36 relative">
        <h2 className="text-4xl font-bold text-amber-400 relative inline-block after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 after:bg-gradient-to-r after:from-amber-400 after:to-transparent after:mt-2 after:rounded-full">
          About Me
        </h2>
      </div>

      <div className=" mx-auto flex flex-col pb-12 md:flex-row items-center gap-12">
        {/* Left Side: Animation */}
        <div className="w-full md:w-2/5 flex justify-center">
          <LottieAnimatedImg animationData={AboutMeImg} />
        </div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-3/5"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm{" "}
            <span className="text-amber-400 font-semibold">Adarsh Patil</span>,
            a{" "}
            <span className="text-sky-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            passionate about crafting efficient and engaging digital
            experiences. With expertise in{" "}
            <span className="text-green-400 font-semibold">
              React, Node.js, and modern web technologies
            </span>
            , I bring ideas to life through clean and scalable code. 🚀
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I have a deep passion for{" "}
            <span className="text-purple-400 font-semibold">
              problem-solving and innovation
            </span>
            . Whether it's building interactive UIs or optimizing backend
            performance, I love tackling challenges that push my skills further.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            My goal is to create{" "}
            <span className="text-pink-400 font-semibold">
              user-friendly applications
            </span>{" "}
            that make a difference. When I'm not coding, you’ll find me
            exploring new technologies, contributing to open-source projects, or
            sharing knowledge with fellow developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
