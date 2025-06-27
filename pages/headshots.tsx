import Image from 'next/image';
export default function HeadshotsPage() {
    const headshots = [
      "/Headshots/Headshot1.JPG", "/Headshots/Headshot2.JPEG", "/Headshots/Headshot3.JPG", "/Headshots/Headshot4.JPG", "/Headshots/Headshot5.JPEG", "/Headshots/Headshot6.JPEG","/Headshots/Headshot7.JPEG","/Headshots/Headshot8.JPEG","/Headshots/Headshot9.JPEG"
    ];
  
    return (
      <main>
        <h1>Headshots</h1>
        <div className="photo-grid">
          {headshots.map((src, idx) => (
            <Image key={idx} src={src} alt={`/Headshot${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  
