import React from "react";
import Head from "next/head";
import { AiOutlineFileText } from "react-icons/ai";

const Education = () => {
  return (
    <div>
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="p-6 bg-white h-[495px] shadow-lg rounded-lg mt-1 w-[841px] ml-[-10px] mx-auto flex flex-col justify-between">
          <div className="flex items-center mb-6">
            <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
            <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
              Education
            </h2>
          </div>

          {/* Education */}
          <div className="mb-6 p-4 border-l-4 border-orange-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 font-montserrat"></h3>
            <div className="flex gap-2 mb-1">
              <span className="text-gray-700 font-roboto">College:</span>
              <span className="text-gray-700 font-roboto">
                Govt.Premier College
              </span>
            </div>
            <div className="flex gap-2 mb-1">
              <span className="text-gray-700 font-roboto">Degree Level:</span>
              <span className="text-gray-700 font-roboto">INTERMEDIATE</span>
            </div>
            <div className="flex gap-2 mb-8">
              <span className="text-gray-700 font-roboto">Completed Year:</span>
              <span className="text-gray-700 font-roboto">2004</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 font-montserrat"></h3>

            <div className="flex gap-2 mb-1">
              <span className="text-gray-700 font-roboto">College:</span>
              <span className="text-gray-700 font-roboto">
                Ahmed Grammer School
              </span>
            </div>
            <div className="flex gap-2 mb-1">
              <span className="text-gray-700 font-roboto">Degree Level:</span>
              <span className="text-gray-700 font-roboto">MATRIC</span>
            </div>
            <div className="flex gap-2 mb-1">
              <span className="text-gray-700 font-roboto">Completed Year:</span>
              <span className="text-gray-700 font-roboto">2002</span>
            </div>
          </div>

          {/* Extra Education */}
          <div className="mb-6  p-4 border-l-4 border-orange-500 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2 font-montserrat ml-[-570px]">
              Additional Education
            </h3>
            <p className="text-gray-700 font-roboto ml-[10px] text-justify">
              Currently enrolled in the Diploma in Artificial Intelligence and
              Computing program at PIAIC (Presidential Initiative for Artificial
              Intelligence and Computing),
            </p>
            <p className="text-gray-500 font-roboto ml-[-540px]">
            Since Start of 2023 - Present
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Education;
