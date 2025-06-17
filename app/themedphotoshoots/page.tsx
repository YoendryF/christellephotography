export default function ThemedPhotoshootsPage() {
    const Themed = [
      "Themed/Themed1.jpg", "Themed/Themed2.jpg", "Themed/Themed3.jpeg", "Themed/Themed4.jpg", "Themed/Themed5.jpg"
    ]
    return (
      <main>
        <h1>Themed Photoshoots</h1>
        <div className="photo-grid">
          {Themed.map((src, idx) => (
            <img key={idx} src={src} alt={`Themed${idx + 1}`} />
          ))}
        </div>
      </main>
    );
  }
  