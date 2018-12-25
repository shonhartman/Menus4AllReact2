import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAbS09ovvIUeCf2OKEMqvM2mWDzfrcG4eg",
    authDomain: "menus-for-all-473db.firebaseapp.com",
    databaseURL: "https://menus-for-all-473db.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;