import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "SECRETKEY_API",
  authDomain: "pantry-tracker-27b76.firebaseapp.com",
  projectId: "pantry-tracker-27b76",
  storageBucket: "pantry-tracker-27b76.appspot.com",
  messagingSenderId: "508002758300",
  appId: "1:508002758300:web:ccd9e7401b2fb60c1a4759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);

export {firestore}
