import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop: React.FC = () => {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="fixed z-50 bottom-5 right-5 bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition-all duration-300 text-white px-4 py-2 rounded-full shadow-lg"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
