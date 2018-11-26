import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBl_1X7jWvdq5dBy4pV2JpZcujGLKarEyw",
    authDomain: "menus-for-all.firebaseapp.com",
    databaseURL: "https://menus-for-all.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;