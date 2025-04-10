import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAI4aKUGyep50Lmx4dSMpcF2pmNxIJDvwg",
  authDomain: "ai-trip-planner-8c1bc.firebaseapp.com",
  projectId: "ai-trip-planner-8c1bc",
  storageBucket: "ai-trip-planner-8c1bc.firebasestorage.app",
  messagingSenderId: "34625838160",
  appId: "1:34625838160:web:1fbdd4e9772458d1594555"
};

// ✅ only initialize if no app exists
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
