// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1KmMnrQ4nbgCvYWQ0pPNxOPBxt0jXfSg",
  authDomain: "technohunt22.firebaseapp.com",
  projectId: "technohunt22",
  storageBucket: "technohunt22.appspot.com",
  messagingSenderId: "686065133679",
  appId: "1:686065133679:web:01fe5942846fb58075059a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)