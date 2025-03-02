import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-200 py-6">
      <footer>
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-semibold text-white mb-4"></h3>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <IconButton component="a" href="https://www.linkedin.com/in/pankaj047/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="text-white hover:text-gray-200" fontSize="large" />
            </IconButton>
            
            <IconButton component="a" href="https://www.facebook.com/share/ywyu2eYvxWtyc9jD/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="text-white hover:text-gray-200" fontSize="large" />
            </IconButton>
            
            <IconButton component="a" href="https://www.instagram.com/pankaj_047" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="text-white hover:text-gray-200" fontSize="large" />
            </IconButton>
            
            <IconButton component="a" href="https://github.com/Panku047" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="text-white hover:text-gray-200" fontSize="large" />
            </IconButton>
            
            <IconButton component="a" href="https://wa.me/8877641898" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="text-white hover:text-gray-200" fontSize="large" />
            </IconButton>
          </div>

          <p className="text-white text-sm">
            © {new Date().getFullYear()} Pankaj Kumar. Made with <FavoriteIcon className='text-red-600' /> in India.
          </p>
          <p className='text-white text-sm'>@Bangalore, India</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
