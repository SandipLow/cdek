import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { GameData } from "./interfaces";


export function useGames() {
    const [games, setGames]: any = useState([]);

    useEffect(()=> {
        const q = query(collection(db, "games"))

        console.log(games);
        

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const mapped = snapshot.docs.map(doc=>(
                {
                    id: doc.id,
                    ...doc.data()
                }
            ))

            setGames(mapped)
        })

        return ()=> unsubscribe()
    }, [])

    return games;
}


export async function getGames() : Promise<GameData[]|any>{

    const q = query(collection(db, "games"))

    const snapshot = await getDocs(q)

    const mapped = snapshot.docs.map(doc=>(
        {
            id: doc.id,
            ...doc.data()
        }
    ))

    return mapped
}

export async function getGame(gameId: string) : Promise<any> {

    const docRef = doc(db, "games", gameId)
    const snapshot = await getDoc(docRef)

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

export function useComments(gameId: string) : Array<any> {
    const [comments, setComments]: any = useState([]);

    useEffect(() => {
        const q = query(collection(db, `games/${gameId}/comments`), orderBy("time", "desc"))

        const unsubscribe = onSnapshot(q, (snapshot)=>{
            const mapped = snapshot.docs.map(doc=>(
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

    const mapped = snapshot.docs.map(doc=>(
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

export async function addComment(Admin:boolean=false, formData: any) {
    let doc;

    if(!Admin) {
        doc = await addDoc(collection(db, `games/${formData.game_id}/comments`), {
            name: formData.name,
            comment: formData.comment,
            time: Timestamp.now()
        })
    } else {
        doc = await addDoc(collection(db, `games/${formData.id}/comments`), {
            name: formData.name.value,
            comment: formData.comment.value,
            time: Timestamp.now(),
            Admin : false
        })
    }

    if (doc.id) {
        alert("Thanks for feedback 💙. Your comment ID : "+doc.id)
    } else {
        alert("Some Error occured...")
        console.log(doc)
    }

    return doc
}

