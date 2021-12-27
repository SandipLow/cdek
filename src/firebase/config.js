import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"

const app = initializeApp({
    apiKey: "AIzaSyAn3eeoZ52fCepqUmgc2X7UOGFlMT8w7CI",
    authDomain: "cdek-8927886351.firebaseapp.com",
    projectId: "cdek-8927886351",
});

const db = getFirestore(app)

const storage = getStorage(app, 'gs://cdek-8927886351.appspot.com');


export { app, db, storage };