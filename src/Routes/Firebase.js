// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXZoBTQewPYmsbO4RAl7lrvwdbaqNdoo8",
  authDomain: "uphasia.firebaseapp.com",
  projectId: "uphasia",
  storageBucket: "uphasia.appspot.com",
  messagingSenderId: "482459960192",
  appId: "1:482459960192:web:9ef3ebc9c9d9c423be7765",
  measurementId: "G-Z8GC16XP3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);