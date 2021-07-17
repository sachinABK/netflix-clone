import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAB7tcfPLWYe0YEnKUbcHO13r-Gnb2NiTU",
  authDomain: "netflix-clone-d16e5.firebaseapp.com",
  projectId: "netflix-clone-d16e5",
  storageBucket: "netflix-clone-d16e5.appspot.com",
  messagingSenderId: "278969883366",
  appId: "1:278969883366:web:fff30f587d8ddf2329b927",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth();
export default db;
