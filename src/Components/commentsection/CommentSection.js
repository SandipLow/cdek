import React, { useState, useEffect } from 'react'
import Comment from './Comment';
import './style.css'
import { db } from '../../firebase/config'
import { collection, query, orderBy, addDoc, Timestamp, getDocs } from "firebase/firestore";

export default function CommentSection(props) {

    const [loadingComments, setLoadingComments] = useState(true)
    const [Comments, setComments] = useState([])


    useEffect(() => {

        const q = query(collection(db, `games/${props.id}/comments`), orderBy("time", "desc") )

        getDocs(q)
        .then((snapshot)=>{
            // console.log("snapshot taken");
            setComments(snapshot)
            setLoadingComments(false)
        })


        // eslint-disable-next-line
    }, [loadingComments])


    function handleSubmit(event) {

        event.preventDefault();
        
        const form = document.getElementById('add-comment');

        if (props.loggedIn) {
            addDoc(collection(db, `games/${props.id}/comments`), {
                name: form.name.value,
                comment: form.comment.value,
                time: Timestamp.now(),
                Admin : true
            }).then((doc)=>{
                alert(`Your comment Id is ${doc.id}`)
                setLoadingComments(true)
            })
        } else {
            addDoc(collection(db, `games/${props.id}/comments`), {
                name: form.name.value,
                comment: form.comment.value,
                time: Timestamp.now()
            }).then((doc)=>{
                alert(`Thanks for feedback ❤.Your comment Id is ${doc.id}`)
                setLoadingComments(true)
            })
            
        }

    }


    let comments = []

    Comments.forEach(doc=>{
        comments.push(
            <Comment key={doc.id} 
            name={doc.data().name} 
            comment={doc.data().comment} 
            id={doc.id}
            gameName={props.id}
            time={doc.data().time.toDate().toString()} 
            isAdmin={doc.data().Admin} 
            loggedIn={props.loggedIn}
            setLoadingComments={setLoadingComments} />
        )
    })

    return (
        <>
        <div className="comment-section">
            <div className="add-comment">
                <h1>Any bug detected or have any suggestion. Please let me know.</h1><br/>
                <form id="add-comment" onSubmit={handleSubmit}>
                    Name : {props.loggedIn  ?<input type="text" name="name"  value="ADMIN✅" onChange={(e)=>{e.preventDefault()}} style={{color : "red"}}/> : <input type="text" name="name" required/>}<br/><br/>
                    <p>Comment :</p>
                    <textarea type="text" name="comment" required style={{width: '80%', height: '64px', margin: '15px'}}></textarea><br/>
                    <button className="btn btn-blue" type="submit">Submit</button>
                </form>
            </div>
        </div>

        {loadingComments ? <p>Loading Comments...</p> : comments.length===0 ? <p className="comment">Be the first to comment here...!</p> : comments}
        </>
    )
}
