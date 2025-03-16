import React, { useCallback } from "react";
import { motion } from "framer-motion";
import { MyImg } from "../theme/images.ts";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FaStackOverflow, FaUserFriends } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const socialLinks = [
  {
    icon: <FaLinkedin className="h-5 w-5 text-blue-500" />,
    link: "https://www.linkedin.com/in/adarsh-patil-64655524b/",
    color: "bg-blue-500",
    shadow: "shadow-[0_0_15px_#0a66c2]",
  },
  {
    icon: <FaGithub className="h-5 w-5 text-gray-300" />,
    link: "https://github.com/adarshpatil042",
    color: "bg-gray-300",
    shadow: "shadow-[0_0_15px_#ffffff]",
  },
  {
    icon: <FaXTwitter className="h-5 w-5 text-gray-300" />,
    link: "https://x.com/AdarshPati042",
    color: "bg-gray-900",
    shadow: "shadow-[0_0_15px_#ffffff33]",
  },
  {
    icon: <FaStackOverflow className="h-5 w-5 text-orange-500" />,
    link: "https://stackoverflow.com/users/17931679/adarshpatil",
    color: "bg-orange-500",
    shadow: "shadow-[0_0_15px_#f48024]",
  },
];

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row items-center justify-center p-6 overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 100, density: { enable: true, value_area: 1000 } },
            color: { value: ["#FF5733", "#FFC300", "#36D1DC", "#5B86E5"] },
            shape: { type: "circle" },
            opacity: { value: 0.7, random: true },
            size: { value: 4, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: "top",
              random: false,
              straight: false,
              out_mode: "out",
            },
            line_linked: { enable: false },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
        }}
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
              loop={0}
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
            className=" px-6 py-3 text-white font-medium rounded-full border-2 border-[#ff00ff] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <Link
              to="contact"
              className="flex items-center gap-2"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              CONTACT ME <FaUserFriends />
            </Link>
          </motion.button>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 font-medium text-white rounded-full 
                  bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            onClick={() => navigate("/resume")}
          >
            VIEW RESUME <HiDownload />
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute h-[100%] w-[100%] rounded-full opacity-30 blur-2xl"
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
