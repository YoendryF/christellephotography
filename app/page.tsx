'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRates, setShowRates] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showTech, setShowTech] = useState(false);

  // Polaroid data
  const introPolaroid = 
    {
        caption: "Meet The Photographer",
        image: "/Christelle.jpg"
    }

  const polaroids = [
    {
      caption: "Headshots",
      images: ["/Headshots/Headshot1.jpg","/Headshots/Headshot2.jpeg","/Headshots/Headshot3.jpg","/Headshots/Headshot4.jpg","/Headshots/Headshot5.jpeg","/Headshots/Headshot6.jpeg","/Headshots/Headshot7.jpeg","/Headshots/Headshot8.jpeg","/Headshots/Headshot9.jpeg"]
    },
    {
      caption: "Grad Pics",
      images: ["/Grad/Grad1.jpg","/Grad/Grad2.jpg","/Grad/Grad3.jpg","/Grad/Grad4.jpeg","Grad/Grad5.jpeg","Grad/Grad6.jpg","Grad/Grad7.jpg","Grad/Grad8.jpeg","Grad/Grad9.jpeg","Grad/Grad10.jpeg","Grad/Grad11.jpeg"],
    },
    {
      caption: "Natural Photoshoots",
      images: ["/Nature/Nature1.jpg", "/Nature/Nature2.jpeg", "/Nature/Nature3.jpg", "/Nature/Nature4.jpg","/Nature/Nature5.jpg","/Nature/Nature6.jpeg","/Nature/Nature7.jpg","/Nature/Nature8.jpg","/Nature/Nature9.jpg","/Nature/Nature10.jpg","/Nature/Nature11.jpg","/Nature/Nature12.jpg","/Nature/Nature13.jpeg","/Nature/Nature14.jpeg","/Nature/Nature16.jpeg","/Nature/Nature17.jpg","/Nature/Nature18.jpg","/Nature/Nature19.jpg"]
    },
    {
      caption: "Portraits",
      images: ["/Portraits/Portrait1.jpg", "/Portraits/Portrait2.jpg", "/Portraits/Portrait3.jpg","/Portraits/Portrait4.jpg","/Portraits/Portrait5.jpg","Portraits/Portrait7.jpg","Portraits/Portrait8.jpg","Portraits/Portrait9.jpg","Portraits/Portrait10.jpeg","Portraits/Portrait11.jpeg","Portraits/Portrait12.jpg","Portraits/Portrait13.jpg","Portraits/Portrait14.jpg","Portraits/Portrait15.jpg","Portraits/Portrait16.jpg","Portraits/Portrait17.jpg"]
    },
    {
      caption: "Themed Photoshoots",
      images: ["/Themed/Themed1.jpg", "/Themed/Themed2.jpg", "/Themed/Themed3.jpeg","/Themed/Themed4.jpg","/Themed/Themed5.jpg"]
    }
  ];

  // Track current index of each slideshow
  const [indices, setIndices] = useState(Array(polaroids.length).fill(0));

  // Auto-cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices(prev =>
        prev.map((idx, i) => (idx + 1) % polaroids[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* Navbar */}
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

      {/* Sidebar */}
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
     
      <img 
      src="/SONYFX3.png" 
      alt="Camera Icon" 
      className="camera-icon" 
      onClick={() => setShowTech(true)} 
      style={{ cursor: "pointer" }}
      />
      {/*Sticker*/}
      <img 
      src="/Sticker.png" 
      alt="Sticker Icon" 
      className="sticker-icon" 
      onClick={() => setShowTech(true)} 
      style={{ cursor: "pointer" }}
      />


      {/* Meet the photographer */}
        <div className="intro-polaroid-wrapper">
        <div className="polaroid intro-polaroid">
            <Link href="/Bio">
            <img src={introPolaroid.image} alt={introPolaroid.caption} />
            </Link>
            <p className="caption">{introPolaroid.caption}</p>
        </div>
        </div>  

      {/*Cassette*/}
      <a href="https://www.youtube.com/@christelle376" target="_blank" rel="noopener noreferrer">
        <img src="/Cassette.png" alt="Cassette Icon" className="cassette-icon" />
      </a>


      {/* Gallery */}
      <div className="gallery-wrapper">
      <div className="gallery-inner">
        <div className="polaroid-gallery">
          {polaroids.map((p, i) => (
            <Link
              key={i}
              href={`/${p.caption.toLowerCase().replace(/\s+/g, '')}`} // creates URLs like "/headshots"
            >
              <div className={`polaroid polaroid-${i}`}>
                <img src={p.images[indices[i]]} alt={p.caption} />
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
