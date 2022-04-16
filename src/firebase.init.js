// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_GlIXz6LgIyoUOCsu_niC7RU8HdS_WRk",
  authDomain: "vision-of-wedding-photographer.firebaseapp.com",
  projectId: "vision-of-wedding-photographer",
  storageBucket: "vision-of-wedding-photographer.appspot.com",
  messagingSenderId: "293377480401",
  appId: "1:293377480401:web:9c7f2c608adcb8a2f717f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;