import React from 'react'
import './style.css'

export default function Comment(props) {
    return (
        <>
        <div className="comment">
            <h3>{props.name}</h3>
            <div className='timestamp'>{props.time}</div><hr/>
            <p>{props.comment}</p>
        </div>
        </>
    )
}
