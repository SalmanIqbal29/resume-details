import { useState } from "react"; 
import Head from "next/head";
import { AiOutlineFileText } from "react-icons/ai"; // Importing an icon for the resume header

export default function Experience() {
  const [activeJob, setActiveJob] = useState(1); // State to track the active job (default is Job 1)

  // Jobs data
  const jobs = [
    {
      title: "HR Officer",
      company: "Pakistan Cosmetic Product",
      duration: "2009 - 2012",
      location: "Karachi, Pakistan",
      description: [
        "Assist with the day-to-day operations of HR functions and duties.",
        "Compile and update employee records, both hard and soft copies.",
        "Process documentation and prepare reports related to personnel activities such as staffing, recruitment, training, and performance.",
        "Assist with payroll preparation by providing relevant data, such as absences and leaves.",
        "Track and maintain attendance and leave records.",
      ],
    },
    {
      title: "Import & Export Officer",
      company: "Middle East Freight Forwarding Compnay (MEFFCO)",
      duration: "2013 - 2018",
      location: "Dubai, United Arab Emirates",
      description: [
        "Ensure compliance with import regulations.",
        "Manage import licenses and permits.",
        "Determine HS codes.",
        "Prepare and submit customs documents.",
        "Collaborate with logistics partners for smooth customs clearance and timely delivery.",
      ],
    },
    {
      title: "Customer Service Representative",
      company: "Mawgif",
      duration: "2019 - 2022",
      location: "Taif, Saudi Arabia",
      description: [
        "Greeted customers warmly and professionally",
        "Provided clear information on parking rates and ongoing promotions.",
        "Assisted customers with inquiries regarding services and facilities.",
        "Collected parking fees through both cash and electronics payment methods.",
        "Issued receipts for transactions promptly and accurately.",
        "Ensured a positive customer experience throughout their visit.",
      ],
    },
    // Add more jobs as needed
  ];

  const handleJobClick = (index) => {
    // Set the active job when clicked
    setActiveJob(index + 1);
  };

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="p-6 bg-white h-[495px] shadow-lg rounded-lg mt-1 w-[841px] ml-[-10px] mx-auto flex flex-col justify-between">
        {/* Header with icon */}
        <div className="flex items-center mb-6">
          <AiOutlineFileText className="text-3xl text-orange-500 mr-2" />
          <h2 className="text-3xl font-semibold text-gray-800 font-montserrat">
            Work Experience
          </h2>
        </div>

        {/* Job Tabs */}
        <div className="flex space-x-4 mb-6">
          {jobs.map((job, index) => (
            <button
              key={index}
              className={`py-2 px-4 border-b-4 ${
                activeJob === index + 1
                  ? "border-transparent text-orange-500" // Change color to orange for active
                  : "border-transparent text-gray-800" // Normal color for inactive
              } font-semibold focus:outline-none`}
              onClick={() => handleJobClick(index)}
            >
              Exp {index + 1}
            </button>
          ))}
        </div>

        {/* Display the selected job */}
        <div className="flex-grow p-4 bg-white text-left space-y-4">
          <div className={`p-4 border-l-4 ${activeJob === 0 ? 'border-l-0' : 'border-l-orange-500'} bg-gray-50 rounded-lg shadow-sm`}>
            <p className="font-semibold text-lg text-gray-700 font-roboto">
              {jobs[activeJob - 1].title}
            </p>
            <p className="text-sm text-gray-500 font-roboto">
              {jobs[activeJob - 1].company}, {jobs[activeJob - 1].duration}
            </p>
            <p className="text-md text-orange-500 font-roboto">
              {jobs[activeJob - 1].location}
            </p>
            <p className="text-gray-600 font-roboto">
              <strong>Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-600 font-roboto">
              {jobs[activeJob - 1].description.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
