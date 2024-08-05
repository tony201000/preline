// lib/firebase.tsx
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpCxVRxvUiskME7iwFVz_6hMcPRnH4apQ",
  authDomain: "blindboxcollection-6a548.firebaseapp.com",
  databaseURL: "https://blindboxcollection-6a548-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blindboxcollection-6a548",
  storageBucket: "blindboxcollection-6a548.appspot.com",
  messagingSenderId: "336289874791",
  appId: "1:336289874791:web:3f4f537bdaeffe9e76a5c2",
  measurementId: "G-GSNNFF3BWV"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage };

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};