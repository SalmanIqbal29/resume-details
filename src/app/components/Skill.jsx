// import { useState } from "react";
// import Head from "next/head";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaDocker,
//   FaPython,
// } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiMongodb,
//   SiPostgresql,
//   SiRedux,
//   SiFastapi,
//   SiNumpy,
//   SiPandas,
// } from "react-icons/si";
// import { AiOutlineFileText } from "react-icons/ai";

// const Skills = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const skillsData = [
//     {
//       quarter: "Quarter 1",
//       status: "Completed",
//       skills: [
//         { icon: <FaHtml5 className="text-2xl text-orange-500" />, name: "HTML" },
//         { icon: <FaCss3Alt className="text-2xl text-blue-500" />, name: "CSS" },
//         { icon: <FaJs className="text-2xl text-yellow-400" />, name: "JavaScript" },
//         { icon: <SiTypescript className="text-2xl text-blue-600" />, name: "TypeScript" },
//       ],
//     },
//     {
//       quarter: "Quarter 2",
//       status: "Completed",
//       skills: [
//         { icon: <FaReact className="text-2xl text-cyan-500" />, name: "React.js" },
//         { icon: <SiNextdotjs className="text-2xl text-black" />, name: "Next.js" },
//         { icon: <SiTailwindcss className="text-2xl text-teal-400" />, name: "Tailwind CSS" },
//         { icon: <SiFastapi className="text-2xl text-green-500" />, name: "Shadcn UI" },
//       ],
//     },
//     {
//       quarter: "Quarter 3",
//       status: "Running",
//       skills: [
//         { icon: <SiFastapi className="text-2xl text-green-500" />, name: "Custom API" },
//         { icon: <SiRedux className="text-2xl text-purple-500" />, name: "Redux Toolkit" },
//         { icon: <SiMongodb className="text-2xl text-green-500" />, name: "MongoDB" },
//         { icon: <SiPostgresql className="text-2xl text-blue-500" />, name: "PostgreSQL" },
//         { icon: <FaDocker className="text-2xl text-blue-400" />, name: "Docker" },
//       ],
//     },
//     {
//       quarter: "Quarter 4",
//       status: "Remaining",
//       skills: [
//         { icon: <FaPython className="text-2xl text-yellow-500" />, name: "Python" },
//         { icon: <SiNumpy className="text-2xl text-blue-400" />, name: "NumPy" },
//         { icon: <SiPandas className="text-2xl text-purple-400" />, name: "Pandas" },
//       ],
//     },
//   ];

//   const handleNextPage = () => {
//     if (currentPage < skillsData.length) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Skills</title>
//       </Head>
//       <div className="p-6 bg-white shadow-lg rounded-lg mt-1 w-[841px] ml-[-10px] mx-auto flex flex-col justify-between">
//         <div className="flex items-center mb-6">
//           <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
//           <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
//             Skills
//           </h2>
//         </div>
//         <div className="flex flex-col gap-6 p-8">
//           {/* Display skills for the current page */}
//           <div className="bg-gray-800 p-8 rounded-lg text-white shadow-md h-[300px] w-[400px]">
//             <h2 className="text-2xl mt-[-20px] text-left font-bold mb-4">{skillsData[currentPage - 1].quarter}</h2>
//             <p className={`mb-2 mt-[-15px] text-left ${skillsData[currentPage - 1].status === "Completed" ? "text-green-500" : skillsData[currentPage - 1].status === "Running" ? "text-yellow-400" : "text-red-500"}`}>
//               Status: {skillsData[currentPage - 1].status}
//             </p>
//             <p className="text-sm mb-5 mt-[-10px] text-left">Skills Learned:</p>
//             <div className="flex flex-col space-y-4">
//               {skillsData[currentPage - 1].skills.map((skill, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   {skill.icon}
//                   <span>{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="flex  mt-[-19px]">
//           <button 
//             onClick={handlePrevPage} 
//             disabled={currentPage === 1}
//             className="bg-gray-700 ml-[35px] text-white py-2 px-4 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button 
//             onClick={handleNextPage} 
//             disabled={currentPage === skillsData.length}
//             className="bg-gray-700 ml-[235px] text-white py-2 px-4 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Skills;







import { useState } from "react";
import Head from "next/head";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiFastapi,
  SiNumpy,
  SiPandas,
} from "react-icons/si";
import { AiOutlineFileText } from "react-icons/ai";

const Skills = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const skillsData = [
    {
      quarter: "Quarter 1",
      status: "Completed",
      skills: [
        { icon: <FaHtml5 className="text-2xl text-orange-500" />, name: "HTML" },
        { icon: <FaCss3Alt className="text-2xl text-blue-500" />, name: "CSS" },
        { icon: <FaJs className="text-2xl text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTypescript className="text-2xl text-blue-600" />, name: "TypeScript" },
      ],
    },
    {
      quarter: "Quarter 2",
      status: "Completed",
      skills: [
        { icon: <FaReact className="text-2xl text-cyan-500" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-2xl text-white" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-2xl text-teal-400" />, name: "Tailwind CSS" },
        { icon: <SiFastapi className="text-2xl text-green-500" />, name: "Shadcn UI" },
      ],
    },
    {
      quarter: "Quarter 3",
      status: "Running",
      skills: [
        { icon: <SiFastapi className="text-2xl text-green-500" />, name: "Custom API" },
        { icon: <SiRedux className="text-2xl text-purple-500" />, name: "Redux Toolkit" },
        { icon: <SiMongodb className="text-2xl text-green-500" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-2xl text-blue-500" />, name: "PostgreSQL" },
        { icon: <FaDocker className="text-2xl text-blue-400" />, name: "Docker" },
      ],
    },
    {
      quarter: "Quarter 4",
      status: "Remaining",
      skills: [
        { icon: <FaPython className="text-2xl text-yellow-500" />, name: "Python" },
        { icon: <SiNumpy className="text-2xl text-blue-400" />, name: "NumPy" },
        { icon: <SiPandas className="text-2xl text-purple-400" />, name: "Pandas" },
      ],
    },
  ];

  const handleNextPage = () => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getSkillsForPage = () => {
    const startIndex = (currentPage - 1) * 2;
    return skillsData.slice(startIndex, startIndex + 2);
  };

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <div className="p-6 bg-white shadow-lg rounded-lg mt-1 w-[841px] h-[495px]  ml-[-10px] mx-auto flex flex-col justify-between">
        <div className="flex items-center mb-6">
          <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {getSkillsForPage().map((quarter, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg text-white shadow-md h-[300px] w-[400px]">
              <h2 className="text-2xl mt-[-20px] text-left font-bold mb-4">
                {quarter.quarter}
              </h2>
              <p
                className={`mb-2 mt-[-15px] text-left ${
                  quarter.status === "Completed"
                    ? "text-green-500"
                    : quarter.status === "Running"
                    ? "text-yellow-400"
                    : "text-red-500"
                }`}
              >
                Status: {quarter.status}
              </p>
              <p className="text-sm mb-5 mt-[-10px] text-left">Skills Learned:</p>
              <div className="flex flex-col space-y-4">
                {quarter.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-4 justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="bg-gray-700 text-white py-2 px-4 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === 2}
            className="bg-gray-700 text-white py-2 px-4 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;
