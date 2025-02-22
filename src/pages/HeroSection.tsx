import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { MyImg } from "../theme/images";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { particalsOptions2 } from "../uitls/constants.js";
import { FaUserFriends } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaLinkedin className="h-5 w-5 text-blue-500" />,
    link: "https://www.linkedin.com/in/your-profile",
    color: "bg-blue-500",
    shadow: "shadow-[0_0_15px_#0a66c2]",
  },
  {
    icon: <FaGithub className="h-5 w-5 text-gray-300" />,
    link: "https://github.com/your-github",
    color: "bg-gray-300",
    shadow: "shadow-[0_0_15px_#ffffff]",
  },
  {
    icon: <FaTwitter className="h-5 w-5 text-sky-400" />,
    link: "https://twitter.com/your-twitter",
    color: "bg-sky-400",
    shadow: "shadow-[0_0_15px_#1DA1F2]",
  },
  {
    icon: <FaInstagram className="h-5 w-5 text-pink-500" />,
    link: "https://instagram.com/your-instagram",
    color: "bg-pink-500",
    shadow: "shadow-[0_0_15px_#e1306c]",
  },
];

const HeroSection: React.FC = () => {
  // Fix: Initialize tsparticles properly
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine); // Use loadSlim instead of loadFull for better performance
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center p-6 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particalsOptions2}
        className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#0b0f32] to-[#211944]"
      />

      {/* Text Content */}
      <motion.div
        className="w-[50%] text-center md:text-left md:ml-10 mt-6 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hi There! 👋 <br /> I'm{" "}
          <span className="text-[#16f2b3] drop-shadow-lg">Adarsh Patil</span>{" "}
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={90}
              delaySpeed={2000}
            />
          </span>
        </h1>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative flex items-center justify-center h-14 w-14 rounded-full border-2 border-white transition-all duration-300 ${social.shadow}`}
              whileHover={{ scale: 1.2, rotate: 20 }}
            >
              {/* Background Circle */}
              <motion.div
                className={`absolute inset-0 rounded-full ${social.color} transition-all duration-300 opacity-0 group-hover:opacity-100`}
              ></motion.div>

              {/* Icon */}
              <motion.span className="relative text-white group-hover:text-transparent transition-all duration-300">
                {social.icon}
              </motion.span>
            </motion.a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="flex gap-4 mt-6">
          <motion.button
            className="flex items-center gap-2 px-6 py-3 text-white font-medium rounded-full border-2 border-[#ff00ff] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            CONTACT ME <FaUserFriends />
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 font-medium text-white rounded-full 
                  bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            GET RESUME <HiDownload />
          </motion.button>
        </div>
      </motion.div>

      {/* Profile Image */}
      {/* <motion.img
        src={MyImg}
        alt="My Profile"
        className="h-52 w-52 md:h-80 md:w-80 rounded-full shadow-lg border-4 border-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      /> */}
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute h-[100%] w-[100%] rounded-full bg-purple-500 opacity-30 blur-2xl"
          animate={
            {
              // opacity: [0.2, 0.5, 0.2],
            }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.img
          src={MyImg}
          alt="My Profile"
          className="h-52 w-52 md:h-80 md:w-80 rounded-full shadow-[0px_0px_20px_rgba(255,255,255,0.3)] border-4 border-white"
          animate={
            {
              // y: [0, -40, 0],
            }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
