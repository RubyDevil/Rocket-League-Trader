import firebase from "firebase";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyClFMwV93UPE6sp1p39gqA8fGJr-lMt5R4",
  authDomain: "form-df870.firebaseapp.com",
  databaseURL: "https://form-df870.firebaseio.com",
  projectId: "form-df870",
  storageBucket: "form-df870.appspot.com",
  messagingSenderId: "663838584825",
  appId: "1:663838584825:web:60b0a92e498f9fbd781728"
};
// Initialize Firebase
firebase.initializeApp(config);
// Firebase Data
export var db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
