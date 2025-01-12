// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUS3Pi8u05sB1f9CEN4iib0Y0hHJy9AZM",
  authDomain: "cinemacircle-6d533.firebaseapp.com",
  projectId: "cinemacircle-6d533",
  storageBucket: "cinemacircle-6d533.firebasestorage.app",
  messagingSenderId: "834710642223",
  appId: "1:834710642223:web:53353a0ed0f9249543b0da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();