// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCS3s4B_I2eGmHB6jVPPbOrh0W6zKDnn1c",
    authDomain: "savvytenant-211be.firebaseapp.com",
    projectId: "savvytenant-211be",
    storageBucket: "savvytenant-211be.appspot.com",
    messagingSenderId: "378068200397",
    appId: "1:378068200397:web:c323de675f4dc85664f284",
    measurementId: "G-BVHGNWHPXF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);