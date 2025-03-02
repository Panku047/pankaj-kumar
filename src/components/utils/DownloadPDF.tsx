"use client"; // Ensures this runs only on the client side

import { Button } from "@mui/material";
import React from "react";

const DownloadPDF = () => {
  const handleDownload = () => {
    // const pdfUrl = "/Resume.pdf"; // File should be inside 'public' folder
    const pdfUrl = "https://drive.google.com/uc?export=download&id=1GypmNol0TGNOX_ujNKShmtBjJWZHWzoY"
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Pankaj_Kumar_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      variant="outlined"
    >
      Download Resume
    </Button>
  );
};

export default DownloadPDF;
