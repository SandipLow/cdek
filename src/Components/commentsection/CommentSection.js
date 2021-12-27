import React, { useState, useEffect } from 'react'
import Comment from './Comment';
import './style.css'
import { db } from '../../firebase/config'
import { onSnapshot, collection, query, where, orderBy, addDoc, Timestamp } from "firebase/firestore";

export default function CommentSection(props) {

    const [loadingComments, setLoadingComments] = useState(true)
    const [Comments, setComments] = useState([])
    const [docId, setDocId] = useState("")

    
    useEffect(() => {

        const q = query(collection(db, "games"), where('name', '==', props.name))

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // setComments(doc.data().comments);
                // console.log(doc.id)
                setDocId(doc.id);

            });
            setLoadingComments(false);
        });

        if (docId !== "") {

            const q2 = query(collection(db, `games/${docId}/comments`), orderBy("time", "desc") )
    
            onSnapshot(q2, (querySnapshot) => {
                setComments(querySnapshot)
            });
            
        }

    }, [loadingComments])




    function handleSubmit(event) {
        alert('You added a comment..!');
        event.preventDefault();
        // console.log(document.getElementById('add-comment').comment.value)
        const form = document.getElementById('add-comment');

        addDoc(collection(db, `games/${docId}/comments`), {
            name: form.name.value,
            comment: form.comment.value,
            time: Timestamp.now()
        })
    }


    let comments = []

    Comments.forEach(doc=>{
        comments.push(
            <Comment key={doc.id} name={doc.data().name} time={doc.data().time.toDate().toString()} comment={doc.data().comment} />
        )
    })

    return (
        <>
        <div className="comment-section">
            <div className="add-comment">
                <h1>Feel free to comment</h1><br/>
                <form id="add-comment" onSubmit={handleSubmit}>
                    Name : <input type="text" name="name" required/><br/><br/>
                    <p>Comment :</p>
                    <textarea type="text" name="comment" required style={{width: '80%', height: '64px', margin: '15px'}}></textarea><br/>
                    <button className="btn btn-blue" type="submit">Submit</button>
                </form>
            </div>
        </div>

        {/* {comments.length==0 ? <p>Loading comments...</p> : comments} */}
        {loadingComments ? <p>Loading Comments...</p> : comments.length==0 ? <p className="comment">Be the first to comment here...!</p> : comments}
        </>
    )
}
