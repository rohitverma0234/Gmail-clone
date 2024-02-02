import firebase from "firebase";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhjLA705j0NwqsYIQC-EPvvl8AKLRg5J8",
  authDomain: "clone-3f6e6.firebaseapp.com",
  projectId: "clone-3f6e6",
  storageBucket: "clone-3f6e6.appspot.com",
  messagingSenderId: "911607968303",
  appId: "1:911607968303:web:2ab9edafce659711a1ccda"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = firebase.auth.googleAuthProvider();

export {db, auth, provider};