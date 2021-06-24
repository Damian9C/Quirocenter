import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvMvLNAqyUD5CEZs5DpUN9c1rPASt_hkw",
    authDomain: "scholl-gestor.firebaseapp.com",
    databaseURL: "https://scholl-gestor-default-rtdb.firebaseio.com",
    projectId: "scholl-gestor",
    storageBucket: "scholl-gestor.appspot.com",
    messagingSenderId: "326131924008",
    appId: "1:326131924008:web:63f5999e5533267125c91d"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth }