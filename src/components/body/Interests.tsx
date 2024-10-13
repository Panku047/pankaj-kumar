import React from 'react';

const personalProjects = [
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.',
    link: 'https://myportfolio.com'
  },
  {
    name: 'Task Manager App',
    description: 'A simple task manager app developed with React and Firebase for managing daily tasks and setting deadlines.',
    link: 'https://github.com/mygithub/task-manager'
  },
  // Add more personal projects here
];

const learningTechnologies = [
  'TypeScript',
  'GraphQL',
  'React Native',
  'Docker'
];

const Interests: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Interests</h2>
      
      {/* Personal Projects Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Personal Projects</h3>
        <div className="space-y-6">
          {personalProjects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-800">{project.name}</h4>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Details Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">GitHub</h3>
        <p className="text-gray-700">Check out my GitHub profile for more of my open-source contributions and personal projects.</p>
        <a
          href="https://github.com/mygithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:underline mt-2 block"
        >
          Visit My GitHub
        </a>
      </div>

      {/* Learning New Technologies Section */}
      <div>
        <h3 className="text-2xl font-semibold text-cyan-600 mb-4">Currently Learning</h3>
        <ul className="list-disc list-inside space-y-2">
          {learningTechnologies.map((tech, index) => (
            <li key={index} className="text-gray-700">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Interests;
