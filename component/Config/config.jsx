import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/compat/app";
const firebaseConfig = {
    apiKey: "AIzaSyDGARW6u5a0SpboIuDlgLZ7aGR-nTanWx0",
    authDomain: "loginreactnative-e75d1.firebaseapp.com",
    projectId: "loginreactnative-e75d1",
    storageBucket: "loginreactnative-e75d1.appspot.com",
    messagingSenderId: "200542830914",
    appId: "1:200542830914:web:78bdcea0a38241ac19c8db",
    measurementId: "G-88SXVKMDHQ"
};
let app;

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
export {firebase}