// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkA_Q_2kh-BULsNxFSejPYpIHLBeg6F6I",
  authDomain: "ideaslalabuba.firebaseapp.com",
  projectId: "ideaslalabuba",
  storageBucket: "ideaslalabuba.appspot.com",
  messagingSenderId: "527544986163",
  appId: "1:527544986163:web:f03fb37d54a755148b9146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}