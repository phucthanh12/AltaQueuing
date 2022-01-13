import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail  ,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmp4uQ3o40iTDiafnOvcD7toNR2RlWTJA",
    authDomain: "alta-project-8d258.firebaseapp.com",
    projectId: "alta-project-8d258",
    storageBucket: "alta-project-8d258.appspot.com",
    messagingSenderId: "15572458977",
    appId: "1:15572458977:web:1eef13968cb4f4f16486a0",
    measurementId: "G-Z4HBV6PSTX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  
export { signIn, forgotPassword };