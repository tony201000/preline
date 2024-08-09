import { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, functions } from '../firebase'; // Assurez-vous que le chemin est correct
import { httpsCallable } from 'firebase/functions';

export default function UploadForm() {
  const [image, setImage] = useState<File | null>(null);
  const [url, setUrl] = useState<string>('');

  const handleUpload = async () => {
    if (image) {
      const generateUploadUrl = httpsCallable(functions, 'generateUploadUrl');
      
      try {
        const response = await generateUploadUrl({ filename: image.name });
        const downloadURL = (response.data as { downloadURL: string }).downloadURL;
        setUrl(downloadURL);
        
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        
      } catch (error) {
        console.error("Erreur lors de l'upload:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files![0])}
        className="mb-4"
      />
      <button 
        onClick={handleUpload} 
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
      {url && <img src={url} alt="Uploaded" className="mt-4 w-64 h-auto" />}
    </div>
  );
}
