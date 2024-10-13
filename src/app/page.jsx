"use client";
import { useState } from "react";
import LeftSide from "./components/Left-Side/LeftSide";
import Navbar from "./components/Navbar/Navbar"; // Import the Navbar
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skill from "./components/Skill";


export default function Home() {
  const [activeSection, setActiveSection] = useState("experience"); // Default section

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Left Side */}
      <LeftSide />

      {/* Right Side */}
      <div className="w-full md:w-2/3 flex flex-col items-center p-6">
        {/* Navbar */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Conditional Rendering of Sections */}
        <div className="mt-4 w-[830px] space-y-4 text-center">
          {activeSection === "experience" && <Experience />}
          {activeSection === "education" && <Education />}
          {activeSection === "skill" && <Skill />}
        
          {activeSection === "projects" && <Projects />}
        </div>
      </div>
    </div>
  );
}
