import { getFirestore } from 'firebase/firestore'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2Oek0tB752BMD6yYsQ0_fXYdUBf8LnH0",
  authDomain: "envio-flores.firebaseapp.com",
  projectId: "envio-flores",
  storageBucket: "envio-flores.appspot.com",
  messagingSenderId: "705690986825",
  appId: "1:705690986825:web:d4538a97987387097d9298"
};

const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app);