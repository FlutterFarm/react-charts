import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
    apiKey: "AIzaSyB3WBLfJ3qBAmWtmfPeZafF5EKsfeSY_To",
    authDomain: "robotalks-1fdc8.firebaseapp.com",
    projectId: "robotalks-1fdc8",
    storageBucket: "robotalks-1fdc8.appspot.com",
    messagingSenderId: "248978469915",
    appId: "1:248978469915:web:4384532413a89ddbf5b4be",
    measurementId: "G-77XFR18ST7"
  };
  var app = firebase.initializeApp(config);
  const db = firebase.firestore();
  const auth = firebase.auth();
  
  export default db;
