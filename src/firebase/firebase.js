import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import {collection, getFirestore, query, getDocs, where, addDoc} from "firebase/firestore"

export const firebaseConfig = {
  apiKey: "AIzaSyDgDr_0lfmYcL80lAlUIEG7QwrSIF8yItA",
  authDomain: "e-commerce-project-60813.firebaseapp.com",
  projectId: "e-commerce-project-60813",
  storageBucket: "e-commerce-project-60813.appspot.com", 
  messagingSenderId: "858383227770",
  appId: "1:858383227770:web:3f74141557a2ed295854c3",
  measurementId: "G-VNGRP6BCMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore DB
export const db = getFirestore(app);

//Intialize Authentication
export const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () =>{
  try{
    const response = await signInWithPopup(auth, googleProvider);
    const user = response.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0){
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name:user.displayName,
        authProvider:"google",
        email:user.email
      })
    }
  } catch (error) {
      console.error(error);
      alert(error.message)
  }
}

export const logInWithEmailAndPassword = async (email, password) =>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(error.message)
  }
}

export const registerWithEmailAndPassword = async (name, email, password) =>{
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    const user = response.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider:"local",
      email,
    })
  } catch (error) {
      console.error(error)
      alert(error.message);
  }
}

export const sendPasswordReset = async (email) =>{
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent.")
  } catch (error) {
      console.error(error)
      alert(error.message)
  }
}

export const logOut = () => {
  signOut(auth)
}
