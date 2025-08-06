// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2BArKMUgVNbXhuPt0FQlqUOqCI-_9m8",
  authDomain: "notion-ai-5b49b.firebaseapp.com",
  projectId: "notion-ai-5b49b",
  storageBucket: "notion-ai-5b49b.firebasestorage.app",
  messagingSenderId: "953850792666",
  appId: "1:953850792666:web:bf1da68e5e3464c8e0b3e3"
};

// Initialize Firebase
const app = getApps.length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
