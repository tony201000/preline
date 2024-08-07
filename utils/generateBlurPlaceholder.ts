import imagemin from "imagemin"; // Importation de la bibliothèque imagemin pour la compression d'images
import imageminJpegtran from "imagemin-jpegtran"; // Importation du plugin imagemin pour compresser les images JPEG
import type { ImageProps } from "./types"; // Importation du type ImageProps depuis le fichier types.ts pour définir les propriétés de l'image

// Création d'une Map pour stocker les résultats en cache
// La clé est un objet ImageProps et la valeur est l'URL de l'image en base64
const cache = new Map<ImageProps, string>();

/**
 * Fonction asynchrone pour obtenir l'URL en base64 d'une image compressée.
 * Vérifie d'abord le cache pour éviter de traiter les images déjà traitées.
 * Si l'image n'est pas dans le cache, la télécharge, la compresse, puis la convertit en base64.
 * @param image - Objet ImageProps contenant les informations de l'image (public_id et format)
 * @returns L'URL en base64 de l'image compressée
 */
export default async function getBase64ImageUrl(
  image: ImageProps,
): Promise<string> {
  // Vérifie si l'URL en base64 de l'image est déjà dans le cache
  let url = cache.get(image);
  if (url) {
    return url; // Retourne l'URL depuis le cache si elle existe
  }

  // Télécharge l'image depuis Cloudinary en utilisant l'ID public et le format de l'image
  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`,
  );

  // Convertit la réponse en ArrayBuffer
  const buffer = await response.arrayBuffer();

  // Compresse l'image en utilisant imagemin et imagemin-jpegtran
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });

  // Convertit l'image compressée en base64
  url = `data:image/jpeg;base64,${Buffer.from(minified).toString("base64")}`;

  // Met en cache l'URL base64 pour une utilisation future
  cache.set(image, url);

  // Retourne l'URL base64 de l'image compressée
  return url;
}
