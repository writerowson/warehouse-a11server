

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDu1SKin07ya4TNq3RuI_xHrRk0J7qwsJU",
    authDomain: "pure-perfume.firebaseapp.com",
    projectId: "pure-perfume",
    storageBucket: "pure-perfume.appspot.com",
    messagingSenderId: "1011307160727",
    appId: "1:1011307160727:web:312f28b9afe193f21535d2",
    measurementId: "G-MD8X0SG77Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth