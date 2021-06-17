import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgDoS8ZTkb6Okz94ZYKMmsymMQvFIe2hQ",
    authDomain: "clone-3e3b7.firebaseapp.com",
    databaseURL: "https://clone-3e3b7.firebaseio.com",
    projectId: "clone-3e3b7",
    storageBucket: "clone-3e3b7.appspot.com",
    messagingSenderId: "113854195757",
    appId: "1:113854195757:web:4be41c924946568377f0a4",
    measurementId: "G-9Y1Q4ZQDVT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
