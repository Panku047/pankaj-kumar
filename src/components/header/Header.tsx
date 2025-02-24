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
import LandingPage from '../body/LandingPage';

const Header: React.FC = () => {
  return (
    <div>
        <header className='flex justify-end items-center p-4 bg-white text-white sticky top-0 z-10'>
            {/* Left Side: Name */}
            {/* <div className="text-3xl font-serif text-black">
                Pankaj Kumar
            </div> */}
            {/* Right Side: Contact Info */}
            <div className="text-sm text-right text-[#1C2833]">
                <CallIcon className='h-5 w-5 mr-1'/>
                {/* <WhatsAppIcon className='h-4 w-4 mr-1' /> */}
                <span className='mr-1 text-xl'>+91-8877641898</span> | 
                <EmailIcon className='h-5 w-5 ml-1 mr-1' />
                <span className='text-xl'>pankajkumar199528@gmail.com</span>
            </div>
        </header>
        <LandingPage />
    </div>
  );
};

export default Header;
