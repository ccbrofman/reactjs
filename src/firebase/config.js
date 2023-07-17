
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth, GoogleAuthProvider, googleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBpXKkbXx5pBmM7FIt_KF7EUIRgSffCs1Q",
  authDomain: "reactjs-ccbrofman.firebaseapp.com",
  projectId: "reactjs-ccbrofman",
  storageBucket: "reactjs-ccbrofman.appspot.com",
  messagingSenderId: "932119165629",
  appId: "1:932119165629:web:febfe5f1ea0aba28ef55d4"
};


const app = initializeApp(firebaseConfig);
export const  db= getFirestore (app)
export const auth = getAuth (app)
export const provider = new GoogleAuthProvider ()