import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import { THANK_YOU, LOWES} from '../constants/Constants';
import GreetingIcon from '../assets/greeting.png'

// Education Component
const Education = () => {
    return (
      <div className="p-6 text-center max-w-md mx-auto mt-6">
        <header className="text-xl font-bold text-cyan-600 mb-4">Education</header>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-lg">Course:</p>
            <p className="font-semibold text-lg">Bachelor of Engineering (BE)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">College:</p>
            <p className="font-semibold text-lg">PES College of Engineering</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">CGPA:</p>
            <p className="font-semibold text-lg">8.36</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Passing Year:</p>
            <p className="font-semibold text-lg">2018</p>
          </div>
        </div>
      </div>
    );
 };
  
  // Work Experience Component
  const WorkExperience = () => {
    return (
      <div className="p-6 text-center max-w-md mx-auto mt-6">
        <header className="text-xl font-bold text-cyan-600 mb-4">Work Experience</header>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-lg">Position:</p>
            <p className="font-semibold text-lg">Software Engineer</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Company:</p>
            <p className="font-semibold text-lg">H&M Group</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Duration:</p>
            <p className="font-semibold text-lg">Nov-2023 - Present</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Previous Company:</p>
            <p className="font-semibold text-lg">{LOWES}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Duration:</p>
            <p className="font-semibold text-lg">July-2018 - Nov-2023</p>
          </div>
        </div>
      </div>
    );
  };

const Header: React.FC = () => {
  return (
    <div>
        <header className='flex justify-between items-center p-4 bg-gray-800 text-white'>
            {/* Left Side: Name */}
            <div className="text-xl font-bold">
                Pankaj Kumar
            </div>
            {/* Right Side: Contact Info */}
            <div className="text-sm text-right">
                <CallIcon className='h-4 w-4 mr-1'/>
                <WhatsAppIcon className='h-4 w-4 mr-1' />
                <span className='mr-1'>+91-8877641898</span> | 
                <EmailIcon className='h-4 w-4 ml-1 mr-1' />
                <span>pankajkumar199528@gmail.com</span>
            </div>
        </header>
        <div className='bg-slate-100 mt-0.5'>
            <div className='sm:px-10 md:px-20 px-5 py-4 text-center'>
                <p className='flex justify-center'>
                <img className='h-14 w-14' src={GreetingIcon.src} alt='Nameste' />
                </p>
                {/* <h3 className='text-xl text-center text-cyan-600 relative top-2'>About me</h3> */}
                <p>Namaste</p>
                <p>{THANK_YOU}</p>
                <p>I am Pankaj Kumar, Software Engineer at H&M | Ex-{LOWES}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly items-stretch space-x-4 -mt-12">
                <div className="flex-1 sm:max-w-[400px] mt-6">
                    <Education />
                </div>
                <div className="flex-1 sm:max-w-[400px] mt-6">
                    <WorkExperience />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
