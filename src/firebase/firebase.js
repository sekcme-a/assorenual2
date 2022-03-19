import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB_du_gTqW32Zx0bauQKrOB6w9JKlY_SEQ",
  authDomain: "sportsassorenual.firebaseapp.com",
  projectId: "sportsassorenual",
  storageBucket: "sportsassorenual.appspot.com",
  messagingSenderId: "109068236759",
  appId: "1:109068236759:web:c031b9dc1528f52e1d7d92"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const FieldValue = firebase.firestore.FieldValue;
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();