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
        image: "/MTP.JPEG"
    }

  const polaroids = [
    {
      caption: "Headshots",
      images: ["/Headshots/Headshot1.JPG","/Headshots/Headshot2.JPEG","/Headshots/Headshot3.JPG","/Headshots/Headshot4.JPG","/Headshots/Headshot5.JPEG","/Headshots/Headshot6.JPEG","/Headshots/Headshot7.JPEG","/Headshots/Headshot8.JPEG","/Headshots/Headshot9.JPEG","/Headshots/Headshot10.JPEG","/Headshots/Headshot11.JPEG","/Headshots/Headshot12.JPEG"]
    },
    {
      caption: "Grad Pics",
      images: ["/Grad/Grad1.JPG","/Grad/Grad2.JPG","/Grad/Grad3.JPG","/Grad/Grad4.JPEG","/Grad/Grad5.JPEG","/Grad/Grad6.JPG","/Grad/Grad7.JPG","/Grad/Grad8.JPEG","/Grad/Grad9.JPEG","/Grad/Grad10.JPEG","/Grad/Grad11.JPEG","/Grad/Grad12.JPEG","/Grad/Grad13.JPG","/Grad/Grad14.JPG","/Grad/Grad15.JPG","/Grad/Grad16.JPG","/Grad/Grad17.JPG","/Grad/Grad18.JPG"],
    },
    {
      caption: "Natural Photoshoots",
      images: ["/Nature/Nature1.JPG", "/Nature/Nature2.JPEG", "/Nature/Nature3.JPG", "/Nature/Nature4.JPG","/Nature/Nature5.JPG","/Nature/Nature6.JPEG","/Nature/Nature7.JPG","/Nature/Nature8.JPG","/Nature/Nature9.JPG","/Nature/Nature10.JPG","/Nature/Nature11.JPG","/Nature/Nature12.JPG","/Nature/Nature13.JPEG","/Nature/Nature14.JPEG","/Nature/Nature16.JPEG","/Nature/Nature17.JPG","/Nature/Nature18.JPG","/Nature/Nature19.JPG","/Nature/Nature20.JPEG","/Nature/Nature21.JPG","/Nature/Nature22.JPG","/Nature/Nature23.JPG","/Nature/Nature24.JPG","/Nature/Nature25.JPG","/Nature/Nature26.JPG","/Nature/Nature27.JPG","/Nature/Nature28.JPG","/Nature/Nature29.JPG","/Nature/Nature30.JPEG"]
    },
    {
      caption: "Portraits",
      images: ["/Portraits/Portrait1.JPG", "/Portraits/Portrait2.JPG", "/Portraits/Portrait3.JPG","/Portraits/Portrait4.JPG","/Portraits/Portrait5.JPG","/Portraits/Portrait7.JPG","/Portraits/Portrait8.JPG","/Portraits/Portrait9.JPG","/Portraits/Portrait10.JPEG","/Portraits/Portrait11.JPEG","/Portraits/Portrait12.JPG","/Portraits/Portrait13.JPG","/Portraits/Portrait14.JPG","/Portraits/Portrait15.JPG","/Portraits/Portrait16.JPG","/Portraits/Portrait17.JPG","/Portraits/Portrait18.JPG","/Portraits/Portrait19.JPG","/Portraits/Portrait20.JPG","/Portraits/Portrait21.JPG","/Portraits/Portrait22.JPEG","/Portraits/Portrait23.JPEG","/Portraits/Portrait24.JPG","/Portraits/Portrait25.JPG"]
    },
    {
      caption: "Themed Photoshoots",
      images: ["/Themed/Themed1.JPG", "/Themed/Themed2.JPG", "/Themed/Themed3.JPEG","/Themed/Themed4.JPG","/Themed/Themed5.JPG","/Themed/Themed6.JPEG","/Themed/Themed7.JPG","/Themed/Themed8.JPG"]
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
        <div className={`navbar-links ${isOpen ? "mobile-open" : ""}`}>
        <Link href="/portfolio">Portfolio</Link>
        <a href="#" onClick={() => setShowRates(true)}>Rates</a>
        <a href="#" onClick={() => setShowTech(true)}>Tech</a>
        <a href="#" onClick={() => setShowContact(true)}>Contact</a>

        </div>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>

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
          <p>Standard shoots range at around $80 an hour, but is susceptible to upcharges depending on shoot specifics and location</p>
          <p>Please contact me to discuss price and booking details</p>
           <div className="popup-buttons">
            <button
              className="contact-button"
              onClick={() => {
                setShowRates(false);
                setShowContact(true);
              }}
            >
              Contact Me
            </button>
            <button className="close-button" onClick={() => setShowRates(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Contact Popup */}
      {showContact && (
        <div className="popup-overlay" onClick={() => setShowContact(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Contact</h2>
            <p>Please email me for any questions or bookings at:</p>
            <p className="custom-font">christellepb1@gmail.com</p>
            <p>Or check out my film/photography instagram page:</p>
            <p className="custom-font">@chrissypfilms</p>
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
              <li className="custom-font">Sony FX3 Full-Frame Cinema Line Camera</li>
              <li className="custom-font">Sony ZV-E10</li>
              <p>📸Lenses📸</p>
              <li className="custom-font">Sony E 55-210mm f/4.5 OSS</li>
              <li className="custom-font">Sony 16-50mm f/3.5-5.6 OSS</li>
              <li className="custom-font">Viltrox AF 16mm F1.8 Full Frame Autofocus</li>
              <li className="custom-font">Anamorphic Helios 44-2 2/58mm</li>
              <p>💡Lighting💡</p>
              <li className="custom-font">SmallRig RC 120B 120W Bi-Color Cob Video Light</li>
              <p>💻Editing Softwares💻</p>
              <li className="custom-font">Adobe Lightroom & Photoshop</li>
              <li className="custom-font">Premier Pro Editing</li>
            </ul>
            <button className="close-button" onClick={() => setShowTech(false)}>Close</button>
          </div>
        </div>
      )}

    </main>
  );
}
