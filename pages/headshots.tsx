import Image from 'next/image';
export default function HeadshotsPage() {
    const headshots = [
      "/Headshots/Headshot1.jpg", "/Headshots/Headshot2.jpeg", "/Headshots/Headshot3.jpg", "/Headshots/Headshot4.jpg", "/Headshots/Headshot5.jpeg", "/Headshots/Headshot6.jpeg","/Headshots/Headshot7.jpeg","/Headshots/Headshot8.jpeg","/Headshots/Headshot9.jpeg"
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
  