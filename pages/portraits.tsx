import Image from 'next/image';
export default function PortraitsPage() {
    const portraits = [
      "../Portraits/Portrait1.JPG", "../Portraits/Portrait2.JPG", "../Portraits/Portrait3.JPG", "../Portraits/Portrait4.JPG", "../Portraits/Portrait5.JPG", "../Portraits/Portrait6.JPG", "../Portraits/Portrait7.JPG", "../Portraits/Portrait8.JPG", "../Portraits/Portrait9.JPG", "../Portraits/Portrait10.JPEG", "../Portraits/Portrait11.JPEG","../Portraits/Portrait12.JPG","../Portraits/Portrait13.JPG","../Portraits/Portrait14.JPG","../Portraits/Portrait15.JPG","../Portraits/Portrait16.JPG","../Portraits/Portrait17.JPG"
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
  
