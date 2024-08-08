// /app/carousel/CarouselButtons.tsx
'use client';
import React from 'react';

interface CarouselButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

/**
 * Composant pour les boutons de navigation du carrousel.
 */
const CarouselButtons: React.FC<CarouselButtonsProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <button className="carousel-button left" onClick={onPrev}>❮</button>
      <button className="carousel-button right" onClick={onNext}>❯</button>
    </>
  );
};

export default CarouselButtons;