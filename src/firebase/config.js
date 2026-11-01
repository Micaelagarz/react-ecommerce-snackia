// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3tUmoFGcueQYfwmmZYpQ3BJ6O2V37yng",
    authDomain: "ecommerce-snackia.firebaseapp.com",
    projectId: "ecommerce-snackia",
    storageBucket: "ecommerce-snackia.firebasestorage.app",
    messagingSenderId: "548066969257",
    appId: "1:548066969257:web:d388bbecd29614e6910bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);