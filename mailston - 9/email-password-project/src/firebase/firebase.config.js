// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp7aTmCgtwyd6De8KC5KlI9TmAVj1VCd0",
  authDomain: "email-password-project-50102.firebaseapp.com",
  projectId: "email-password-project-50102",
  storageBucket: "email-password-project-50102.appspot.com",
  messagingSenderId: "297207040642",
  appId: "1:297207040642:web:a9d9383c73e30ef50dc29b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;