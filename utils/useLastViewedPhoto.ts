import { createGlobalState } from "react-hooks-global-state"; // Importation de la fonction createGlobalState pour créer un état global avec react-hooks-global-state

// Définition de l'état initial pour l'application
// L'état initial contient une seule propriété 'photoToScrollTo' qui peut être un nombre ou null
const initialState = { photoToScrollTo: null as number | null };

// Création du hook d'état global en utilisant l'état initial
const { useGlobalState } = createGlobalState(initialState);

/**
 * Hook personnalisé pour accéder et manipuler l'état global de 'photoToScrollTo'.
 * 
 * @returns Un tableau contenant l'état actuel de 'photoToScrollTo' et une fonction pour mettre à jour cet état.
 */
export const useLastViewedPhoto = () => {
  return useGlobalState("photoToScrollTo"); // Retourne le hook d'état global pour 'photoToScrollTo'
};
