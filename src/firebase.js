// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_KB1wroIUoT2lkAH_ikUpBHLf_7pLhDg",
  authDomain: "vue-shop-b3166.firebaseapp.com",
  projectId: "vue-shop-b3166",
  storageBucket: "vue-shop-b3166.appspot.com",
  messagingSenderId: "48612541486",
  appId: "1:48612541486:web:1758ab11e5f81f454b4bbf",
  measurementId: "G-20JPKPWZFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
