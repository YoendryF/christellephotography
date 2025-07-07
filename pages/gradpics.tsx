import Image from 'next/image';
export default function GradPicsPage() {
    const grads = [
      "/Grad/Grad1.JPG", "/Grad/Grad2.JPG", "/Grad/Grad3.JPG", "/Grad/Grad4.JPEG", "/Grad/Grad5.JPEG", "/Grad/Grad6.JPG", "/Grad/Grad7.JPG","/Grad/Grad8.JPEG","/Grad/Grad9.JPEG","/Grad/Grad10.JPEG","/Grad/Grad11.JPEG","/Grad/Grad12.JPEG","/Grad/Grad13.JPG","/Grad/Grad14.JPG","/Grad/Grad15.JPG","/Grad/Grad16.JPG","/Grad/Grad17.JPG","/Grad/Grad18.JPG"
    ];
  
    return (
      <main>
        <h1>Graduation Pictures</h1>
        <div className="photo-grid">
          {grads.map((src, idx) => (
            <div key={idx} className="polaroid">
            <Image key={idx} src={src} alt={`Grad${idx + 1}`} />
            </div>
          ))}
        </div>
      </main>
    );
  }
  
