'use client'
import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// import DownloadIcon from '@mui/icons-material/Download';

const contactInfo = {
  mobile: '8877641898',
  email: 'pankajkumar199528@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/pankaj-kumar-047/',
  address: 'Village - Taraiya East, Madhubani, Bihar - 847102'
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        You can reach out to me via any of the options below:
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Mobile */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 text-lg">Mobile: {contactInfo.mobile}</span>
          <Tooltip title="Copy Mobile Number">
            <IconButton onClick={() => copyToClipboard(contactInfo.mobile)}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 text-lg block break-words">Email: {contactInfo.email}</span>
          <Tooltip title="Copy Email">
            <IconButton onClick={() => copyToClipboard(contactInfo.email)}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 text-lg">LinkedIn: 
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:underline ml-1 block break-words"
            >
              {contactInfo.linkedIn}
            </a>
          </span>
          <Tooltip title="Copy LinkedIn">
            <IconButton onClick={() => copyToClipboard(contactInfo.linkedIn)}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>
        {/* Address */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-700 text-lg">Address: {contactInfo.address}</span>
          <Tooltip title="Copy Address">
            <IconButton onClick={() => copyToClipboard(contactInfo.address)}>
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Contact;
