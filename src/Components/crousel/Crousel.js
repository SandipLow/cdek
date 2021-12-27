import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/config'
import { onSnapshot, collection, query, where } from "firebase/firestore";
import './style.css'

export default function Crousel(props) {

    const [i, setI] = useState(0)
    const [images, setImages] = useState([])

    function prevImage() {
        if (i !== 0) {
            setI(i - 1)
        }
        else {
            setI(images.length - 1)
        }
    }

    function nextImage() {
        if (i !== images.length - 1) {
            setI(i + 1)
        }
        else {
            setI(0)
        }
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "games"), where('name', '==', props.name))

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setImages(doc.data().images);
            });
            setLoading(false);
        });
    }, [loading])

    if (loading) {
        return(<p>Loading...</p>)
    }

    return (
        <>
            <div className="crousel flex">
                <div className="crousel-image flex" style={{ backgroundImage: `url(${images[i]})` }}>
                    <button className="btn btn-blue" onClick={prevImage}> prev </button>
                    <button className="btn btn-blue" onClick={nextImage}> next </button>
                </div>
                <script src={props.scriptlink}></script>
            </div>
        </>
    )
}
