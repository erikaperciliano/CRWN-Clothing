 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClLMyqsYFdUWkuostJrzgoEoZfwKkgbsQ",
  authDomain: "crwn-clothing-db-c7ab1.firebaseapp.com",
  projectId: "crwn-clothing-db-c7ab1",
  storageBucket: "crwn-clothing-db-c7ab1.firebasestorage.app",
  messagingSenderId: "305448389704",
  appId: "1:305448389704:web:367043bbbc81ee79e11c7d",
  measurementId: "G-7S055HE9S4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);