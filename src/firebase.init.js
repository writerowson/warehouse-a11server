// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1ienVmSbsce_m75HXUhkVktNlsYZu87g",
  authDomain: "assignment11-8f26c.firebaseapp.com",
  projectId: "assignment11-8f26c",
  storageBucket: "assignment11-8f26c.appspot.com",
  messagingSenderId: "61957390795",
  appId: "1:61957390795:web:d9adb3e699183d901d364e",
  measurementId: "G-STMEQSH4MM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth;