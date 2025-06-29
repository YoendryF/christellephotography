// pages/portfolio.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const allImages = [
  // Headshots
  "/Headshots/Headshot1.JPG","/Headshots/Headshot2.JPEG", /*...*/ 
  // Grad
  "/Grad/Grad1.JPG","/Grad/Grad2.JPG", /*...*/
  // Nature
  "/Nature/Nature1.JPG","/Nature/Nature2.JPEG", /*...*/
  // Portraits
  "/Portraits/Portrait1.JPG","/Portraits/Portrait2.JPG", /*...*/
  // Themed
  "/Themed/Themed1.JPG","/Themed/Themed2.JPG", /*...*/
];

function shuffle(array: string[]) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Portfolio() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    setShuffledImages(shuffle(allImages));
  }, []);

  return (
    <div className="portfolio-gallery">
      <h1>Portfolio</h1>
      <div className="gallery-grid">
        {shuffledImages.map((src, idx) => (
          <div key={idx} className="polaroid">
            <Image src={src} alt={`Portfolio ${idx}`} width={300} height={400} />
          </div>
        ))}
      </div>
    </div>
  );
}
