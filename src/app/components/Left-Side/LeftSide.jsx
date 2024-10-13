import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai'; // Importing the download icon from react-icons

const LeftSide = () => {
  return (
    <div>
      <div className="w-full md:w-[100%] h-[580px] bg-white shadow-lg p-6 rounded-lg">
        {/* Name and Title */}
        <h1 className="text-3xl font-bold mt-[-10px]">Salman Iqbal</h1>
        <p className="text-md text-gray-400">Full Stack Developer</p>

        {/* Image */}
        <div className="my-6">
          <img
            src="/images/profileimg.png"
            alt="Profile"
            className="w-60 h-60 rounded-md object-cover mx-auto"
          />
        </div>

        {/* Personal Details */}
        <div className="space-y-2 text-gray-700">
          <div>
            <strong>Name:</strong> Salman Iqbal
          </div>
          <div>
            <strong>Birthday:</strong> June 29, 1986
          </div>
          <div>
            <strong>Job:</strong> Full Stack Developer
          </div>
          <div>
            <strong>Email:</strong> salmaniqbal2986@gmail.com
          </div>
          <div>
            <strong>Website:</strong> www.abc.com
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-4 flex justify-center cursor-pointer">
          <a
            href="/path-to-your-resume.pdf" // Update with the actual path to your resume
            download
            className="flex items-center justify-center bg-white text-orange-500 border border-orange-500 rounded-full px-3 py-1 shadow-md hover:bg-orange-500 hover:text-white transition duration-200"
          >
            <AiOutlineDownload className="mr-2 text-sm" /> {/* Medium-sized Download Icon */}
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
