import React from 'react';

const skills = [
  'JavaScript',
  'React JS',
  'Next JS',
  'Redux',
  'TypeScript',
  'Tailwind CSS',
  "Data Structure",
  "System Design",
  'HTML',
  'CSS',
  "Express JS",
  "Database"
];

const tools = [
    'Git',
    "JIRA",
    "VSD",
    "Lighthouse",
    "Requestly",
    "Postman"
]

const Skills: React.FC = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center p-4">
      <h2 className="text-xl text-center text-cyan-600">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center text-gray-700 font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300 ease-in-out"
          >
            {skill}
          </div>
        ))}
      </div>

      <h2 className="text-xl text-center text-cyan-600 mt-2">----</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-2">
        {tools.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center text-gray-700 font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300 ease-in-out"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
