
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import  {initializeApp} from "firebase/app"


export const firebaseConfig = {
  apiKey: "AIzaSyBM1q2KgG7kRP7H31WxMVivNoKM_l7b3cI",
  authDomain: "login-109a6.firebaseapp.com",
  projectId: "login-109a6",
  storageBucket: "login-109a6.appspot.com",
  messagingSenderId: "1093522931658",
  appId: "1:1093522931658:web:9502d74449f025f2955933",
  measurementId: "G-R1PM8MN485"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore(app);

export { auth , firestore, app }
export default firestore
