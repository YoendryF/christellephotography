// pages/portfolio.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const allImages = [
  // Headshots
  "/Headshots/Headshot1.JPG",
  "/Headshots/Headshot2.JPEG",
  "/Headshots/Headshot3.JPG",
  "/Headshots/Headshot4.JPG",
  "/Headshots/Headshot5.JPEG",
  "/Headshots/Headshot6.JPEG",
  "/Headshots/Headshot7.JPEG",
  "/Headshots/Headshot8.JPEG",
  "/Headshots/Headshot9.JPEG",
  "/Headshots/Headshot10.JPEG",
  "/Headshots/Headshot11.JPEG",
  "/Headshots/Headshot12.JPEG",
  // Grad
  "/Grad/Grad1.JPG",
  "/Grad/Grad2.JPG",
  "/Grad/Grad3.JPG",
  "/Grad/Grad4.JPEG",
  "/Grad/Grad5.JPEG",
  "/Grad/Grad6.JPG",
  "/Grad/Grad7.JPG",
  "/Grad/Grad8.JPEG",
  "/Grad/Grad9.JPEG",
  "/Grad/Grad10.JPEG",
  "/Grad/Grad11.JPEG",
  "/Grad/Grad12.JPEG",
  "/Grad/Grad13.JPG",
  "/Grad/Grad14.JPG",
  "/Grad/Grad15.JPG",
  "/Grad/Grad16.JPG",
  "/Grad/Grad17.JPG",
  "/Grad/Grad18.JPG",
  // Nature
  "/Nature/Nature1.JPG",
  "/Nature/Nature2.JPEG",
  "/Nature/Nature3.JPG",
  "/Nature/Nature4.JPG",
  "/Nature/Nature5.JPG",
  "/Nature/Nature6.JPEG",
  "/Nature/Nature7.JPG",
  "/Nature/Nature8.JPG",
  "/Nature/Nature9.JPG",
  "/Nature/Nature10.JPG",
  "/Nature/Nature11.JPG",
  "/Nature/Nature12.JPG",
  "/Nature/Nature13.JPEG",
  "/Nature/Nature14.JPEG",
  "/Nature/Nature15.JPG",
  "/Nature/Nature16.JPEG",
  "/Nature/Nature17.JPG",
  "/Nature/Nature18.JPG",
  "/Nature/Nature19.JPG",
  "/Nature/Nature20.JPEG",
  "/Nature/Nature21.JPG",
  "/Nature/Nature22.JPG",
  "/Nature/Nature23.JPG",
  "/Nature/Nature24.JPG",
  "/Nature/Nature25.JPG",
  "/Nature/Nature26.JPG",
  "/Nature/Nature27.JPG",
  "/Nature/Nature28.JPG",
  "/Nature/Nature29.JPG",
  "/Nature/Nature30.JPEG",
  // Portraits
  "/Portraits/Portrait1.JPG",
  "/Portraits/Portrait2.JPG",
  "/Portraits/Portrait3.JPG",
  "/Portraits/Portrait4.JPG",
  "/Portraits/Portrait5.JPG",
  "/Portraits/Portrait6.JPG",
  "/Portraits/Portrait7.JPG",
  "/Portraits/Portrait8.JPG",
  "/Portraits/Portrait9.JPG",
  "/Portraits/Portrait10.JPEG",
  "/Portraits/Portrait11.JPEG",
  "/Portraits/Portrait12.JPG",
  "/Portraits/Portrait13.JPG",
  "/Portraits/Portrait14.JPG",
  "/Portraits/Portrait15.JPG",
  "/Portraits/Portrait16.JPG",
  "/Portraits/Portrait17.JPG",
  "/Portraits/Portrait18.JPG",
  "/Portraits/Portrait19.JPG",
  "/Portraits/Portrait20.JPG",
  "/Portraits/Portrait21.JPG",
  "/Portraits/Portrait22.JPEG",
  "/Portraits/Portrait23.JPEG",
  "/Portraits/Portrait24.JPG",
  "/Portraits/Portrait25.JPG",
  // Themed
  "/Themed/Themed1.JPG",
  "/Themed/Themed2.JPG",
  "/Themed/Themed3.JPEG",
  "/Themed/Themed4.JPG",
  "/Themed/Themed5.JPG",
  "/Themed/Themed6.JPEG",
  "/Themed/Themed7.JPG",
  "/Themed/Themed8.JPG",
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
            <Image src={src} alt={`Portfolio ${idx}`} layout="responsive" width={1} height={1}/>
          </div>
        ))}
      </div>
    </div>
  );
}
