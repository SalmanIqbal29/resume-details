// import React from "react";
// import Head from "next/head";
// import { AiOutlineFileText } from "react-icons/ai";

// const Projects = () => {
//   return (
//     <div>
//       <>
//         <Head>
//           <link
//             href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <div className="p-6 bg-white h-[495px] shadow-lg rounded-lg mt-1 w-[841px] ml-[-10px] mx-auto flex flex-col justify-between">
//           <div className="flex items-center mb-6">
//             <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
//             <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
//               Latest Project
//             </h2>
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default Projects;







import React from "react";
import Head from "next/head";
import { AiOutlineFileText } from "react-icons/ai";

const Projects = () => {
  return (
    <div>
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="p-6 bg-white h-[495px] shadow-lg rounded-lg mt-1 w-[841px] ml-[-10px] mx-auto flex flex-col">
          <div className="flex items-center mb-6">
            <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
              Latest Project
            </h2>
          </div>

          {/* Project Image and Details */}
          <div className="flex">
            {/* Left Side: Project Image */}
            <img
              src="https://via.placeholder.com/400x300.png?text=Project+Image" // Sample image
              alt="Project Preview"
              className="w-[400px] h-[300px] rounded-lg mr-4" // Right margin for spacing
            />

            {/* Right Side: Project Details */}
            <div className="flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-700">Project Title</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project goes here. Explain what the project is about, technologies used, and any notable features.
              </p>

              {/* Buttons for Live Project and More Projects */}
              <div className="flex space-x-4">
                <a
                  href="link_to_live_project" // Replace with your live project URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition duration-200"
                >
                  Live Project
                </a>
                <a
                  href="link_to_more_projects" // Replace with your projects page URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-200"
                >
                  More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Projects;
