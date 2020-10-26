import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA7YLWIlCAKLfMBjOtxkGfI4z0iFhu18Bk",
    authDomain: "catch-of-the-day-dom-cole.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-dom-cole.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is  default export
export default base;