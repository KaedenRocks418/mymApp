// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApE9CAibZD8Fi9eg4OVjL_o8x-A6EFTrY",
  authDomain: "meetyourmeal-cebd5.firebaseapp.com",
  projectId: "meetyourmeal-cebd5",
  storageBucket: "meetyourmeal-cebd5.appspot.com",
  messagingSenderId: "749664630021",
  appId: "1:749664630021:web:8b2dfe578322144a1bf36c",
  measurementId: "G-EZ8KZ6H3YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

