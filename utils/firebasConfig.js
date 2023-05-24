import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqdJJp2RtBwRnlFAk-ga-Bctmp-MkzE1w",
  authDomain: "promptopia-d350a.firebaseapp.com",
  projectId: "promptopia-d350a",
  storageBucket: "promptopia-d350a.appspot.com",
  messagingSenderId: "557169261150",
  appId: "1:557169261150:web:e11e78aa7b82628da4d2cf",
  measurementId: "G-6WE92V0LBS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
