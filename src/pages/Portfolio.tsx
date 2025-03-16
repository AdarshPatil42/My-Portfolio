import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import ContactMe from "./ContactMe";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import Footer from "./Footer";

const sections = [
  "home",
  "about",
  "experience",
  "skills",
  "education",
  "contact",
];

const Portfolio: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Detect when section is at center
      threshold: 0.2, // Trigger when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, []);
  return (
    <div>
      <Navbar activeSection={activeSection} />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="about">
        <AboutMe />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="contact">
        <ContactMe />
      </Element>
      <Footer />
      {showScrollTop && <ScrollToTop />}
    </div>
  );
};

export default Portfolio;
