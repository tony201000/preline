// /components/FullscreenImage.tsx
import React from 'react';

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

const FullscreenImage: React.FC<FullscreenImageProps> = ({ src, onClose, onZoomIn, onZoomOut, zoomLevel }) => {
  return (
    <div className="fullscreen-container">
      <button className="close-button" onClick={onClose}>✖</button>
      <div className="zoom-controls">
        <button onClick={onZoomOut}>-</button>
        <button onClick={onZoomIn}>+</button>
      </div>
      <img
        src={src}
        alt="Fullscreen"
        className="fullscreen-image"
        style={{ transform: `scale(${zoomLevel})` }}
      />
    </div>
  );
};

export default FullscreenImage;