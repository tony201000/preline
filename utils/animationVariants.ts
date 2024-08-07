/**
 * Déclaration d'un objet 'variants' qui définit différentes variantes d'animation pour les transitions
 * Utilisé avec des bibliothèques d'animation comme Framer Motion pour animer les éléments en fonction de leur direction d'entrée ou de sortie.
 */
export const variants = {
  
  /**
   * Variante 'enter' pour animer l'entrée d'un élément dans la vue.
   * Exemple d'utilisation : Lorsqu'un nouvel élément entre dans l'écran à partir de la droite ou de la gauche.
   * @param direction - Direction d'entrée de l'élément (positif pour la droite, négatif pour la gauche)
   * @returns Un objet définissant les propriétés d'animation (position x et opacité)
   */
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000, // Déplace l'élément horizontalement vers la droite (1000px) si la direction est positive, sinon vers la gauche (-1000px)
      opacity: 0, // Rend l'élément complètement transparent (opacité 0)
    };
  },
  
  /**
   * Variante 'center' pour positionner l'élément au centre une fois l'animation terminée.
   * Exemple d'utilisation : Position finale de l'élément après l'animation d'entrée ou de sortie.
   * @returns Un objet définissant les propriétés d'animation (position x et opacité)
   */
  center: {
    x: 0, // Position horizontale de l'élément au centre (0px)
    opacity: 1, // Rend l'élément complètement opaque (opacité 1)
  },
  
  /**
   * Variante 'exit' pour animer la sortie d'un élément de la vue.
   * Exemple d'utilisation : Lorsqu'un élément quitte l'écran vers la droite ou vers la gauche.
   * @param direction - Direction de sortie de l'élément (positif pour la gauche, négatif pour la droite)
   * @returns Un objet définissant les propriétés d'animation (position x et opacité)
   */
  exit: (direction: number) => {
    return {
      x: direction < 0 ? 1000 : -1000, // Déplace l'élément horizontalement vers la droite (1000px) si la direction est négative, sinon vers la gauche (-1000px)
      opacity: 0, // Rend l'élément complètement transparent (opacité 0)
    };
  },
};
