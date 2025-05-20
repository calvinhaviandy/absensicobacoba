// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU-ia7nG_AX_5LdJ1_7ZCPBWSZmgQN54I",
  authDomain: "qr-absensi-958a9.firebaseapp.com",
  projectId: "qr-absensi-958a9",
  storageBucket: "qr-absensi-958a9.firebasestorage.app",
  messagingSenderId: "790343713172",
  appId: "1:790343713172:web:56291ea1cd922b05130f81",
  measurementId: "G-DMYRLXSBL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);