import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaFacebook } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-[#0b0f32] border-t border-gray-700 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-fuchsia-400">Adarsh Patil</h2>
          <p className="text-sm text-gray-400">
            Full Stack Developer | Open to Opportunities
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Adarsh Patil. All rights reserved.
        </div>

        {/* Right: Social Media */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-white transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-blue-500 transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-gray-300 transition-all"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-400 transition-all"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
