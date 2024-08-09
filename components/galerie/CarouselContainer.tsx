// /app/carousel/CarouselContainer.tsx
"use client";
import React from "react";

interface CarouselContainerProps {
  onTouchStart: (e: React.TouchEvent) => void;
  children: React.ReactNode;
}

/**
 * Composant conteneur pour le carrousel.
 */
const CarouselContainer: React.FC<CarouselContainerProps> = ({
  onTouchStart,
  children,
}) => {
  return (
    <div className="carousel-container" onTouchStart={onTouchStart}>
      {children}
    </div>
  );
};

export default CarouselContainer;
