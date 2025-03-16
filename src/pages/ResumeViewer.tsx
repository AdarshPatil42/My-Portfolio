// import React from "react";

// const ResumeViewer: React.FC = () => {
//   return <div>ResumeViewer</div>;
// };

// export default ResumeViewer;

import React from "react";
import { FaHome, FaDownload } from "react-icons/fa";
import resumePDF from "../assets/resume/Adarsh Pandurang Patil @Fullstack Dev - CV.pdf"; // Ensure the path is correct
import { useNavigate } from "react-router-dom";

const ResumeViewer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0b0f32] to-[#211944] text-white">
      {/* Header Section */}
      <div className="w-full flex justify-between items-center max-w-5xl my-6">
        {/* Home Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all px-4 py-2 rounded-lg shadow-lg"
        >
          <FaHome className="text-white" />
          <span className="hidden md:inline">Home</span>
        </button>

        {/* Download Button */}
        <a
          href={resumePDF}
          download="Adarsh Patil @Fullstack Dev - CV.pdf"
          className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 transition-all px-4 py-2 rounded-lg shadow-lg"
        >
          <FaDownload className="text-white" />
          <span className="hidden md:inline">Download</span>
        </a>
      </div>

      {/* Resume Viewer */}
      <div className="w-[90%] m-auto h-full bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl">
        <iframe
          src={resumePDF}
          className="w-full h-full border-none rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeViewer;
