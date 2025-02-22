import React from "react";
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop: React.FC = () => {
  return (
    <button
      onClick={() => scroll.scrollToTop({ duration: 500 })}
      className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
