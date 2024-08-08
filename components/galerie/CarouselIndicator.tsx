// /components/CarouselIndicator.tsx
import React from 'react';

/**
 * Composant pour afficher les indicateurs de navigation du carrousel.
 */
interface CarouselIndicatorProps {
  currentIndex: number;
  totalImages: number;
}

const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({ currentIndex, totalImages }) => {
  return (
    <div className="carousel-indicators">
      {Array.from({ length: totalImages }).map((_, index) => (
        <span
          key={index}
          className={`indicator ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicator;