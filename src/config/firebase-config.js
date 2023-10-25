// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAACZMufZ6qgF1I9y-xlP7KdahGQ_fNJnQ",
  authDomain: "expense-tracker-d0240.firebaseapp.com",
  projectId: "expense-tracker-d0240",
  storageBucket: "expense-tracker-d0240.appspot.com",
  messagingSenderId: "18315197813",
  appId: "1:18315197813:web:5da4755d97b2d3e3e3a73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();  
export const db= getFirestore(app);