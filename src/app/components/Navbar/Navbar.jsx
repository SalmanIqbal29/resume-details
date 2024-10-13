import React from 'react';
import { FaHome, FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaBriefcase, FaGraduationCap, FaTools, FaProjectDiagram } from 'react-icons/fa'; // Importing icons

export default function Navbar({ activeSection, setActiveSection }) {
  return (
    <div className="w-full flex justify-between items-center mt-[-23px] ml-[-13px] bg-white p-2 shadow-xl rounded-md">
      {/* Left Side - Home Icon */}
      <div className="bg-orange-500 p-3 rounded-full text-white">
        <FaHome size={24} />
      </div>

      {/* Center - Navigation Links */}
      <div className="flex space-x-6 ml-[-20px]">
        {/* Experience */}
        <a
          href="#experience"
          onClick={() => setActiveSection('experience')}
          className={`flex items-center space-x-2 text-lg font-semibold ${activeSection === 'experience' ? 'text-orange-500' : 'text-gray-500'} `}
        >
          <FaBriefcase size={18} className="text-gray-500" />
          <span>Experience</span>
        </a>

        {/* Education */}
        <a
          href="#education"
          onClick={() => setActiveSection('education')}
          className={`flex items-center space-x-2 text-lg font-semibold ${activeSection === 'education' ? 'text-orange-500' : 'text-gray-500'} `}
        >
          <FaGraduationCap size={20} className="text-gray-500" />
          <span>Education</span>
        </a>

        {/* Skills & Services */}
        <a
          href="#skill"
          onClick={() => setActiveSection('skill')}
          className={`flex items-center space-x-2 text-lg font-semibold ${activeSection === 'skill' ? 'text-orange-500' : 'text-gray-500'} `}
        >
          <FaTools size={16} className="text-gray-500" />
          <span>Skills </span>
        </a>

        {/* Projects */}
        <a
          href="#projects"
          onClick={() => setActiveSection('projects')}
          className={`flex items-center space-x-2 text-lg font-semibold ${activeSection === 'projects' ? 'text-orange-500' : 'text-gray-500'} `}
        >
          <FaProjectDiagram size={18} className="text-gray-500" />
          <span>Projects</span>
        </a>
      </div>

      {/* Right Side - Social Icons and Hire Me Button */}
      <div className="flex space-x-4 items-center">
        {/* Social Media Icons */}
        {/* <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-600">
          <FaLinkedin size={24} />
        </a> */}
        {/* <a href="https://github.com" className="text-gray-500 hover:text-black">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com" className="text-gray-500 hover:text-blue-400">
          <FaTwitter size={24} />
        </a> */}

        {/* Hire Me Button */}
        <a
          href="https://telegram.org"
          className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-600"
        >
          <FaTelegram size={20} />
          <span>Hire Me</span>
        </a>
      </div>
    </div>
  );
}
