import Image from 'next/image';
export default function ThemedPhotoshootsPage() {
    const Themed = [
      "../Themed/Themed1.JPG", "../Themed/Themed2.JPG", "../Themed/Themed3.JPEG", "../Themed/Themed4.JPG", "../Themed/Themed5.JPG", "../Themed/Themed6.JPEG"
    ]
    return (
      <main>
        <h1>Themed Photoshoots</h1>
        <div className="photo-grid">
          {Themed.map((src, idx) => (
            <Image key={idx} src={src} alt={`Themed${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  
