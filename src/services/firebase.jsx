
//import { getAuth } from 'firebase/auth'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from 'firebase/compat/app';
import 'firebase/compat/firestore'

import 'firebase/compat/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyBM1q2KgG7kRP7H31WxMVivNoKM_l7b3cI",
  authDomain: "login-109a6.firebaseapp.com",
  projectId: "login-109a6",
  storageBucket: "login-109a6.appspot.com",
  messagingSenderId: "1093522931658",
  appId: "1:1093522931658:web:9502d74449f025f2955933",
  measurementId: "G-R1PM8MN485"
};

const firebase = app.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const auth = getAuth();

export { firebase, firestore, auth, createUserWithEmailAndPassword};
