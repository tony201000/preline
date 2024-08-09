"use client";
import React from "react";
import Image from "next/image"; // Import du composant Image de Next.js

/**
 * Composant pour afficher l'image en plein écran.
 */
interface FullscreenImageProps {
  src: string;
  onClose: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  zoomLevel: number;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({
  src,
  onClose,
  onZoomIn,
  onZoomOut,
  zoomLevel,
}) => {
  return (
    <div className="fullscreen-container">
      <button className="close-button" onClick={onClose}>
        ✖
      </button>
      <div className="zoom-controls">
        <button onClick={onZoomOut}>-</button>
        <button onClick={onZoomIn}>+</button>
      </div>
      <div className="fullscreen-image-wrapper">
        <Image
          src={src}
          alt="Fullscreen"
          layout="fill" // Remplit le conteneur parent
          objectFit="contain" // Maintient l'image dans le conteneur sans déformation
          className="fullscreen-image"
          style={{ transform: `scale(${zoomLevel})` }}
        />
      </div>
    </div>
  );
};

export default FullscreenImage;
