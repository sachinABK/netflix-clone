import firebase from "firebase";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth();
export default db;
