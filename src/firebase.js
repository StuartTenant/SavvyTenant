// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHyU9gZ-AsnmBGq4AXB0TOPBbVgMZqhN0",
    authDomain: "savvytenant-bdf8f.firebaseapp.com",
    databaseURL: "https://savvytenant-bdf8f-default-rtdb.firebaseio.com",
    projectId: "savvytenant-bdf8f",
    storageBucket: "savvytenant-bdf8f.appspot.com",
    messagingSenderId: "13863910721",
    appId: "1:13863910721:web:66f4d2dba98299f83ff5c0",
    measurementId: "G-J19C59QNX7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);