// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcIZkamTWHyJXrl8EhNXuPW-TTpplRq98",
  authDomain: "prepwise-16b17.firebaseapp.com",
  projectId: "prepwise-16b17",
  storageBucket: "prepwise-16b17.firebasestorage.app",
  messagingSenderId: "804348453517",
  appId: "1:804348453517:web:6a4ba785d45d4bc680b8c4",
  measurementId: "G-MYP2JFERGF"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)