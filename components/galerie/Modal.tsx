import { Dialog } from "@headlessui/react"; // Importation du composant Dialog pour afficher des modals accessibles
import { motion } from "framer-motion"; // Importation de motion pour les animations
import { useRouter } from "next/router"; // Importation du hook useRouter pour la navigation
import { useRef, useState } from "react"; // Importation des hooks useRef et useState de React
import useKeypress from "react-use-keypress"; // Importation du hook useKeypress pour détecter les pressions sur les touches
import type { ImageProps } from "../../utils/types"; // Importation du type ImageProps pour définir les propriétés des images
import SharedModal from "./SharedModal"; // Importation du composant SharedModal pour afficher les détails de l'image

/**
 * Composant Modal pour afficher une image en plein écran avec des contrôles de navigation.
 * 
 * @param images - Tableau des images à afficher dans le modal
 * @param onClose - Fonction de rappel à appeler lors de la fermeture du modal
 * @returns Le composant Modal
 */
export default function Modal({
  images,
  onClose,
}: {
  images: ImageProps[];
  onClose?: () => void;
}) {
  let overlayRef = useRef(null); // Référence pour l'overlay du modal
  const router = useRouter(); // Hook pour la navigation

  const { photoId } = router.query; // Obtient l'ID de la photo depuis les paramètres de la route
  let index = Number(photoId); // Convertit l'ID de la photo en nombre

  const [direction, setDirection] = useState(0); // État pour la direction de la transition
  const [curIndex, setCurIndex] = useState(index); // État pour l'index actuel de la photo

  /**
   * Fonction pour fermer le modal et rediriger vers la page d'accueil.
   * Appelle également la fonction onClose si elle est définie.
   */
  function handleClose() {
    router.push("/", undefined, { shallow: true }); // Redirige vers la page d'accueil sans recharger la page
    onClose && onClose(); // Appelle la fonction onClose si elle est définie
  }

  /**
   * Fonction pour changer l'ID de la photo actuelle et mettre à jour la direction de la transition.
   * 
   * @param newVal - Nouvel ID de la photo
   */
  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1); // Définit la direction de la transition à droite
    } else {
      setDirection(-1); // Définit la direction de la transition à gauche
    }
    setCurIndex(newVal); // Met à jour l'index actuel de la photo
    router.push(
      {
        query: { photoId: newVal }, // Met à jour la requête de la route avec le nouvel ID de photo
      },
      `/p/${newVal}`, // Met à jour l'URL avec le nouvel ID de photo
      { shallow: true } // Navigation "shallow" pour éviter le rechargement de la page
    );
  }

  // Détecte la pression sur la touche fléchée droite pour passer à la photo suivante
  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1); // Change l'ID de la photo à l'index suivant
    }
  });

  // Détecte la pression sur la touche fléchée gauche pour passer à la photo précédente
  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1); // Change l'ID de la photo à l'index précédent
    }
  });

  return (
    <Dialog
      open={true}
      onClose={handleClose}
      initialFocus={overlayRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      {/* Overlay */}
      <motion.div
        ref={overlayRef}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }} // Opacité initiale de l'overlay
        animate={{ opacity: 1 }} // Opacité animée de l'overlay
      />
      {/* Contenu du modal */}
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true} // Active la navigation dans le modal
      />
    </Dialog>
  );
}
