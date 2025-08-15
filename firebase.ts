// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnyGdbmT_r9ffP9ChYfaQoOwyFrOdlEa0",
  authDomain: "notion-clone-fc18f.firebaseapp.com",
  projectId: "notion-clone-fc18f",
  storageBucket: "notion-clone-fc18f.firebasestorage.app",
  messagingSenderId: "1032713190851",
  appId: "1:1032713190851:web:d5c069d118ea63b1959176"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };