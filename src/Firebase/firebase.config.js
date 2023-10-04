// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2KVSO3Fv6Fi4TUTeWuGfMZsCh80AgleA",
  authDomain: "user-email-password-auth-626cc.firebaseapp.com",
  projectId: "user-email-password-auth-626cc",
  storageBucket: "user-email-password-auth-626cc.appspot.com",
  messagingSenderId: "990555777589",
  appId: "1:990555777589:web:0d0af07735763c56ccdf7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
