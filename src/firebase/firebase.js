import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

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

export const productDb = getFirestore(app);



//Intialize Authentication
export const auth = getAuth(app)