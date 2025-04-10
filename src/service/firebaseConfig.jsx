// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI4aKUGyep50Lmx4dSMpcF2pmNxIJDvwg",
  authDomain: "ai-trip-planner-8c1bc.firebaseapp.com",
  projectId: "ai-trip-planner-8c1bc",
  storageBucket: "ai-trip-planner-8c1bc.firebasestorage.app",
  messagingSenderId: "34625838160",
  appId: "1:34625838160:web:1fbdd4e9772458d1594555",
  measurementId: "G-WYELNKWL69"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);