// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

// Auth
import { getAuth, GoogleAuthProvider } from
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Firestore
import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyBvUGm2Qa5fFmOSxaSCxSS6yNmAK2Gjtxg",
  authDomain: "morse-quest-hackher.firebaseapp.com",
  projectId: "morse-quest-hackher",
  storageBucket: "morse-quest-hackher.appspot.com",
  messagingSenderId: "951691454316",
  appId: "1:951691454316:web:0392c8a995f45bb167f549"
};

// Init
const app = initializeApp(firebaseConfig);

// Exports
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
