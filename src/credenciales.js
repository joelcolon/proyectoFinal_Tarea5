// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA30nqWL8aNRIGg6gEyvoEe5i4G4uGYQ1k",
  authDomain: "muro-interactivo-a5d5f.firebaseapp.com",
  projectId: "muro-interactivo-a5d5f",
  storageBucket: "muro-interactivo-a5d5f.appspot.com",
  messagingSenderId: "354190831192",
  appId: "1:354190831192:web:2660a5a3a2951223cca42d",
  measurementId: "G-K0Y28YNME1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase