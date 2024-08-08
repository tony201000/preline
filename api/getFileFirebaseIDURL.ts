// /api/images.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Récupère les images depuis Firestore.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const imagesCollection = collection(db, 'carousel'); // Remplacez 'carousel' par le nom de votre collection
    const snapshot = await getDocs(imagesCollection);

    // Extraire les URLs des images
    const images = snapshot.docs.map(doc => ({
      id: doc.id, // Inclure l'ID du document pour une meilleure gestion
      url: doc.data().url // Assurez-vous que l'URL de l'image est stockée sous 'url'
    }));

    res.status(200).json(images);
  } catch (error) {
    console.error('Erreur lors de la récupération des images:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des images' });
  }
}
