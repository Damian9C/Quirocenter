import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBlcacO30kvgcMd6Wf2-kNgJ2r_zKTUrXo",
    authDomain: "quirocenter-2dadb.firebaseapp.com",
    projectId: "quirocenter-2dadb",
    storageBucket: "quirocenter-2dadb.appspot.com",
    messagingSenderId: "565384727979",
    appId: "1:565384727979:web:f1484298107308144416ee"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {db}

const auth = firebase.auth();
export { auth }