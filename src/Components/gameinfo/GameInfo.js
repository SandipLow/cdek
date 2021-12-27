import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/config'
import { onSnapshot, collection, query, where } from "firebase/firestore";
import './style.css'

export default function GameInfo(props) {

    const [desc, setDesc] = useState(null)
    const [version, setVersion] = useState(null)
    const [whatsnew, setWhatsnew] = useState([])
    const [links, setLinks] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "games"), where('name', '==', props.name))

        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(doc.data())
                setDesc(doc.data().description);
                setVersion(doc.data().version);
                setWhatsnew(doc.data().version.whatsNew)
                setLinks(doc.data().links)
            });
            setLoading(false);
        });

    }, [loading])

    const whatsNew = [];
    var i = 0;
    whatsnew.forEach(e=>{
        whatsNew.push(<li key={i} >{e}</li>)
        i=i+1;
    })

    if (loading) {
        return (<p>loading...</p>)
    }

    return (
        <>
        <br/>
        <div className="full-width">
            <div className="about">
                <p>{desc}</p><br/>
                <h5>Made on : </h5>
                <p>{version.releasedOn}</p><br/>
                <h5>Last Update : </h5>
                <p>{version.lastUpdate}</p><br/>
                <h5>Version : </h5>
                <p>{version.version}</p><br/>
                <h5>Whats new : </h5>
                {whatsNew}
            </div>
        </div>
        <br/><br/><br/>

        <center>
            <center style={{width: '50%'}}>
                <a href={links.android}><div className="download-links">Download APK</div></a>
                <a href={links.windows}><div className="download-links">Download Windows</div></a>
                <a href={links.source}><div className="download-links">Source Code</div></a>
                <a href={`/playonline/${props.name}`}><div className="download-links">Play online</div></a>
            </center>
        </center>
        <br/>
        </>
    )
}
