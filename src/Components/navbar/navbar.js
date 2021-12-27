import React, { useRef } from 'react'
import './style.css'

export default function Navbar() {
    const Navbar = useRef(null);

    const mb = () => {
        Navbar.current.classList.toggle('toggle');
    }

    return (
        <>
            <div className="navbar flex">
                <div className="navbar-items">
                    <div id="menubtn" onClick={mb}></div>
                    <div id="logo"></div>
                    <div id="title">CDEK</div>
                </div>
                <nav className="navbar-items">
                    <ul id="links-1">
                        <i style={{marginLeft: '1vw'}}><a href="/CDEK">Home</a></i>
                        <i style={{marginLeft: '1vw'}}><a href="/#About">About</a></i>
                        <i style={{marginLeft: '1vw'}}><a href="/#Contact">Contact</a></i>
                    </ul>
                    <div id="searchbar">
                        Search : <input name="query" type="text" style={{width: '90px', opacity: '100%'}}/>
                    </div>
                </nav>
                <nav id="links-2" className="navbar-items toggle" ref={Navbar}>
                    <i style={{marginLeft: '1vw'}}><a href="/CDEK">Home</a></i>
                    <i style={{marginLeft: '1vw'}}><a href="/#About">About</a></i>
                    <i style={{marginLeft: '1vw'}}><a href="/#Contact">Contact</a></i>
                </nav>
            </div>
        </>
    )
}

