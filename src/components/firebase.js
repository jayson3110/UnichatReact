import firebase from "firebase/app";
import "firebase/auth";



export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCavX5cTC0yN4bXCJPdYJoVWQBnbjNbPZc",
  authDomain: "unichat-f5fa5.firebaseapp.com",
  projectId: "unichat-f5fa5",
  storageBucket: "unichat-f5fa5.appspot.com",
  messagingSenderId: "198876671430",
  appId: "1:198876671430:web:21e56f65c7e296c66f56c7",

}).auth();


