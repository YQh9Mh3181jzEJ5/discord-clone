import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyCxpL4_bDdu9d5bC0zHUlp-R--M0_xmMmQ",
  authDomain: "discord-clone-1aaa5.firebaseapp.com",
  projectId: "discord-clone-1aaa5",
  storageBucket: "discord-clone-1aaa5.appspot.com",
  messagingSenderId: "439846335433",
  appId: "1:439846335433:web:65cf38be2a66c8cbc9ae18",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
