import React from 'react';

const projects = [
  {
    company: 'Company One',
    projectName: 'E-commerce Platform',
    details: 'Developed a responsive e-commerce web app with React and Tailwind CSS. Integrated payment gateway and optimized performance for mobile devices.'
  },
  {
    company: 'Company Two',
    projectName: 'Inventory Management System',
    details: 'Led the front-end development of an inventory management system with Redux for state management and REST API integration for real-time data updates.'
  },
  {
    company: 'Company Three',
    projectName: 'Social Media App',
    details: 'Worked on a social media platform focusing on user engagement features. Built interactive UI components and ensured cross-browser compatibility.'
  },
  {
    company: 'Company Four',
    projectName: 'Healthcare Dashboard',
    details: 'Developed a healthcare dashboard to monitor patient data. Implemented data visualization using D3.js and ensured high accessibility standards.'
  },
  // Add more projects here
];

const Project: React.FC = () => {
  return (
    <div className="min-h-screen bg-red-100 py-8 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-600">{project.projectName}</h3>
            <h4 className="text-md text-gray-600 mb-2">{project.company}</h4>
            <p className="text-gray-700">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
