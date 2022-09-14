import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2Oek0tB752BMD6yYsQ0_fXYdUBf8LnH0",
  authDomain: "envio-flores.firebaseapp.com",
  projectId: "envio-flores",
  storageBucket: "envio-flores.appspot.com",
  messagingSenderId: "705690986825",
  appId: "1:705690986825:web:d4538a97987387097d9298"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);