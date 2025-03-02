import React from 'react';
import Image from 'next/image';

import ContactButton from './contact/ContactButton';
import { ABOUT_DES_ONE, ABOUT_DES_THREE, ABOUT_DES_TWO, ROLES } from '../constants/Constants';
import DownloadPDF from '../utils/DownloadPDF';
import { Button } from '@mui/material';
import Link from 'next/link';

const LandingPage: React.FC = () => {

  return (
    <div className="flex flex-col items-center justify-start bg-white text-white p-6">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
        <Image
          src="/profilePic.JPG" // Replace with your image pat
          alt="Profile"
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="text-center mt-2">
        <h1 className="text-4xl font-semibold text-[#1B4F72] mb-1">Pankaj Kumar</h1>
        <p className="text-[#1B4F72] font-serif leading-8 text-[1.2rem] mb-1">
            {ROLES}
        </p>
        <div className="text-lg text-gray-700 leading-relaxed md:text-xl font-light max-w-3xl mx-auto text-justify">
            <p className='mb-2'>{ABOUT_DES_ONE}</p>
            <p className='mb-2'>{ABOUT_DES_TWO}</p>
            <p className='mb-2'>{ABOUT_DES_THREE}</p>
        </div>
        <div className='z-0 flex flex-wrap justify-evenly pt-2 sm:justify-evenly gap-4'>
            <ContactButton targetId="to-contact" />
            <DownloadPDF />
            <Link href="https://www.linkedin.com/in/pankaj047/" target='_blank'>
              <Button variant="outlined">LinkedIn</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
