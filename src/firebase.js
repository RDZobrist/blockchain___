import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDd9bLD7ap7yOl5mCwQVJC6gqtKvirmK7k",
    authDomain: "ferry-auth.firebaseapp.com",
    projectId: "ferry-auth",
    storageBucket: "ferry-auth.appspot.com",
    messagingSenderId: "1052001856811",
    appId: "1:1052001856811:web:a886bf5fc31606c89fe96e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);



export default firebaseApp;