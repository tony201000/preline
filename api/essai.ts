"use client"; // Nécessaire si vous utilisez ce composant comme Client Component

import { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";


const ImageComponent = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const imageRef = ref(storage, "path/to/your/image.jpg");
      try {
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image :", error);
      }
    };

    fetchImage();
   []); };

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt="Firebase Image" />
      ) : (
        <p>Chargement de l'image...</p>
      )}
    </div>
  );
};

export default ImageComponent;
