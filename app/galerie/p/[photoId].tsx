import type { GetStaticProps, NextPage } from "next"; // Importation des types pour le rendu statique et le composant page
import Head from "next/head"; // Importation du composant Head pour la gestion des métadonnées
import { useRouter } from "next/router"; // Importation du hook useRouter pour accéder aux paramètres de l'URL
import Carousel from "../../../components/galerie/Carousel"; // Importation du composant Carousel
import getResults from "../../../utils/cachedImages"; // Importation de la fonction pour obtenir les images
import cloudinary from "../../../utils/cloudinary"; // Importation de la configuration Cloudinary
import getBase64ImageUrl from "../../../utils/generateBlurPlaceholder"; // Importation de la fonction pour générer une image floue de prévisualisation
import type { ImageProps } from "../../../utils/types"; // Importation des types pour les propriétés des images

// Définition du type des props attendues par le composant Home
interface HomeProps {
  currentPhoto: ImageProps | null; // Photo actuelle ou null si non trouvée
}

// Définition du composant Home
const Home: NextPage<HomeProps> = ({ currentPhoto }) => {
  const router = useRouter(); // Hook pour accéder aux informations de l'URL
  const { photoId } = router.query; // Extraction de l'ID de photo de l'URL
  let index = Number(photoId); // Conversion de l'ID de photo en nombre

  // Affichage d'un message d'erreur si la photo n'est pas trouvée
  if (!currentPhoto) {
    return (
      <>
        <Head>
          <title>Photo not found</title> {/* Titre de la page */}
        </Head>
        <main className="mx-auto max-w-[1960px] p-4">
          <p>Photo not found</p> {/* Message d'erreur */}
        </main>
      </>
    );
  }

  // URL de l'image actuelle pour les métadonnées Open Graph et Twitter
  const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto.public_id}.${currentPhoto.format}`;

  return (
    <>
      <Head>
        <title>Next.js Conf 2022 Photos</title> {/* Titre de la page */}
        <meta property="og:image" content={currentPhotoUrl} /> {/* Métadonnée Open Graph */}
        <meta name="twitter:image" content={currentPhotoUrl} /> {/* Métadonnée Twitter */}
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        <Carousel currentPhoto={currentPhoto} index={index} /> {/* Affichage du composant Carousel avec la photo actuelle */}
      </main>
    </>
  );
};

export default Home;

// Fonction pour obtenir les props statiques au moment de la construction
export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const results = await getResults(); // Obtention des résultats d'images

  let reducedResults: ImageProps[] = []; // Tableau pour stocker les résultats réduits
  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const photoId = context.params?.photoId; // Obtention de l'ID de la photo depuis les paramètres de l'URL
  const currentPhoto = reducedResults.find(
    (img) => img.id === Number(photoId) // Recherche de la photo actuelle
  );

  if (currentPhoto) {
    currentPhoto.blurDataUrl = await getBase64ImageUrl(currentPhoto); // Génération de l'URL de prévisualisation floue
  }

  return {
    props: {
      currentPhoto: currentPhoto || null, // Retourne la photo actuelle ou null
    },
  };
};

// Fonction pour obtenir les chemins statiques pour le pré-rendu
export async function getStaticPaths() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute(); // Obtention des résultats de Cloudinary

  let fullPaths = [];
  for (let i = 0; i < results.resources.length; i++) {
    fullPaths.push({ params: { photoId: i.toString() } }); // Création des chemins pour chaque photo
  }

  return {
    paths: fullPaths, // Chemins pour les photos
    fallback: false, // Pas de mode fallback
  };
}
