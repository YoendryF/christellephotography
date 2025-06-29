import Image from 'next/image';
export default function NaturePhotosPage() {
    const naturePhotos = [
      "../Nature/Nature1.JPG", "../Nature/Nature2.JPEG", "../Nature/Nature3.JPG", "../Nature/Nature4.JPG","../Nature/Nature5.JPG","../Nature/Nature6.JPEG","../Nature/Nature7.JPG","../Nature/Nature8.JPG","../Nature/Nature9.JPG","../Nature/Nature10.JPG","../Nature/Nature11.JPG","../Nature/Nature12.JPG","../Nature/Nature13.JPEG","../Nature/Nature14.JPEG","../Nature/Nature15.JPG","../Nature/Nature16.JPEG","../Nature/Nature17.JPG","../Nature/Nature18.JPG","../Nature/Nature19.JPG"
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
  
