import Image from "next/image"; // Importation du composant Image de Next.js pour l'affichage des images
import { useRouter } from "next/router"; // Importation du hook useRouter de Next.js pour manipuler la navigation
import type { ImageProps } from "../../utils/types"; // Importation du type ImageProps pour définir les propriétés des images
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto"; // Importation du hook personnalisé pour accéder à l'état global de la dernière photo vue
import SharedModal from "./SharedModal"; // Importation du composant SharedModal pour afficher les détails de la photo
import useKeypress from "react-use-keypress"; // Importation du hook useKeypress pour détecter les pressions sur les touches du clavier

/**
 * Composant Carousel affichant une photo en plein écran avec un fond flou et un modal de partage.
 * Permet de fermer le modal et d'utiliser la touche 'Escape' pour fermer le modal.
 * 
 * @param index - Index de la photo actuelle dans la galerie
 * @param currentPhoto - Objet contenant les détails de la photo actuelle
 * @returns Le composant Carousel
 */
export default function Carousel({
  index,
  currentPhoto,
}: {
  index: number;
  currentPhoto: ImageProps;
}) {
  const router = useRouter(); // Création du hook de navigation pour manipuler la navigation de l'application
  const [, setLastViewedPhoto] = useLastViewedPhoto(); // Utilisation du hook personnalisé pour accéder et mettre à jour la photo récemment vue

  /**
   * Fonction pour fermer le modal et mettre à jour l'état global avec l'ID de la photo actuelle.
   * Redirige vers la page d'accueil en utilisant la navigation sans rechargement de la page.
   */
  function closeModal() {
    setLastViewedPhoto(currentPhoto.id); // Met à jour l'état global avec l'ID de la photo actuelle
    router.push("/", undefined, { shallow: true }); // Redirige vers la page d'accueil sans recharger la page
  }

  /**
   * Fonction pour changer l'ID de la photo actuelle (placeholder pour des fonctionnalités futures).
   * 
   * @param newVal - Nouvelle valeur pour l'ID de la photo
   * @returns La nouvelle valeur pour l'ID de la photo
   */
  function changePhotoId(newVal: number) {
    return newVal; // Retourne la nouvelle valeur (actuellement inutilisé)
  }

  // Détecte la pression sur la touche 'Escape' et ferme le modal
  useKeypress("Escape", () => {
    closeModal();
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Bouton pour fermer le modal */}
      <button
        className="absolute inset-0 z-30 cursor-default bg-black backdrop-blur-2xl"
        onClick={closeModal}
      >
        {/* Affichage de l'image floue de fond si disponible */}
        {currentPhoto.blurDataUrl && (
          <Image
            src={currentPhoto.blurDataUrl} // Source de l'image floue de fond
            className="pointer-events-none h-full w-full"
            alt="blurred background" // Texte alternatif pour l'image floue de fond
            fill // Remplit l'espace du conteneur
            priority={true} // Indique que l'image doit être chargée en priorité
          />
        )}
      </button>
      {/* Affichage du modal partagé avec les détails de la photo */}
      <SharedModal
        index={index}
        changePhotoId={changePhotoId}
        currentPhoto={currentPhoto}
        closeModal={closeModal}
        navigation={false} // Désactive la navigation dans le modal
      />
    </div>
  );
}
