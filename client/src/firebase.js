// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1a90f.firebaseapp.com",
  projectId: "mern-estate-1a90f",
  storageBucket: "mern-estate-1a90f.firebasestorage.app",
  messagingSenderId: "447133812577",
  appId: "1:447133812577:web:05b5e9b817ba4b389de720"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);