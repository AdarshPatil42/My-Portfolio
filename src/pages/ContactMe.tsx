import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaStackOverflow,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please provide a valid email!"
    );
  };

  return (
    <div className="w-full mx-auto px-6 pb-12 bg-gradient-to-b from-[#0b0f32] to-[#211944]">
      {/* Center Gradient Line */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      {/* Heading Section */}
      <div className="my-12">
        <h2 className="text-4xl ms-10 font-bold text-fuchsia-400 inline-block relative after:content-[''] after:block after:w-[calc(100%+2px)] after:h-1 after:bg-gradient-to-r after:from-fuchsia-400 after:to-transparent after:mt-2 after:rounded-full">
          Contact Me
        </h2>
        <p className="text-gray-300 text-lg ms-10 mt-2">
          Have a project in mind? Let’s bring it to life! 🚀
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-[90%] m-auto p-8 flex flex-col md:flex-row gap-10">
        {/* Left: Form */}
        <div className="w-full md:w-3/5 border border-gray-600 rounded-xl p-6 shadow-xl">
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>

          <form className="flex flex-col gap-4">
            <label className="text-gray-300">Your Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            />

            <label className="text-gray-300">Your Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={validateEmail}
              className={`w-full p-3 bg-transparent border ${
                emailError ? "border-red-500" : "border-gray-500"
              } rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            <label className="text-gray-300">Your Message:</label>
            <textarea
              placeholder="Write your message..."
              rows={4}
              className="w-full p-3 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            ></textarea>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all text-white py-3 rounded-md font-semibold shadow-lg"
            >
              SEND MESSAGE <FaEnvelope />
            </button>
          </form>
        </div>

        {/* Right: Contact Info & Social Media */}
        <div className="w-full md:w-2/5 flex flex-col justify-center gap-8 p-6">
          <div className="flex items-center gap-4 text-gray-300 text-lg">
            <FaEnvelope className="text-2xl text-fuchsia-400" />
            <span>adarsh.ppatil1996@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 text-lg">
            <FaPhone className="text-2xl text-green-400" />
            <span>+91 7448022119</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 text-lg">
            <FaMapMarkerAlt className="text-2xl text-blue-400" />
            <span>Current : 411045, Baner, Pune</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 text-lg">
            <FaMapMarkerAlt className="text-2xl text-blue-400" />
            <span>Permanent : 416221, Khebavade, Karveer, Kolhapur.</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6 text-4xl text-gray-400 mt-4">
            <a
              href="https://www.linkedin.com/in/adarsh-patil-64655524b/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/adarshpatil042"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-white transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/AdarshPati042"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-gray-300 transition-all"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://stackoverflow.com/users/17931679/adarshpatil"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-orange-500 transition-all"
            >
              <FaStackOverflow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
