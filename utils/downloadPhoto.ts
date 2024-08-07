/**
 * Forcer le téléchargement d'un fichier à partir d'un URL blob.
 *
 * @param blobUrl - L'URL blob du fichier à télécharger.
 * @param filename - Le nom du fichier à télécharger.
 */
function forceDownload(blobUrl: string, filename: string): void {
  // Crée un élément <a> pour initier le téléchargement
  const a = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;

  // Ajoute l'élément <a> au corps du document, déclenche le clic pour télécharger, puis le supprime
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * Télécharge une photo à partir d'une URL en créant un blob et en forçant le téléchargement.
 *
 * @param url - L'URL de la photo à télécharger.
 * @param filename - Le nom sous lequel la photo doit être sauvegardée.
 */
export default function downloadPhoto(url: string, filename?: string): void {
  // Vérifie que l'URL n'est pas vide ou nulle avant de procéder
  if (!url) {
    console.error("URL is required for downloading photo.");
    return;
  }

  // Si aucun nom de fichier n'est fourni, utilise le nom de fichier de l'URL
  if (!filename) {
    const urlSegments = url.split("\\").pop()?.split("/");
    filename = urlSegments ? urlSegments.pop() ?? "download" : "download";
  }

  // Fait une requête fetch pour récupérer la photo en tant que blob
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: "cors",
  })
    .then((response) => response.blob())  // Convertit la réponse en blob
    .then((blob) => {
      // Crée un URL blob à partir du blob et force le téléchargement
      const blobUrl = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename!);
    })
    .catch((e) => console.error("Error downloading photo:", e));  // Gère les erreurs
}
