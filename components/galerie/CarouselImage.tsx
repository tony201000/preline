// /app/carousel/CarouselImage.tsx
'use client';
import React from 'react';

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
    <img
      src={src}
      alt={alt}
      className="carousel-image"
      onClick={onClick}
    />
  );
};

export default CarouselImage;