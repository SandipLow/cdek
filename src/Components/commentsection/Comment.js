import { deleteDoc, doc, updateDoc, Timestamp } from '@firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { db } from '../../firebase/config'
import './style.css'

export default function Comment(props) {

    const [comment, setComment] = useState(props.comment)

    //=========================================================
    // ====================== ALL PROPS ======================
    // name : commentor , 
    // comment = comment , 
    // id = comment document Id , 
    // gameName = Name of the game, 
    // time = time of the comment made , 
    // isAdmin = comment from admin or not , 
    // loggedIn = Admin Seeing this ornot
    // setLoadingComments = reload comment section

    const Save = ()=>{
        updateDoc(doc(db, "games", props.gameName, "comments", props.id), {
            comment : comment,
            time: Timestamp.now()
        })
        .then(()=>{
            alert("Doc updated")
            props.setLoadingComments(true)
        })
        .catch((error)=>{
            alert(`Eror updating document : ${error}`)
        })
    }

    const Delete = ()=>{
        deleteDoc(doc(db, "games", props.gameName, "comments", props.id))
        .then(()=>{
            alert(`Doc ${props.id} updated`)
            props.setLoadingComments(true)
        })
        .catch((error)=>{
            alert(`Eror deleting document : ${error}`)
        })
    }

    return (
        <>
        <div className="comment">
            {
                props.isAdmin ? <h3 style={{color : 'brown'}}>{props.name}</h3> 
                : <h3>{props.name}</h3>
            }

            <div className='timestamp'>{props.time}</div><hr/>

            { 
                props.loggedIn ? <input value={comment} onChange={(e)=>{setComment(e.target.value)}} />
                :   props.isAdmin ? <p style={{color : 'blue'}}>{props.comment}</p>
                    : <p>{props.comment}</p>
            }

            {
                props.loggedIn ? 
                <div>
                    <button onClick={Save} >Save</button>
                    <button onClick={Delete} >Delete</button>
                </div>

                :null
            }
        </div>
        </>
    )
}
