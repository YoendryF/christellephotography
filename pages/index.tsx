'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRates, setShowRates] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTech, setShowTech] = useState(false);



  const introPolaroid = 
    {
        caption: "Meet The Photographer",
        image: "/Christelle"
    }

  const polaroids = [
    {
      caption: "Headshots",
      images: ["/Headshots/Headshot1.JPG","/Headshots/Headshot2.JPEG","/Headshots/Headshot3.JPG","/Headshots/Headshot4.JPG","/Headshots/Headshot5.JPEG","/Headshots/Headshot6.JPEG","/Headshots/Headshot7.JPEG","/Headshots/Headshot8.JPEG","/Headshots/Headshot9.JPEG"]
    },
    {
      caption: "Grad Pics",
      images: ["/Grad/Grad1.JPG","/Grad/Grad2.JPG","/Grad/Grad3.JPG","/Grad/Grad4.JPEG","/Grad/Grad5.JPEG","/Grad/Grad6.JPG","/Grad/Grad7.JPG","/Grad/Grad8.JPEG","/Grad/Grad9.JPEG","/Grad/Grad10.JPEG","/Grad/Grad11.JPEG"],
    },
    {
      caption: "Natural Photoshoots",
      images: ["/Nature/Nature1.JPG", "/Nature/Nature2.JPEG", "/Nature/Nature3.JPG", "/Nature/Nature4.JPG","/Nature/Nature5.JPG","/Nature/Nature6.JPEG","/Nature/Nature7.JPG","/Nature/Nature8.JPG","/Nature/Nature9.JPG","/Nature/Nature10.JPG","/Nature/Nature11.JPG","/Nature/Nature12.JPG","/Nature/Nature13.JPEG","/Nature/Nature14.JPEG","/Nature/Nature16.JPEG","/Nature/Nature17.JPG","/Nature/Nature18.JPG","/Nature/Nature19.JPG"]
    },
    {
      caption: "Portraits",
      images: ["/Portraits/Portrait1.JPG", "/Portraits/Portrait2.JPG", "/Portraits/Portrait3.JPG","/Portraits/Portrait4.JPG","/Portraits/Portrait5.JPG","/Portraits/Portrait7.JPG","/Portraits/Portrait8.JPG","/Portraits/Portrait9.JPG","/Portraits/Portrait10.JPEG","/Portraits/Portrait11.JPEG","/Portraits/Portrait12.JPG","/Portraits/Portrait13.JPG","/Portraits/Portrait14.JPG","/Portraits/Portrait15.JPG","/Portraits/Portrait16.JPG","/Portraits/Portrait17.JPG"]
    },
    {
      caption: "Themed Photoshoots",
      images: ["/Themed/Themed1.JPG", "/Themed/Themed2.JPG", "/Themed/Themed3.JPEG","/Themed/Themed4.JPG","/Themed/Themed5.JPG"]
    }
  ];

  const [indices, setIndices] = useState(Array(polaroids.length).fill(0));
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev =>
        prev.map((idx, i) => (idx + 1) % polaroids[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [polaroids]);


  return (
    <main>
      {/*Navbar*/}
      <nav className="navbar">
        <div className="navbar-title">ChristellePhotography.com</div>
        <div className = "navbar-links">
        <a href="#" onClick={() => setShowRates(true)}>Rates</a>
        <a href="#" onClick={() => setShowTech(true)}>Tech</a>
        <a href="#" onClick={() => setShowContact(true)}>Contact</a>

        </div>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

      {/*Sidebar*/}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ×
        </button>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {/*Camera*/}
      <Image src={`/SONYFX3.PNG`}  
      alt="Camera Icon" 
      className="camera-icon" 
      onClick={() => setShowTech(true)} 
      style={{ cursor: "pointer" }}
      />
      {/*Sticker*/}
      <Image 
      src={`/Sticker.PNG`} 
      alt="Sticker Icon" 
      className="sticker-icon" 
      onClick={() => setShowTech(true)} 
      style={{ cursor: "pointer" }}
      />


      {/*Meet the photographer*/}
        <div className="intro-polaroid-wrapper">
        <div className="polaroid intro-polaroid">
            <Link href="/Bio">
            <Image src={introPolaroid.image} alt={introPolaroid.caption} width={300} height={400} />
            </Link>
            <Image src={introPolaroid.image} alt={introPolaroid.caption} width={300} height={400} />
        </div>
        </div>  

      {/*Cassette*/}
      <a href="https://www.youtube.com/@christelle376" target="_blank" rel="noopener noreferrer">
      <Image src={`/Cassette.PNG`} alt="Cassette Icon" className="cassette-icon" />
      </a>


      {/* Gallery */}
      <div className="gallery-wrapper">
      <div className="gallery-inner">
        <div className="polaroid-gallery">
          {polaroids.map((p, i) => (
            <Link
              key={i}
              href={`/${p.caption.toLowerCase().replace(/\s+/g, '')}`} 
            >
              <div className={`polaroid polaroid-${i}`}>
              <Image src={p.images[indices[i]]} alt={p.caption} width={300} height={400} />
                <p className="caption">{p.caption}</p>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>


      {/*rates and contact pop ups*/}
      {/* Rates Popup */}
      {showRates && (
        <div className="popup-overlay" onClick={() => setShowRates(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Rates</h2>
            <ul>
              <li>Brokie</li>
              <li>Glamorous</li>
              <li>Lavish package</li>
            </ul>
            <button className="close-button" onClick={() => setShowRates(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContact && (
        <div className="popup-overlay" onClick={() => setShowContact(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact</h2>
            <p>Please email me for any questions or bookings at:</p>
            <p>christellepb1@gmail.com</p>
            <p>Or check out my film/photography instagram page:</p>
            <p>@chrissypfilms</p>
            <button className="close-button" onClick={() => setShowContact(false)}>Close</button>
          </div>
        </div>
      )}

      {/*tech popup*/}
      {showTech && (
        <div className="popup-overlay" onClick={() => setShowTech(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Technology Used</h2>
            <p>📷Cameras📷</p>
            <ul>
              <li>Sony FX3 Full-Frame Cinema Line Camera</li>
              <li>Sony ZV-E10</li>
              <p>📸Lenses📸</p>
              <li>Sony E 55-210mm f/4.5 OSS</li>
              <li>Sony 16-50mm f/3.5-5.6 OSS</li>
              <li>Viltrox AF 16mm F1.8 Full Frame Autofocus</li>
              <li>Anamorphic Helios 44-2 2/58mm</li>
              <p>💡Lighting💡</p>
              <li>SmallRig RC 120B 120W Bi-Color Cob Video Light</li>
              <p>💻Editing Softwares💻</p>
              <li>Adobe Lightroom & Photoshop</li>
              <li>Premier Pro Editing</li>
            </ul>
            <button className="close-button" onClick={() => setShowTech(false)}>Close</button>
          </div>
        </div>
      )}

    </main>
  );
}
