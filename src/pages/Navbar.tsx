// import React from "react";
// import { Link } from "react-scroll";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-5 shadow-md z-10">
//       <ul className="flex justify-center space-x-6">
//         <li>
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             About Me
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="experience"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             Experience
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="skills"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="education"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             Education
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             className="cursor-pointer"
//           >
//             Contact Us
//           </Link>
//         </li>
//         {/* <li>
//           <NavLink to="resume" className="cursor-pointer">
//             Resume
//           </NavLink>
//         </li> */}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, use } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", link: "home" },
  { name: "About Me", link: "about" },
  { name: "Experience", link: "experience" },
  { name: "Skills", link: "skills" },
  { name: "Education", link: "education" },
  { name: "Contact Us", link: "contact" },
];

interface NavbarProps {
  activeSection: string;
}

// const Navbar: React.FC = () => {
const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(activeSection);
    console.log("activeSection", activeSection);
  }, [activeSection]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md" : "bg-transparent"
      } text-white py-4 px-8 z-50 shadow-lg transition-all duration-300`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-emerald-500">Adarsh</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold uppercase tracking-wide">
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`relative cursor-pointer ${
                  active === item.link ? "text-emerald-500" : "text-white"
                }  hover:text-emerald-500 transition-all duration-300`}
                onClick={() => setActive(item.link)}
                onSetActive={(to: string) =>
                  console.log("called", item.link, to)
                }
              >
                {item.name}
                <motion.div
                  className="absolute left-1/2 bottom-[-6px] h-[4px] w-0 bg-emerald-500 hover:w-full transition-all duration-300 hover:left-0"
                  animate={{
                    width: active === item.link ? "100%" : "0%",
                    left: active === item.link ? "0%" : "50%",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          className="md:hidden flex flex-col items-center mt-4 space-y-4 text-lg font-semibold uppercase backdrop-blur-md py-6 rounded-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-amber-500 hover:text-emerald-500 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
