import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDEsA4rKuAmvkkLU0HTFyKis7R9bSY2ZVk",
  authDomain: "whispers-43bf9.firebaseapp.com",
  projectId: "whispers-43bf9",
  storageBucket: "whispers-43bf9.appspot.com",
  messagingSenderId: "954437513460",
  appId: "1:954437513460:web:c48153fdbbc27566cd2ea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export {auth, provider}