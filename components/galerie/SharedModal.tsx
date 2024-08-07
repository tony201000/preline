import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"; // Importation des icônes de Heroicons
import { AnimatePresence, motion, MotionConfig } from "framer-motion"; // Importation des outils pour les animations
import Image from "next/image"; // Importation du composant Image de Next.js
import { useState } from "react"; // Importation du hook useState de React
import { useSwipeable } from "react-swipeable"; // Importation du hook useSwipeable pour gérer les gestes tactiles
import { variants } from "../../utils/animationVariants"; // Importation des variantes d'animation
import downloadPhoto from "../../utils/downloadPhoto"; // Importation de la fonction pour télécharger les photos
import { range } from "../../utils/range"; // Importation de la fonction pour créer des plages de nombres
import type { ImageProps, SharedModalProps } from "../../utils/types"; // Importation des types pour les propriétés des images et du modal
import Twitter from "./Icons/Twitter"; // Importation du composant pour l'icône Twitter

/**
 * Composant SharedModal pour afficher une image en plein écran avec des contrôles de navigation et d'interaction.
 * 
 * @param index - Index actuel de l'image à afficher
 * @param images - Tableau des images disponibles
 * @param changePhotoId - Fonction pour changer l'ID de la photo affichée
 * @param closeModal - Fonction pour fermer le modal
 * @param navigation - Indicateur pour afficher ou non les contrôles de navigation
 * @param currentPhoto - Photo actuellement affichée
 * @param direction - Direction de la transition entre les images
 * @returns Le composant SharedModal
 */
export default function SharedModal({
  index,
  images = [], // Défaut à un tableau vide pour éviter les problèmes de valeur undefined
  changePhotoId,
  closeModal,
  navigation,
  currentPhoto,
  direction,
}: SharedModalProps) {

  const [loaded, setLoaded] = useState(false); // État pour suivre si l'image est chargée

  // Filtrer les images pour afficher uniquement celles dans une plage autour de l'image actuelle
  let filteredImages = images.filter((img: ImageProps) =>
    range(index - 15, index + 15).includes(img.id),
  );

  // Gestionnaires de gestes pour les swipe gauche et droite
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images.length - 1) {
        changePhotoId(index + 1); // Passe à la photo suivante
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1); // Passe à la photo précédente
      }
    },
    trackMouse: true,
  });

  let currentImage = images[index] || currentPhoto; // Image actuelle à afficher

  // Vérifie que currentImage est défini avant de rendre le JSX
  if (!currentImage) {
    return null; // Retourne null ou un fallback approprié si l'image actuelle n'existe pas
  }

  return (
    <MotionConfig
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 }, // Transition pour le mouvement horizontal
        opacity: { duration: 0.2 }, // Transition pour l'opacité
      }}
    >
      <div
        className="relative z-50 flex aspect-[3/2] w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"
        {...handlers} // Applique les gestionnaires de swipe
      >
        {/* Image principale */}
        <div className="w-full overflow-hidden">
          <div className="relative flex aspect-[3/2] items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants} // Applique les variantes d'animation
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute"
              >
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,${navigation ? "w_1280" : "w_1920"}/${currentImage.public_id}.${currentImage.format}`}
                  width={navigation ? 1280 : 1920}
                  height={navigation ? 853 : 1280}
                  priority
                  alt="Next.js Conf image"
                  onLoad={() => setLoaded(true)} // Marque l'image comme chargée lorsque le chargement est terminé
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Boutons et barre de navigation en bas */}
        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center justify-center">
          {/* Boutons de navigation */}
          {loaded && (
            <div className="relative aspect-[3/2] max-h-full w-full">
              {navigation && (
                <>
                  {index > 0 && (
                    <button
                      className="absolute left-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changePhotoId(index - 1)} // Change la photo vers la gauche
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                  )}
                  {index + 1 < images.length && (
                    <button
                      className="absolute right-3 top-[calc(50%-16px)] rounded-full bg-black/50 p-3 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white focus:outline-none"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      onClick={() => changePhotoId(index + 1)} // Change la photo vers la droite
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  )}
                </>
              )}
              <div className="absolute top-0 right-0 flex items-center gap-2 p-3 text-white">
                {navigation ? (
                  <a
                    href={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Open fullsize version"
                    rel="noreferrer"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                  </a>
                ) : (
                  <a
                    href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Next.js%20Conf!%0A%0Ahttps://nextjsconf-pics.vercel.app/p/${index}`}
                    className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                    target="_blank"
                    title="Share on Twitter"
                    rel="noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                <button
                  onClick={() =>
                    downloadPhoto(
                      `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${currentImage.public_id}.${currentImage.format}`,
                      `${index}.jpg`,
                    )
                  }
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                  title="Download fullsize version"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute top-0 left-0 flex items-center gap-2 p-3 text-white">
                <button
                  onClick={() => closeModal()}
                  className="rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white"
                >
                  {navigation ? (
                    <XMarkIcon className="h-5 w-5" />
                  ) : (
                    <ArrowUturnLeftIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          )}
          {/* Barre de navigation en bas */}
          {navigation && (
            <div className="fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60">
              <motion.div
                initial={false}
                className="mx-auto mt-6 mb-6 flex aspect-[3/2] h-14"
              >
                <AnimatePresence initial={false}>
                  {filteredImages.map(({ public_id, format, id }) => (
                    <motion.button
                      initial={{
                        width: "0%",
                        x: `${Math.max((index - 1) * -100, 15 * -100)}%`,
                      }}
                      animate={{
                        scale: id === index ? 1.25 : 1,
                        width: "100%",
                        x: `${Math.max(index * -100, 15 * -100)}%`,
                      }}
                      exit={{ width: "0%" }}
                      onClick={() => changePhotoId(id)}
                      key={id}
                      className={`${
                        id === index
                          ? "z-20 rounded-md shadow shadow-black/50"
                          : "z-10"
                      } ${id === 0 ? "rounded-l-md" : ""} ${
                        id === images.length - 1 ? "rounded-r-md" : ""
                      } relative inline-block w-full shrink-0 transform-gpu overflow-hidden focus:outline-none`}
                    >
                      <Image
                        alt="small photos on the bottom"
                        width={180}
                        height={120}
                        className={`${
                          id === index
                            ? "brightness-110 hover:brightness-110"
                            : "brightness-50 contrast-125 hover:brightness-75"
                        } h-full transform object-cover transition`}
                        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_180/${public_id}.${format}`}
                      />
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
