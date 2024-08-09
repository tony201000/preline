import { useState, ChangeEvent } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

export default function UploadForm() {
  // Définition du type de l'état pour accepter un objet File ou null
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Vérifie si les fichiers existent et prends le premier fichier
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      try {
        await uploadBytes(imageRef, image);
        const downloadURL = await getDownloadURL(imageRef);
        setUrl(downloadURL);
      } catch (error) {
        console.error("Erreur lors de l'upload:", error);
      }
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleImageChange} 
      />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
}
