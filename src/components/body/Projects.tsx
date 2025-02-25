import React from 'react';
import { LOWES } from '../constants/Constants';

const projects = [
  {
    company: "Lowe's",
    projectName: 'Mercury',
    details: 'A UI application for supply chain business team to manage data for shipments, rate and allocation, Support & Utilities, Estimated Landing Cost (ELC) and Actual Landing Cost (ALC).'
  },
  {
    company: "Lowe's",
    projectName: 'Import Plus',
    details: 'Application for business users to manage all the details about purchase order, vendor summary and items.'
  },
  {
    company: "Lowe's",
    projectName: 'Inports Payment Tool',
    details: `An application for business user to maintain data between vendor, bank and also transaction for imported items to ${LOWES} from vendors`
  },
  {
    company: "Lowe's",
    projectName: 'OneSource Global Integration (OSG)',
    details: `OneSource global (OSG) is third party. There are data transaction involved between ${LOWES} and OSG for that API's and Batches are developed.`
  },
  {
    company: "H&M Group",
    projectName: 'Customer Identiity and Access Management (CIAM) - tool',
    details: 'Created and maintaining a project to test all the sign in and sign up flow for all the portfolio brands- COS, Weekday, Arket and Otherstories in all the markets'
  },
  {
    company: "H&M Group",
    projectName: 'H&M Sign In flow',
    details: `Working on Sign in and Register flow for H&M web app`
  },
  {
    company: "H&M Group",
    projectName: 'CIAM for portfolio brands',
    details: `Creating a password less sign in flow with email otp and social media login for all the portfolio brands under H&M group`
  },
  // Add more projects here
];

const Project: React.FC = () => {
  return (
    <div className="min-h-screen bg-sky-100 py-8 px-4 sm:px-10 lg:px-20">
      <h2 className="text-xl font-bold text-cyan-600 mb-4 text-center -mt-6">Work Projects</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-violet-50 shadow-lg rounded-lg p-6">
            <h3 className="text-md font-serif font-bold text-cyan-600">{project.projectName}</h3>
            <h4 className="text-md font-serif text-gray-600 mb-2">{project.company}</h4>
            <p className="font-serif text-md text-gray-700">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
