import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, Timestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "./firebase";
import { GameData } from "./interfaces";
import { errorHandler } from "./tools";


export function useGames() {
    const [games, setGames]: any = useState([]);

    useEffect(() => {
        const q = query(collection(db, "games"))

        console.log(games);


        const unsubscribe = onSnapshot(q, (snapshot) => {
            const mapped = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            setGames(mapped)
        })

        return () => unsubscribe()
    }, [])

    return games;
}

export async function getGames(): Promise<GameData[] | any> {

    const q = query(collection(db, "games"))

    const snapshot = await getDocs(q)

    const mapped = snapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))

    return mapped
}

export async function getGame(gameId: string): Promise<any> {

    const docRef = doc(db, "games", gameId)
    const snapshot = await getDoc(docRef)

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

export function useComments(gameId: string): Array<any> {
    const [comments, setComments]: any = useState([]);

    useEffect(() => {
        const q = query(collection(db, `games/${gameId}/comments`), orderBy("time", "desc"))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const mapped = snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            setComments(mapped)
        })

        return () => unsubscribe()
    }, [])

    return comments
}

export async function getComments(gameId: string) {

    const q = query(collection(db, `games/${gameId}/comments`))

    const snapshot = await getDocs(q)

    const mapped = snapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))

    return mapped
}

export async function getComment(gameId: string, commentId: string) {

    const snapshot = await getDoc(doc(db, `games/${gameId}/comments/${commentId}`))

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

export async function addComment(Admin: boolean = false, formData: any) {
    let doc;

    if (!Admin) {
        doc = await addDoc(collection(db, `games/${formData.game_id}/comments`), {
            name: formData.name,
            comment: formData.comment,
            time: Timestamp.now(),
            Admin: false
        })
    } else {
        doc = await addDoc(collection(db, `games/${formData.game_id}/comments`), {
            name: formData.name,
            comment: formData.comment,
            time: Timestamp.now(),
            Admin: true
        })
    }

    if (doc.id) {
        alert("Thanks for feedback 💙. Your comment ID : " + doc.id)
    } else {
        alert("Some Error occured...")
        console.log(doc)
    }

    return doc
}

export async function uploadGameImage(
    selectedImage: File, 
    gameData: GameData, 
    isUpdate: boolean,
    indexOfImage: number,
    uploadingCallback: Function, 
    successCallback: Function, 
    errorCallback: Function
) {
    const fileRef = ref(storage, `games/${gameData.id}/${selectedImage.name}`)

    const _uploadTask = uploadBytesResumable(fileRef, selectedImage)

    _uploadTask.on(`state_changed`, (snapshot) => {
            const progressSnap = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploadingCallback(_uploadTask, progressSnap)

            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }

        },
        async (err) => {
            await errorHandler(JSON.stringify(err))

            errorCallback(err)
        },
        async () => {
            const url = await getDownloadURL(_uploadTask.snapshot.ref)

            // update
            if (isUpdate) {
                let copy = gameData.images
                copy[indexOfImage] = url
    
                await updateDoc(doc(db, 'games/'+gameData.id), {
                    ...gameData,
                    images: copy
                })
            } 
            // upload
            else {
                await updateDoc(doc(db, 'games/'+gameData.id), {
                    ...gameData,
                    images: [...gameData.images, url]
                })
            }

            successCallback()
        }
    );
}

export async function setGameData() { }
