// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpbFgoh3IgMp9QPn2Z5s0uOlUWxN-KBfY",
  authDomain: "jv-sneakers.firebaseapp.com",
  projectId: "jv-sneakers",
  storageBucket: "jv-sneakers.appspot.com",
  messagingSenderId: "127988917817",
  appId: "1:127988917817:web:a4126598553312a39fcfe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()