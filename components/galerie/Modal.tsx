// Importation des modules nécessaires et des composants
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import useKeypress from "react-use-keypress";
import type { ImageProps } from "../../utils/types";
import SharedModal from "./SharedModal";

/**
 * Composant Modal pour afficher une image en plein écran avec des contrôles de navigation.
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
  // Référence pour l'overlay du modal
  let overlayRef = useRef(null);
  // Hook pour la navigation
  const router = useRouter();

  // Obtient l'ID de la photo depuis les paramètres de la route
  const { photoId } = router.query;
  let index = Number(photoId);

  // État pour la direction de la transition
  const [direction, setDirection] = useState(0);
  // État pour l'index actuel de la photo
  const [curIndex, setCurIndex] = useState(index);

  /**
   * Fonction pour fermer le modal et rediriger vers la page d'accueil.
   * Appelle également la fonction onClose si elle est définie.
   */
  function handleClose() {
    router.push("/", undefined, { shallow: true });
    onClose && onClose();
  }

  /**
   * Fonction pour changer l'ID de la photo actuelle et mettre à jour la direction de la transition.
   * @param newVal - Nouvel ID de la photo
   */
  function changePhotoId(newVal: number) {
    setDirection(newVal > index ? 1 : -1);
    setCurIndex(newVal);
    router.push(
      {
        query: { photoId: newVal },
      },
      `/p/${newVal}`,
      { shallow: true }
    );
  }

  // Détecte la pression sur la touche fléchée droite pour passer à la photo suivante
  useKeypress("ArrowRight", () => {
    if (index + 1 < images.length) {
      changePhotoId(index + 1);
    }
  });

  // Détecte la pression sur la touche fléchée gauche pour passer à la photo précédente
  useKeypress("ArrowLeft", () => {
    if (index > 0) {
      changePhotoId(index - 1);
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      {/* Contenu du modal */}
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
