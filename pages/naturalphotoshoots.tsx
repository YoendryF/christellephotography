import Image from 'next/image';
export default function NaturePhotosPage() {
    const naturePhotos = [
      "../Nature/Nature1.JPG", "../Nature/Nature2.JPEG", "../Nature/Nature3.JPG", "../Nature/Nature4.JPG","../Nature/Nature5.JPG","../Nature/Nature6.JPEG","../Nature/Nature7.JPG","../Nature/Nature8.JPG","../Nature/Nature9.JPG","../Nature/Nature10.JPG","../Nature/Nature11.JPG","../Nature/Nature12.JPG","../Nature/Nature13.JPEG","../Nature/Nature14.JPEG","../Nature/Nature15.JPG","../Nature/Nature16.JPEG","../Nature/Nature17.JPG","../Nature/Nature18.JPG","../Nature/Nature19.JPG","../Nature/Nature20.JPEG","../Nature/Nature21.JPG","../Nature/Nature22.JPG","../Nature/Nature23.JPG","../Nature/Nature24.JPG","../Nature/Nature25.JPG","../Nature/Nature26.JPG","../Nature/Nature27.JPG","../Nature/Nature28.JPG","../Nature/Nature29.JPG","../Nature/Nature30.JPEG"
    ];
  
    return (
      <main>
        <h1>Nature Photoshoots</h1>
        <div className="photo-grid">
          {naturePhotos.map((src, idx) => (
            <div key={idx} className="polaroid">
            <Image key={idx} src={src} alt={`Nature${idx + 1}`} />
            </div>
          ))}
        </div>
      </main>
    );
  }
  
