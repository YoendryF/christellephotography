// pages/tech.jsx
'use client';
import React from 'react';

export default function TechPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontFamily: 'Parisienne, cursive', fontSize: '2.5rem', color: '#6A5D7B' }}>
        My Photography Gear
      </h1>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#444' }}>📷 Camera Body</h2>
        <ul>
          <li>Sony FX3 Full-Frame Cinema Line Camera</li>
          <li>Sony ZV-E10</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#444' }}>📸 Lenses</h2>
        <ul>
          <li>Sony E 55-210mm f/4.5 OSS</li>
          <li>Sony 16-50mm f/3.5-5.6 OSS</li>
          <li>Viltrox AF 16mm F1.8 Full Frame Autofocus</li>
          <li>Anamorphic Helios 44-2 2/58mm</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#444' }}>💡 Lighting & Accessories</h2>
        <ul>
          <li>SmallRig RC 120B 120W Bi-Color Cob Video Light</li>

        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ color: '#444' }}>💻 Editing Software</h2>
        <ul>
          <li>Adobe Lightroom</li>
          <li>Adobe Photoshop</li>
          <li>Premier Pro Editing</li>
        </ul>
      </section>

      <p style={{ marginTop: '3rem', color: '#666' }}>
        Want to know more? Feel free to <a href="#contact">contact me</a>!
      </p>
    </main>
  );
}
