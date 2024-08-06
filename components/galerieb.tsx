// app/components/galerieb.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ProtectedRoute from './protectedRoute';

const images: string[] = [
  'https://zupimages.net/up/24/31/v3l9.jpg',
  'https://zupimages.net/up/24/31/bkl1.jpg',
  'https://zupimages.net/up/24/31/zxhk.jpg',
  'https://zupimages.net/up/24/31/wja5.jpg',
  'https://zupimages.net/up/24/31/uf7g.jpg',
  'https://zupimages.net/up/24/31/dwn1.jpg',
  'https://zupimages.net/up/24/31/o3ld.jpg',
  // Ajoutez d’autres URL d’images ici
];

const Galerieb: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openFullscreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="p-4 text-4xl"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden w-full">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <div key={index} className="w-1/3 h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" onClick={() => openFullscreen(currentIndex + index)}>
              <Image
                src={image}
                alt={`Image ${currentIndex + index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
          {currentIndex + 3 > images.length && images.slice(0, (currentIndex + 3) % images.length).map((image, index) => (
            <div key={images.length + index} className="w-1/3 h-auto cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" onClick={() => openFullscreen(index)}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-4 text-4xl"
        >
          &gt;
        </button>
      </div>

      {/* Image en plein écran */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            onClick={closeFullscreen}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            width={1000}
            height={1000}
            className="h-auto max-h-full max-w-full object-contain"
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow text-4xl"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow text-4xl"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Galerieb;
