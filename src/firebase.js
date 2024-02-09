// Import the necessary Firebase modules
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your Firebase configuration object

const firebaseConfig = {
    apiKey: "AIzaSyDhjLA705j0NwqsYIQC-EPvvl8AKLRg5J8",
    authDomain: "clone-3f6e6.firebaseapp.com",
    projectId: "clone-3f6e6",
    storageBucket: "clone-3f6e6.appspot.com",
    messagingSenderId: "911607968303",
    appId: "1:911607968303:web:2ab9edafce659711a1ccda"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get Auth instance
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider };

