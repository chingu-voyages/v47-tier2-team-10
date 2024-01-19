// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyASpMTTkiFYeFb0DlvW4JieANVRYgx4J5o",
  authDomain: "v47login.firebaseapp.com",
  databaseURL: "https://v47login-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "v47login",
  storageBucket: "v47login.appspot.com",
  messagingSenderId: "332628734394",
  appId: "1:332628734394:web:3d8cdfe499fd97cc4b6d83",
  measurementId: "G-3Y4LKMBXX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export default app;