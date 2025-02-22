import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaBriefcase, FaProjectDiagram, FaSun, FaMoon } from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      {/* Mode Toggle Button */}
      <button 
        className="fixed top-5 right-5 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer | React | Angular | Node.js
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="https://github.com/yourprofile" className="text-2xl hover:text-blue-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="text-2xl hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="text-2xl hover:text-blue-400">
            <FaEnvelope />
          </a>
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['React', 'Angular', 'Node.js', 'NestJS', 'MongoDB', 'MySQL', 'Tailwind CSS'].map(skill => (
            <motion.div 
              key={skill} 
              className={darkMode ? "p-4 bg-gray-800 rounded-lg" : "p-4 bg-white shadow-lg rounded-lg"}
              whileHover={{ scale: 1.1 }}
            >
              <FaCode className="text-4xl text-blue-400 mb-2" />
              <p>{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-4">
          <motion.div className={darkMode ? "p-4 bg-gray-800 rounded-lg" : "p-4 bg-white shadow-lg rounded-lg"} whileHover={{ scale: 1.05 }}>
            <FaBriefcase className="text-4xl text-blue-400 mb-2" />
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <p>Company Name | 2021 - Present</p>
          </motion.div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div className={darkMode ? "p-4 bg-gray-800 rounded-lg" : "p-4 bg-white shadow-lg rounded-lg"} whileHover={{ scale: 1.05 }}>
            <FaProjectDiagram className="text-4xl text-blue-400 mb-2" />
            <h3 className="text-xl font-bold">Project Name</h3>
            <p>Brief description of the project.</p>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form className={darkMode ? "max-w-lg mx-auto bg-gray-800 p-6 rounded-lg" : "max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg"}>
          <input type="text" placeholder="Your Name" className={darkMode ? "w-full p-2 mb-4 rounded bg-gray-700" : "w-full p-2 mb-4 rounded bg-gray-200"} />
          <input type="email" placeholder="Your Email" className={darkMode ? "w-full p-2 mb-4 rounded bg-gray-700" : "w-full p-2 mb-4 rounded bg-gray-200"} />
          <textarea placeholder="Your Message" className={darkMode ? "w-full p-2 mb-4 rounded bg-gray-700" : "w-full p-2 mb-4 rounded bg-gray-200"}></textarea>
          <button className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
