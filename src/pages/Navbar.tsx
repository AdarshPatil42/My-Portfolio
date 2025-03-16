import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store/store";
// import { toggleMode } from "../redux/features/lightModeSlice";
// import { FaMoon, FaSun } from "react-icons/fa";

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

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const mode = useSelector((state: RootState) => state.mode.lightMode);
  // const dispatch = useDispatch<AppDispatch>();

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
        <div className="text-2xl font-bold text-emerald-500 border-2 border-emerald-500 px-2 rounded-full">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
            onClick={() => setActive("home")}
          >
            AP
          </Link>
        </div>

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
      {/* <button
        className="fixed top-20 right-5 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        onClick={() => dispatch(toggleMode())}
      >
        {mode ? <FaSun /> : <FaMoon />}
      </button> */}

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
