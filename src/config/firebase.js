import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyAFhPJYOYvkJPZutt0NX9REZFYL64Y5VRU",
  authDomain: "learn-firebase-55f18.firebaseapp.com",
  projectId: "learn-firebase-55f18",
  storageBucket: "learn-firebase-55f18.appspot.com",
  messagingSenderId: "312252785471",
  appId: "1:312252785471:web:735cf78b6934c856dce98a",
  measurementId: "G-2QVW43YLG2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)
