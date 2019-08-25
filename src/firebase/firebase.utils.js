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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // Create a new user using the data provided by userAuth Object
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error Creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
