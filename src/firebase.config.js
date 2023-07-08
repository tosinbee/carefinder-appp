// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeJ_GKT3jpmHKoha7RHl6C0I__eb-i66s",
  authDomain: "carefinder-app-15618.firebaseapp.com",
  projectId: "carefinder-app-15618",
  storageBucket: "carefinder-app-15618.appspot.com",
  messagingSenderId: "565840973534",
  appId: "1:565840973534:web:d1b99c4168df6b16dfbc4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
