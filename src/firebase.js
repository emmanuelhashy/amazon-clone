import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB9wrSph4bUfZsXZC0iCBlPlULjoIvLMYQ",
    authDomain: "clone-2c795.firebaseapp.com",
    databaseURL: "https://clone-2c795.firebaseio.com",
    projectId: "clone-2c795",
    storageBucket: "clone-2c795.appspot.com",
    messagingSenderId: "334920753365",
    appId: "1:334920753365:web:c8246d35bdb751aa94c25c",
    measurementId: "G-WJ6WDMR0C3"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };