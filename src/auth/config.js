
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBo6stmR8IiPMZTAiZi-W1Wkg21HY213nQ",
  authDomain: "fraction-app.firebaseapp.com",
  projectId: "fraction-app",
  storageBucket: "fraction-app.appspot.com",
  messagingSenderId: "fraction-app.appspot.com",
  appId: "1:481746138042:web:c2f4558f301458e106a383"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
const auth = firebaseApp.auth();
export default auth;