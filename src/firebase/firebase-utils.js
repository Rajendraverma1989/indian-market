import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBYgIl64by5-ub8BYbwO-r0NhmDzrmUu8s",
    authDomain: "crwn-db-d15d4.firebaseapp.com",
    databaseURL: "https://crwn-db-d15d4.firebaseio.com",
    projectId: "crwn-db-d15d4",
    storageBucket: "crwn-db-d15d4.appspot.com",
    messagingSenderId: "843924927349",
    appId: "1:843924927349:web:4894abf3124e9e6f54d93c",
    measurementId: "G-TBYCKCB3YE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;