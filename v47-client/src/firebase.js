// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';


const firebaseConfig = {

  // apiKey:process.env.REACT_APP_MYFIRE_DATABASE,
  // blocker: It works only when actual apiKey exists here.
  apiKey:"AIzaSyASpMTTkiFYeFb0DlvW4JieANVRYgx4J5o",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId:process.env.REACT_APP_PROJECT_ID,
  storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);

console.log(process.env.REACT_APP_MYFIRE_DATABASE_);


export default app;