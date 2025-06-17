import React from 'react';

export default function BioPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'Parisienne, cursive', fontSize: '2.5rem', color: '#5D4A66', marginBottom: '1.5rem' }}>
        Meet the Photographer
      </h1>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <img 
          src="/Christelle.JPG" 
          alt="Christelle" 
          style={{ width: '300px', borderRadius: '12px', flexShrink: 0 }} 
        />

        <p style={{ lineHeight: '1.6', fontSize: '1.1rem', maxWidth: '500px', fontFamily: 'Dancing Script, cursive' }}>
          Hi, I'm Christelle! I'm a photographer who's passionate about capturing genuine moments and loves turning them into memories. 
          <br /><br />
          In my spare time, I love filming cinematic shots with friends. Natural lighting and telling stories through my lenses are what draw me. 
          <br /><br />
          Thanks for checking out my page—I'm excited to share my work with you! 
          Feel free to contact me if you're in the Orlando area. 
        </p>
      </div>
    </main>
  );
}
