// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApauxI1sOyRZTzFHsRjnX6ifLVz-6J7Kc",
  authDomain: "login-4fcf6.firebaseapp.com",
  projectId: "login-4fcf6",
  storageBucket: "login-4fcf6.appspot.com",
  messagingSenderId: "449904316880",
  appId: "1:449904316880:web:ce5e440ab5c4eff474e9d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;