import Image from 'next/image';
export default function PortraitsPage() {
    const portraits = [
      "Portraits/Portrait1.jpg", "Portraits/Portrait2.jpg", "Portraits/Portrait3.jpg", "Portraits/Portrait4.jpg", "Portraits/Portrait5.jpg", "Portraits/Portrait6.jpg", "Portraits/Portrait7.jpg", "Portraits/Portrait8.jpg", "Portraits/Portrait9.jpg", "Portraits/Portrait10.jpeg", "Portraits/Portrait11.jpeg","Portraits/Portrait12.jpg","Portraits/Portrait13.jpg","Portraits/Portrait14.jpg","Portraits/Portrait15.jpg","Portraits/Portrait16.jpg","Portraits/Portrait17.jpg"
    ];
  
    return (
      <main>
        <h1>Portraits</h1>
        <div className="photo-grid">
          {portraits.map((src, idx) => (
            <Image key={idx} src={src} alt={`Portrait ${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  