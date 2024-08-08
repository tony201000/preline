// /app/carousel/Carousel.tsx
'use client';
import React, { useEffect, useState } from 'react';
import FullscreenImage from './FullscreenImage';
import CarouselIndicator from './CarouselIndicator';
import CarouselImage from './CarouselImage';
import CarouselButtons from './CarouselButtons';
import CarouselContainer from './CarouselContainer';
import axios from 'axios';
import '@/styles/carousel.module.scss';

/**
 * Composant principal du carrousel d'images.
 */
const Carousel: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  // Récupération des images depuis l'API
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images');
        setImages(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des images:', error);
      }
    };
    fetchImages();
  }, []);

  // Navigation à gauche
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Navigation à droite
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Activation du mode plein écran
  const handleFullscreen = () => {
    setIsFullscreen(true);
  };

  // Désactivation du mode plein écran
  const closeFullscreen = () => {
    setIsFullscreen(false);
    setZoomLevel(1); // Réinitialiser le niveau de zoom
  };

  // Gestion du zoom
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 1)); // Ne pas descendre en dessous de 1
  };

  // Autoplay
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoplay) {
      timer = setInterval(() => {
        handleNext();
      }, 3000); // Change d'image toutes les 3 secondes
    }
    return () => clearInterval(timer);
  }, [autoplay, currentIndex]);

  // Gestion des gestes de glissement
  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStartX = e.touches[0].clientX;
    const handleTouchMove: EventListener = (e: Event) => {
      const touchEndX = (e as TouchEvent).touches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        handleNext();
        document.removeEventListener('touchmove', handleTouchMove);
      } else if (touchEndX - touchStartX > 50) {
        handlePrev();
        document.removeEventListener('touchmove', handleTouchMove);
      }
    };
    document.addEventListener('touchmove', handleTouchMove);
  };

  return (
    <CarouselContainer onTouchStart={handleTouchStart}>
      <div className="carousel">
        <CarouselButtons onPrev={handlePrev} onNext={handleNext} />
        <CarouselImage
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          onClick={handleFullscreen}
        />
      </div>
      <CarouselIndicator currentIndex={currentIndex} totalImages={images.length} />
      {isFullscreen && (
        <FullscreenImage
          src={images[currentIndex]}
          onClose={closeFullscreen}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          zoomLevel={zoomLevel}
        />
      )}
    </CarouselContainer>
  );
};

export default Carousel;