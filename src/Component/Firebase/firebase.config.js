// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFQzYz4NqrQwdpc0iJVZW1AUsn5nogdQw",
  authDomain: "travel-guru-28083.firebaseapp.com",
  projectId: "travel-guru-28083",
  storageBucket: "travel-guru-28083.firebasestorage.app",
  messagingSenderId: "1001487869366",
  appId: "1:1001487869366:web:b7b9e45bd4d00bb4850d17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;