import React from 'react';
import SectionHeading from '../components/SectionHeading';

const galleryImages = [
  'https://images.unsplash.com/photo-1581094596395-855799191410?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596429593411-a8f898a38356?w=500&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=UnifrakturCook:wght@700&family=Great+Vibes&display=swap');

          .font-cinzel { font-family: 'Cinzel', serif; }
          .font-unifraktur { font-family: 'UnifrakturCook', cursive; }
          .font-great-vibes { font-family: 'Great Vibes', cursive; }
        `}
      </style>
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-unifraktur text-center text-5xl md:text-6xl tracking-tight mb-8">
        Gallery
      </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden">
              <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-64 object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Gallery;
