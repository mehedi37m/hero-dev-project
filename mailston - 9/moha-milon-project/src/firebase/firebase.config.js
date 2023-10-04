
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaKvsK3hjCFdzhLpSq-cGxCnfBx8_nvn8",
  authDomain: "auth-moha-milon-67844.firebaseapp.com",
  projectId: "auth-moha-milon-67844",
  storageBucket: "auth-moha-milon-67844.appspot.com",
  messagingSenderId: "258899834770",
  appId: "1:258899834770:web:9947f84c71e088c530b34b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;