import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatterbox-3c31e.firebaseapp.com",
  projectId: "chatterbox-3c31e",
  storageBucket: "chatterbox-3c31e.appspot.com",
  messagingSenderId: "328967969894",
  appId: "1:328967969894:web:8d294c6d8122743e9521a7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()