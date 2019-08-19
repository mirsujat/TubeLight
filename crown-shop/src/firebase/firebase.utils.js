import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJjV1nBBeJPazKQYqKo64fhpczQ5c8_d8",
  authDomain: "crown-db-ee9de.firebaseapp.com",
  databaseURL: "https://crown-db-ee9de.firebaseio.com",
  projectId: "crown-db-ee9de",
  storageBucket: "",
  messagingSenderId: "487820922335",
  appId: "1:487820922335:web:9fa345be830fb627"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
