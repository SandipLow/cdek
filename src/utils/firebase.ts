import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"
import { getAuth, onAuthStateChanged, User } from "firebase/auth"
import { useEffect, useState } from "react";

const firebaseConfig : FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const useAuth = ()=> {
  const [user, setUser] = useState<User | null>()

  useEffect(()=> {
    onAuthStateChanged(auth, (_user)=> setUser(_user))
  }, [])

  return user
}

const db = getFirestore(app)
const storage = getStorage(app, 'gs://cdek-8927886351.appspot.com');


export { app, db, storage, auth, useAuth };