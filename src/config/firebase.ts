import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "savvy-funds.firebaseapp.com",
  projectId: "savvy-funds",
  storageBucket: "savvy-funds.appspot.com",
  messagingSenderId: "623380663142",
  appId: "1:623380663142:web:c6252b25473d954f1216a7",
  measurementId: "G-W7SSGNVEB0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const users = collection(db, 'users');
