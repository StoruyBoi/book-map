
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAWSRskykldPDBrJKGQbnUtWR1Hu8iHdfQ",
  authDomain: "books-f8d66.firebaseapp.com",
  projectId: "books-f8d66",
  storageBucket: "books-f8d66.appspot.com",
  messagingSenderId: "883027478751",
  appId: "1:883027478751:web:0a4ccdab86c9c6ed9fc16a"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;