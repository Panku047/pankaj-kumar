import React from 'react';
import Image from 'next/image';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

import ContactButton from './contact/ContactButton';
import { ABOUT_DES_ONE, ABOUT_DES_THREE, ABOUT_DES_TWO, ROLES } from '../constants/Constants';
import DownloadPDF from '../utils/DownloadPDF';

const LandingPage: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = "/Resume.pdf"; // Path to the file in 'public' folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MyFile.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-white p-6">
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
        <div className='z-0 flex justify-evenly pt-2'>
            {/* <ArrowDownwardSharpIcon className='text-gray-400' />
            <br /> */}
            <ContactButton targetId="to-contact" />
            <DownloadPDF />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
