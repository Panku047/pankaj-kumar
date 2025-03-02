import React from 'react';

import '../style/styles.css'

const personalProjects = [
  {
    name: 'RAJKIYAM - A Business hotel',
    description: 'This is real project build it for my friend business. Rajkiyam Hotel offers exceptional value and comfort, providing a delightful experience for both business and leisure travelers.',
    link: 'https://www.rajkiyamhotels.com/'
  },
  {
    name: 'Finance World',
    description: 'Finance World is a comprehensive platform that provides financial insights, stock market analysis, and investment strategies with some finance calculator',
    link: 'https://finance-world.netlify.app/'
  },
  {
    name: 'Personal profile',
    description: 'A personal portfolio website built in Next JS, TypeScript and Tailwind CSS',
    link: 'https://pankaj-weld.vercel.app/'
  }
];

// const learningTechnologies = [
//   'TypeScript',
//   'GraphQL',
//   'React Native',
//   'Docker'
// ];

const Interests: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-2 sm:px-10 lg:px-20">
        <h3 className="page-heading">Personal Projects</h3>
        <div className="space-y-6">
          {personalProjects.map((project, index) => (
            <div key={index} className="shadow-lg bg-[white] rounded-lg p-6 hover:bg-[rebeccapurple] group">
              <h4 className="text-md font-serif font-bold text-gray-600 group-hover:text-white">{project.name}</h4>
              <p className="text-md font-serif text-gray-600 mb-2 group-hover:text-white">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-serif text-md text-gray-700 group-hover:text-white hover:underline">
                View Project - {project.name}
              </a>
            </div>
          ))}
      </div>

      {/* GitHub Details Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4 pt-3">GitHub</h3>
        <p className="text-gray-700">Check out my GitHub profile for my personal project and learning.</p>
        <a
          href="https://github.com/Panku047"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline mt-2 block"
        >
          Visit My GitHub
        </a>
      </div>

      {/* Learning New Technologies Section */}
      {/* <div>
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Currently Learning</h3>
        <ul className="list-disc list-inside space-y-2">
          {learningTechnologies.map((tech, index) => (
            <li key={index} className="text-gray-700">{tech}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Interests;
