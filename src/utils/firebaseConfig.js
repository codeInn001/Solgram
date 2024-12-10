// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from 'firebase/database'

// import firebase from 'firebase/app ';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGgpD9k5s-fWXpEBZSXtCFDmk48a_C5dc",
  authDomain: "codeinn.firebaseapp.com",
  databaseURL: "https://codeinn-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "codeinn",
  storageBucket: "codeinn.firebasestorage.app",
  messagingSenderId: "37475493258",
  appId: "1:37475493258:web:eb23535dfc9aa550fbd473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
export {database}

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

// export default database;