import firebase from "firebase";
let apiKey;
let authDomain;
let projectId;
let storageBucket;
let messagingSenderId;
let appId;

if (process.env.NODE_ENV !== "production") {
  apiKey = process.env.REACT_APP_FIRESTORE_API_KEY;
  authDomain = process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN;
  projectId = process.env.REACT_APP_FIRESTORE_PROJECT_ID;
  storageBucket = process.env.REACT_APP_FIRESTORE_STORAGEBUCKET;
  messagingSenderId = process.env.REACT_APP_FIRESTORE_MESSAGINGSENDER_ID;
  appId = process.env.REACT_APP_FIRESTORE_APP_ID;
} else {
  apiKey = process.env.FIRESTORE_API_KEY;
  authDomain = process.env.FIRESTORE_AUTH_DOMAIN;
  projectId = process.env.FIRESTORE_PROJECT_ID;
  storageBucket = process.env.FIRESTORE_STORAGEBUCKET;
  messagingSenderId = process.env.FIRESTORE_MESSAGINGSENDER_ID;
  appId = process.env.FIRESTORE_APP_ID;
}
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const auth = firebase.auth();
export default db;
