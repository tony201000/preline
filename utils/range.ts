/**
 * Génère un tableau de nombres dans une plage spécifiée.
 * 
 * @param start - Le début de la plage (inclus). Si `end` n'est pas fourni, ce paramètre devient la fin de la plage et la plage commence à 0.
 * @param end - La fin de la plage (exclus). Si ce paramètre est omis, la plage s'étend de `0` à `start`.
 * @returns Un tableau de nombres de `start` à `end`, excluant `end`.
 */
export const range = (start: number, end?: number) => {
  let output: number[] = []; // Création d'un tableau vide pour stocker les nombres

  // Vérifie si `end` n'est pas défini
  if (typeof end === "undefined") {
    end = start; // Définit `end` comme la valeur de `start`
    start = 0;   // Définit `start` comme 0
  }

  // Remplit le tableau avec les nombres de `start` à `end` (exclu)
  for (let i = start; i < end; i += 1) {
    output.push(i); // Ajoute le nombre actuel au tableau
  }

  // Retourne le tableau contenant la plage de nombres
  return output;
};
