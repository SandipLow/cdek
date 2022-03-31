import React, { useState } from 'react'
import './style.css'

export default function Crousel(props) {

    const [i, setI] = useState(0)

    function prevImage() {
        if (i !== 0) {
            setI(i - 1)
        }
        else {
            setI(props.images.length - 1)
        }
    }

    function nextImage() {
        if (i !== props.images.length - 1) {
            setI(i + 1)
        }
        else {
            setI(0)
        }
    }

    return (
        <>
            <div className="crousel flex">
                <div className="crousel-image flex" style={{ backgroundImage: `url(${props.images[i]})` }}>
                    {/* {
                        user ?
                        <div>
                            <button className="btn btn-blue bg-trans" onClick={prevImage}> {"🗑️"} </button>
                            <button className="btn btn-blue bg-trans" onClick={nextImage}> {"✍️"} </button>
                        </div>
                        : null
                    } */}
                    <button className="btn btn-blue bg-trans" onClick={prevImage}> {"⏮"} </button>
                    <button className="btn btn-blue bg-trans" onClick={nextImage}> {"⏭"} </button>
                </div>
                <script src={props.scriptlink}></script>
            </div>
        </>
    )
}
