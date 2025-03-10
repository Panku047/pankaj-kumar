import React from 'react';

import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LandingPage from '../body/LandingPage';

const Header: React.FC = () => {
  return (
    <div>
        <header className='flex justify-end items-center p-4 bg-[rebeccapurple] text-white sticky top-0 z-10'>
            {/* Left Side: Name */}
            {/* <div className="text-3xl font-serif text-black">
                Pankaj Kumar
            </div> */}
            {/* Right Side: Contact Info */}
            <div className="text-sm text-right">
                <CallIcon className='h-5 w-5 mr-1'/>
                {/* <WhatsAppIcon className='h-4 w-4 mr-1' /> */}
                <span className='mr-1 text-xl relative top-[3px]'>+91-8877641898</span>
                <span>|</span>
                <EmailIcon className='h-5 w-5 ml-1 mr-1' />
                <span className='text-xl'>pankajkumar199528@gmail.com</span>
            </div>
        </header>
        <LandingPage />
    </div>
  );
};

export default Header;
