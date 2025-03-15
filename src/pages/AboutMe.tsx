import React from "react";
import { motion } from "framer-motion";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-r from-[#0b0f32] to-[#211944] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: About Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 inline-block relative after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 after:bg-gradient-to-r after:from-amber-400 after:to-transparent after:mt-2 after:rounded-full">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm{" "}
            <span className="text-amber-500 font-semibold">Adarsh Patil</span>,
            a passionate
            <span className="text-blue-400"> Full Stack Developer</span> with
            expertise in building scalable web applications. I love crafting
            clean, efficient, and user-friendly experiences.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-amber-400">
                Expertise
              </h4>
              <p className="text-gray-300 text-sm">
                Frontend & Backend Development
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-amber-400">
                Tech Stack
              </h4>
              <p className="text-gray-300 text-sm">
                React, Node.js, TypeScript, MongoDB
              </p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-amber-400">Hobbies</h4>
              <p className="text-gray-300 text-sm">Coding, Gaming, Traveling</p>
            </div>
            <div className="p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-amber-400">
                Experience
              </h4>
              <p className="text-gray-300 text-sm">
                3+ years in software development
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Image + Effects */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-amber-400">3+</h3>
            <p className="text-gray-300 text-sm">Years of Experience</p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-blue-400">20+</h3>
            <p className="text-gray-300 text-sm">Projects Completed</p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-green-400">10+</h3>
            <p className="text-gray-300 text-sm">Technologies Used</p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-pink-400">5+</h3>
            <p className="text-gray-300 text-sm">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const AboutMe: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("about");

//   return (
//     <section className="relative py-20 bg-gradient-to-b from-[#0b0f32] to-[#211944] text-white">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-4xl font-bold text-amber-400">About Me</h2>
//         <p className="text-gray-300 text-sm mt-2">
//           A quick look into who I am & what I do.
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6">
//         {/* Left Side: Profile Card */}
//         <motion.div
//           className="p-6 w-[340px] bg-white bg-opacity-10 rounded-xl shadow-lg border border-gray-600 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-2xl font-semibold text-amber-400">
//             Adarsh Patil
//           </h3>
//           <p className="text-sm text-gray-300">
//             Full Stack Developer | Engineer
//           </p>
//           <p className="text-gray-400 mt-4">
//             Passionate about building user-friendly web applications with modern
//             technologies.
//           </p>
//           <button className="mt-4 px-5 py-2 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition">
//             More About Me
//           </button>
//         </motion.div>

//         {/* Right Side: Interactive Tabs */}
//         <div className="w-full max-w-lg">
//           <div className="flex justify-center gap-6 mb-4">
//             {["about", "passion", "hobbies", "journey"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`text-sm font-semibold uppercase tracking-wide transition ${
//                   activeTab === tab
//                     ? "text-amber-400 border-b-2 border-amber-400"
//                     : "text-gray-400"
//                 }`}
//               >
//                 {tab === "about"
//                   ? "Who Am I?"
//                   : tab === "passion"
//                   ? "My Passion"
//                   : tab === "hobbies"
//                   ? "Hobbies"
//                   : "Journey"}
//               </button>
//             ))}
//           </div>

//           <motion.div
//             key={activeTab}
//             className="p-5 bg-white bg-opacity-10 rounded-xl shadow-md text-gray-300"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4 }}
//           >
//             {activeTab === "about" && (
//               <p>
//                 I'm a creative problem solver who loves coding & designing
//                 digital experiences.
//               </p>
//             )}
//             {activeTab === "passion" && (
//               <p>
//                 I love creating interactive web apps, learning new technologies,
//                 and optimizing performance.
//               </p>
//             )}
//             {activeTab === "hobbies" && (
//               <p>
//                 Outside of work, I enjoy gaming, photography, and traveling to
//                 explore new cultures.
//               </p>
//             )}
//             {activeTab === "journey" && (
//               <p>
//                 My journey started with curiosity for computers, leading to a
//                 career in full-stack development.
//               </p>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
