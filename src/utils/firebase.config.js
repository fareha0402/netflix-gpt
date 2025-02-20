// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4-80SFeKP9_MQMKtvxzycY5KmDbzYPFo",
  authDomain: "netflix-gpt-fs.firebaseapp.com",
  projectId: "netflix-gpt-fs",
  storageBucket: "netflix-gpt-fs.firebasestorage.app",
  messagingSenderId: "507741458093",
  appId: "1:507741458093:web:ddf5de5a29c70ac05d0024",
  measurementId: "G-YB35WKCH6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const  auth = getAuth()