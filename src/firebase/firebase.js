import { initializeApp} from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import {collection, query, getDocs, where, addDoc, persistentLocalCache, persistentSingleTabManager, initializeFirestore} from "firebase/firestore"

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
export const db = initializeFirestore(app, 
  {localCache: 
    persistentLocalCache(/*settings*/{tabManager: persistentSingleTabManager()})
});

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
      console.error(error.message)
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

export const getAuthenticationErrorMessage = (errorCode) => {
  switch(errorCode){
    case "auth/invalid-email":
      return "Please enter a valid email address"
    case "auth/claims-too-large":
      return "The claim provided exceeds the maximum limit of 1000 bytes"
    case "auth/email-already-exists":
      return "The email is already registered to an existing user"
    case "auth/id-token-expired":
      return "The provided ID token is expired"
    case "auth/id-token-revoked":
      return "The ID token has been revoked"
    case "auth/insufficient-permission":
      return "Insufficient Permissions"
    case "auth/internal-error":
      return "The server could not process the request"
    case "auth/invalid-argument":
      return "An invalid argument was provided"
    case "auth/invalid-claims":
      return "Custom claim attributes are invalid"
    case "auth/invalid-continue-uri":
      return "Continue URL is invalid"
    case "auth/invalid-creation-time":
      return "Invalid UTC date"
    case "auth/invalid-credential":
      return "Invalid credentials"
    case "auth/invalid-disabled-field":
      return "Invalid disabled field"
    case "auth/invalid-display-name":
      return "Invalid display name"
    case "auth/invalid-email-verified":
      return "Invalid verified property"
    case "auth/invalid-id-token":
      return "Invalid token ID"
    case "auth/invalid-password":
      return "Invalid password format"
    case "auth/too-many-requests":
      return "Maximum request number exceeded"
    default:
      return "Register failed Please try again"
  }
    
}
