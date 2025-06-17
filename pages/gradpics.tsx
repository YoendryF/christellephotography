import Image from 'next/image';
export default function GradPicsPage() {
    const grads = [
      "/Grad/Grad1.jpg", "/Grad/Grad2.jpg", "/Grad/Grad3.jpg", "/Grad/Grad4.jpeg", "/Grad/Grad5.jpeg", "/Grad/Grad6.jpg", "/Grad/Grad7.jpg","/Grad/Grad8.jpeg","Grad/Grad9.jpeg","Grad/Grad10.jpeg","Grad/Grad11.jpeg"
    ];
  
    return (
      <main>
        <h1>Graduation Pictures</h1>
        <div className="photo-grid">
          {grads.map((src, idx) => (
            <Image key={idx} src={src} alt={`Grad${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  