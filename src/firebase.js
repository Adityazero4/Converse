import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7sY8x6eRRDYx5RZv3Z7-sdQk0f0-QsRM",
  authDomain: "mychat-798e0.firebaseapp.com",
  projectId: "mychat-798e0",
  storageBucket: "mychat-798e0.appspot.com",
  messagingSenderId: "43793612371",
  appId: "1:43793612371:web:1176de2542083d450bd0a6",
  measurementId: "G-T1JYR3EV2R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
