import React from 'react';

import CallIcon from '@mui/icons-material/Call';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';

import Paper from '@mui/material/Paper';

import { THANK_YOU, LOWES} from '../constants/Constants';
import GreetingIcon from '../assets/greeting.png'

// Education Component
const Education = () => {
    return (
      <div className="p-6 text-center max-w-md mx-auto mt-6">
        <header className="text-xl font-bold text-cyan-600 mb-4">Education</header>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-md text-black">Course:</p>
            <p className="font-semibold text-md text-black">Bachelor of Engineering (BE)</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">College:</p>
            <p className="font-semibold text-md text-black">PES College of Engineering</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">CGPA:</p>
            <p className="font-semibold text-md text-black">8.36</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">Passing Year:</p>
            <p className="font-semibold text-md text-black">2018</p>
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
            <p className="text-md text-black">Position:</p>
            <p className="font-semibold text-md text-black">Software Engineer</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">Company:</p>
            <p className="font-semibold text-md text-black">H&M Group</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">Duration:</p>
            <p className="font-semibold text-md text-black">Nov-2023 - Present</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">Previous Company:</p>
            <p className="font-semibold text-md text-black">{LOWES}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-md text-black">Duration:</p>
            <p className="font-semibold text-md text-black">July-2018 - Nov-2023</p>
          </div>
        </div>
      </div>
    );
  };

const Header: React.FC = () => {
  return (
    <div>
        <header className='flex justify-between items-center p-4 bg-slate-100 text-white'>
            {/* Left Side: Name */}
            <div className="text-3xl font-serif text-black">
                Pankaj Kumar
            </div>
            {/* Right Side: Contact Info */}
            <div className="text-sm text-right text-black">
                <CallIcon className='h-4 w-4 mr-1'/>
                {/* <WhatsAppIcon className='h-4 w-4 mr-1' /> */}
                <span className='mr-1 text-lg'>+91-8877641898</span> | 
                <EmailIcon className='h-4 w-4 ml-1 mr-1' />
                <span className='text-lg'>pankajkumar199528@gmail.com</span>
            </div>
        </header>
        <div className='bg-slate-100'>
            <div className='sm:px-10 md:px-20 px-5 py-4 text-center'>
                <p className='flex justify-center'>
                <img className='h-14 w-14' src={GreetingIcon.src} alt='Nameste' />
                </p>
                {/* <h3 className='text-xl text-center text-cyan-600 relative top-2'>About me</h3> */}
                <p className='text-black font-serif text-xl'>Namaste</p>
                <p className='text-black font-serif'>{THANK_YOU}</p>
                <p className='text-black font-serif'>I am Pankaj Kumar, Software Engineer at H&M | Ex-{LOWES}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-evenly items-stretch space-x-4 -mt-12">
                <div className="flex-1 sm:max-w-[400px] mt-6">
                    <Education />
                </div>
                <div className="flex-1 sm:max-w-[400px] mt-6">
                    <WorkExperience />
                </div>
            </div>
            <div className='text-center p-2'>
                <p className='text-xl font-bold text-cyan-600 mb-4'>RESUME</p>
                <div className='flex justify-center'>
                    <a className='pr-2' href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <VisibilityIcon />
                    </a>
                    <a className='pl-2' href="/Resume.pdf" download="Pankaj_Kumar_Resume.pdf">
                        <DownloadIcon />
                    </a>
                </div>
            </div>
            <div className='text-center p-2'>
                <p className='text-black font-serif'>Software developer with 6+ years of experience building responsive web applications. Passionate about working
                    on UI technologies.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Header;
