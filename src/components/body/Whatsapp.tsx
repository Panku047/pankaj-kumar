import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Whatsapp: React.FC = () => {
    return(
        <div className="bg-green-500">
            <a
                href="https://wa.me/8877641898"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50"
            >
                <div className='rounded-full h-[40px] w-[40px] bg-green-500'>
                    <WhatsAppIcon className="absolute left-[-4px] bottom-[-4px] text-white" sx={{ fontSize: "3rem" }} />
                </div>
            </a>
        </div>
    );
}

export default Whatsapp;