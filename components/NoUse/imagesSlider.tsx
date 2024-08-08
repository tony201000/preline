// components/ImageSlider.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import 'flickity-fullscreen/fullscreen.css';
import '../../styles/imagesSlider.module.scss';

interface ImageSliderProps {
  images: string[];
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const flickityRef = useRef<Flickity | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (galleryRef.current) {
      flickityRef.current = new Flickity(galleryRef.current, {
        wrapAround: true,
        fullscreen: true,
        lazyLoad: 1,
        fade: true,
        dragThreshold: 10,
        setGallerySize: false,
      });

      if (flickityRef.current) {
        // Rafraîchir Flickity après que les images sont chargées
        flickityRef.current.on('lazyLoad', () => {
          flickityRef.current?.resize();
        });
      }

      return () => {
        flickityRef.current?.destroy();
      };
    }
  }, []);

  return (
    <div className="main-gallery" ref={galleryRef}>
      {images.map((src, index) => (
        <div className="gallery-cell" key={index}>
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
