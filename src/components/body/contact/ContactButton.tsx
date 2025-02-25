"use client"; // This is a client component

import Button from '@mui/material/Button';

export default function ContactButton({ targetId }: { targetId: string }) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "instant" });
    }
  };
  return <Button onClick={handleScroll} variant="outlined">Contact</Button>  
}
