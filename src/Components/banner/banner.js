import React from 'react'
import './style.css'

export default function Banner(props) {
    return (
        <>
        <div className='parallax full-width'>
            <div className='el'></div>
            <span className="greet">{props.title}</span>
        </div>
        </>
    )
}
