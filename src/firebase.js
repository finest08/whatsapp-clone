import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIX1BcBVsHOzir9TIXuwtgpl3DlWGcRVQ",
    authDomain: "whatsapp-clone-ce1ea.firebaseapp.com",
    projectId: "whatsapp-clone-ce1ea",
    storageBucket: "whatsapp-clone-ce1ea.appspot.com",
    messagingSenderId: "829722005978",
    appId: "1:829722005978:web:5a37d57c1a0855615570e3",
    measurementId: "G-2V0WQP2S8P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =  new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;