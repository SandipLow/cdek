import React from 'react'
import './style.css'

export default function GameInfo(props) {

    let whatsNew = []

    if (props.data) {
        props.data.version.whatsNew.forEach(e => {
            whatsNew.push(<li key={props.data.version.whatsNew.indexOf(e)}>{e}</li>)
        })
    }

    return (
        <>
        <br/>
        <div className="full-width">
            <div className="about">
                <p>{props.data.description}</p><br/>

                <h5>Made on : </h5>
                <p>{props.data.version.releasedOn}</p><br/>
                
                <h5>Last Update : </h5>
                <p>{props.data.version.lastUpdate}</p><br/>
                
                <h5>Version : </h5>
                <p>{props.data.version.version}</p><br/>
                
                <h5>Whats new : </h5>
                {whatsNew}

            </div>
        </div>
        <br/><br/><br/>

        <center>
            <center style={{width: '50%'}}>
                <a href={props.data.links.android}><div className="download-links">Download APK</div></a>
                <a href={props.data.links.windows}><div className="download-links">Download Windows</div></a>
                <a href={props.data.links.source}><div className="download-links">Source Code</div></a>
                <a href={`/playonline/${props.name}`}><div className="download-links">Play online</div></a>
            </center>
        </center>
        <br/>
        </>
    )
}
