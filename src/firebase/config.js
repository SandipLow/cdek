import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"

const app = initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
});

const db = getFirestore(app)

const storage = getStorage(app, 'gs://cdek-8927886351.appspot.com');


export { app, db, storage };
