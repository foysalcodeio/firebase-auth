// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzm4mkhMYvzXK0oA1RFMIslTZpuRFm3DY",
  authDomain: "fir-auth-c9cb1.firebaseapp.com",
  projectId: "fir-auth-c9cb1",
  storageBucket: "fir-auth-c9cb1.appspot.com",
  messagingSenderId: "760193550056",
  appId: "1:760193550056:web:2fcd632c7b30024c506b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;