import React, { useState } from 'react';
import './index.css';

const images = [
  'mosaico_01.jpg',
  'mosaico_02.jpg',
  'mosaico_03.jpg',
  'mosaico_04.jpg',
  'mosaico_05.jpg',
  'mosaico_06.jpg',
  'mosaico_07.jpg',
  'mosaico_08.jpg',
  'mosaico_09.jpg',
  'mosaico_10.jpg',
  'mosaico_11.jpg',
  'mosaico_12.jpg',
  'mosaico_13.jpg',
  'mosaico_14.jpg',
  'mosaico_15.jpg'
];

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const openLightbox = (img) => {
    setActiveImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <div className="container">
      <header>
        <img src="hero-fachada-picacho-web.jpg" alt="El Picacho" className="hero" />
        <h1>El Picacho</h1>
        <p>Un espacio botánico, histórico y cultural en Tarija, Bolivia.</p>
      </header>
      <main>
        <div className="mosaico-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Mosaico ${index + 1}`}
              onClick={() => openLightbox(img)}
              className="mosaico-image"
            />
          ))}
        </div>
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={activeImage} alt="Ampliado" className="lightbox-image" />
          </div>
        )}
      </main>
    </div>
  );
}
