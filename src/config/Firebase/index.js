/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcQLwNRsHxp20EvKQK7PA04auWxqqRJBc",
  authDomain: "labubuproject-firebase.firebaseapp.com",
  databaseURL: "https://labubuproject-firebase-default-rtdb.firebaseio.com",
  projectId: "labubuproject-firebase",
  storageBucket: "labubuproject-firebase.firebasestorage.app",
  messagingSenderId: "981328590226",
  appId: "1:981328590226:web:362841865cdc2152d67d4b",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database, ref, onValue };