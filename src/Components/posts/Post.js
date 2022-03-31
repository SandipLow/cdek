import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Post(props) {
    return (
        <>
        <Link to={props.link}>
            <div className="game">
                <img src={props.src}
                    alt={props.alt}
                    style={{backgroundSize: 'contain', width: '240px'}}/>
                <div className="title">{props.name}</div>
                <br/>
                <p>{props.desc}</p>
                <br/>
            </div>
        </Link>
        </>
    )
}
