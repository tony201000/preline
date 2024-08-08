// /api/images.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Configuration de Firebase
const firebaseConfig = {
  // Ajoutez votre configuration Firebase ici
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Récupère les images depuis Firestore.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const imagesCollection = collection(db, 'images'); // Remplacez 'images' par le nom de votre collection
    const snapshot = await getDocs(imagesCollection);
    const images = snapshot.docs.map(doc => doc.data().url); // Assurez-vous que l'URL de l'image est stockée sous 'url'
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des images' });
  }
}