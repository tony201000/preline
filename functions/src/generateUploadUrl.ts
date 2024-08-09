import * as functions from 'firebase-functions';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import * as admin from 'firebase-admin';

admin.initializeApp();

const storage = getStorage();

export const generateUploadUrl = functions.https.onCall(async (data, context) => {
  const { filename } = data;
  const storageRef = ref(storage, `images/${filename}`);
  
  try {
    // Generate a download URL after upload
    const downloadURL = await getDownloadURL(storageRef);
    return { downloadURL };
  } catch (error) {
    throw new functions.https.HttpsError('internal', 'Unable to generate URL', error);
  }
});
