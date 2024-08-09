'use client';
import React from 'react';
import Image from 'next/image'; // Import du composant Image de Next.js

interface CarouselImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

/**
 * Composant pour afficher l'image du carrousel.
 */
const CarouselImage: React.FC<CarouselImageProps> = ({ src, alt, onClick }) => {
  return (
    <div className="carousel-image-container" onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        layout="responsive" // Assure que l'image est responsive
        width={800} // Largeur par défaut, peut être ajustée
        height={600} // Hauteur par défaut, peut être ajustée
        className="carousel-image"
      />
    </div>
  );
};

export default CarouselImage;
