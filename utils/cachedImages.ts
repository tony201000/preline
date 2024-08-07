import { v2 as cloudinary } from 'cloudinary'; // Importation de la configuration Cloudinary depuis le module 'cloudinary'

// ...

let cachedResults: any; // Déclaration d'une variable pour stocker les résultats en cache

/**
 * Fonction asynchrone pour obtenir les résultats de Cloudinary.
 * Si les résultats sont déjà en cache, retourne le cache.
 * Sinon, effectue une requête vers Cloudinary pour récupérer les résultats.
 */
export default async function getResults(): Promise<any> {
  // Vérifie si les résultats sont déjà en cache
  if (!cachedResults) {
    // Si non, effectue une requête vers Cloudinary pour récupérer les ressources
    const fetchedResults = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`) // Expression de recherche pour récupérer les fichiers du dossier spécifié
      .sort_by("public_id", "desc") // Trie les résultats par ID public en ordre décroissant
      .max_results(400) // Limite le nombre de résultats à 400
      .execute(); // Exécute la requête de recherche

    // Stocke les résultats récupérés dans le cache pour les futures requêtes
    cachedResults = fetchedResults;
  }

  // Retourne les résultats (soit depuis le cache, soit fraîchement récupérés)
  return cachedResults;
}
