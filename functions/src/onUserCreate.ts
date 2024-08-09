import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();

export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid;
  const email = user.email;

  // Exemple : Créer un document Firestore pour le nouvel utilisateur
  const userRef = admin.firestore().collection("users").doc(uid);

  try {
    await userRef.set({
      email: email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      role: "user", // Attribuer un rôle par défaut
      // Ajouter d'autres informations par défaut si nécessaire
    });

    console.log(`Document created for user ${uid}`);

    // Exemple : Envoyer un email de bienvenue via un service d'emailing externe
    // Note : Vous auriez besoin de configurer un service externe comme SendGrid
    /*
    await sendWelcomeEmail(email);
    */
  } catch (error) {
    console.error(`Error creating document for user ${uid}:`, error);
  }
});
