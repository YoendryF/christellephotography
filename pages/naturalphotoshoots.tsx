import Image from 'next/image';
export default function NaturePhotosPage() {
    const naturePhotos = [
      "Nature/Nature1.jpg", "Nature/Nature2.jpeg", "Nature/Nature3.jpg", "Nature/Nature4.jpg","Nature/Nature5.jpg","Nature/Nature6.jpeg","Nature/Nature7.jpg","Nature/Nature8.jpg","Nature/Nature9.jpg","Nature/Nature10.jpg","Nature/Nature11.jpg","Nature/Nature12.jpg","Nature/Nature13.jpeg","Nature/Nature14.jpeg","Nature/Nature15.jpg","Nature/Nature16.jpeg","Nature/Nature17.jpg","Nature/Nature18.jpg","Nature/Nature19.jpg"
    ];
  
    return (
      <main>
        <h1>Nature Photoshoots</h1>
        <div className="photo-grid">
          {naturePhotos.map((src, idx) => (
            <Image key={idx} src={src} alt={`Nature${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  