// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrcwVt1rxIbE5VaRbL_nP-yxXljB62x4k",
  authDomain: "movieadmin-user.firebaseapp.com",
  projectId: "movieadmin-user",
  storageBucket: "movieadmin-user.firebasestorage.app",
  messagingSenderId: "354821696758",
  appId: "1:354821696758:web:6ce855d0dc9a32d1b250d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();