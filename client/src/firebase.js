import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMT5ja_KBmMHXs4vupRZdiI5Apd-CMI0I",
    authDomain: "divine-mingle.firebaseapp.com",
    projectId: "divine-mingle",
    storageBucket: "divine-mingle.appspot.com",
    messagingSenderId: "28128964380",
    appId: "1:28128964380:web:21fb4cb1e07b17dcd6d4d9",
    measurementId: "G-1LW631WNWD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db


