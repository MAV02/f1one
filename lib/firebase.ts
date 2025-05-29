// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjYQK3DH5Bvkvdy536NNsBHWVF34jQbYY",
  authDomain: "onef1-e8a88.firebaseapp.com",
  projectId: "onef1-e8a88",
  storageBucket: "onef1-e8a88.firebasestorage.app",
  messagingSenderId: "866794649047",
  appId: "1:866794649047:web:85b3c27b133ae93dadc792"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };