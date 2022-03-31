import React, { useState, useEffect } from 'react'
import { db } from '../../firebase/config'
import { updateDoc, doc} from "firebase/firestore";
import './style.css'

export default function EditInfo(props) {
    
    const [data, setData] = useState(null) //copy of data from db
    const [docId, setDocId] = useState(null)
    const [name, setName] = useState(null)
    const [shortDesc, setShortDesc] = useState(null)
    const [imageUrl, setImageUrl] = useState(null) //Show image of game
    const [images, setImages] = useState(null) // all images links in array from db
    const [newImages, setNewImages] = useState("add Image URL") // new Image URL entered in form
    const [imagesUrl, setImagesUrl] = useState([]) // array of input elements of all images links
    const [desc, setDesc] = useState(null)
    const [releasedOn, setReleasedOn] = useState(null)
    const [lastUpdate, setLastUpdate] = useState(null)
    const [version, setVersion] = useState(null)
    const [whatsnew, setWhatsnew] = useState(null) // array of whatsnew from db
    const [newWhatsnew, setNewWhatsnew] = useState("add new") // new whatsnew entered in the form
    const [whatsNew, setWhatsNew] = useState([]) // array of input elements of all whatsnew

    // Links from db
    const [android, setAndroid] = useState(null)
    const [windows, setWindows] = useState(null)
    const [source, setSource] = useState(null)

    const [loading, setLoading] = useState(true)

    // Getting Data from db. To run once input array is kept empty... 
    useEffect(() => {

        const set = async ()=> {
            setData(props.data);
            setDocId(props.id);
            setName(props.data.name);
            setShortDesc(props.data.shortDesc)
            setImageUrl(props.data.imageUrl)
            setImages(props.data.images)
            setDesc(props.data.description);
            setReleasedOn(props.data.version.releasedOn);
            setLastUpdate(props.data.version.lastUpdate);
            setVersion(props.data.version.version);
            setWhatsnew(props.data.version.whatsNew);
            setAndroid(props.data.links.android);
            setWindows(props.data.links.windows);
            setSource(props.data.links.source);

            setLoading(false);
        }

        set();

        // eslint-disable-next-line
    }, [])
    
    // forming array of input elements of whatsnew and images. To rerun whenever array is modified input array given.

    useEffect(() => {

        if (whatsnew) {
            let whatsNew = whatsnew.map((e)=>
                <input defaultValue={e} key={whatsnew.indexOf(e)} ></input>
            )

            setWhatsNew(whatsNew);
        }

    }, [whatsnew])
    
    useEffect(() => {

        if (images) {
            let imagesUrl = images.map((e)=>
                <input defaultValue={e} key={images.indexOf(e)} ></input>
            )

            setImagesUrl(imagesUrl);
        }

    }, [images])

    // Submission of Info form...
    const handleSubmit = (e)=> {
        e.preventDefault();
        updateDoc(doc(db, "games", `${docId}`), 
        {
            description : desc ,
            imageUrl : imageUrl ,
            images : images,
            name : name ,
            shortDesc : shortDesc ,
            version : {
                lastUpdate : lastUpdate ,
                releasedOn : releasedOn ,
                version : version ,
                whatsNew : whatsnew
            }

        });
        alert("Saved..!");
    }

    // Submission of links form
    const handleSubmitLinks = (e)=> {
        e.preventDefault();
        updateDoc(doc(db, "games", `${docId}`), 
        {
            links : {
                android : android ,
                source : source ,
                windows : windows
            }
        });
        alert("Saved..!");
    }


    if (loading) {
        return (<p>loading...</p>)
    }

    return (
        <>
        <br/>
        <div className="full-width">
            <form className="about" id="editInfo" onSubmit={handleSubmit}>

                <label>Name : </label><br/>
                <input name="name" placeholder={data.name} value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
                
                <label>Display Image Url : </label><br/>
                <input name="imageUrl" placeholder={data.version.imageUrl} value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}></input><br/>

                <label>Short Description : </label><br/>
                <textarea name="shortDesc" placeholder={data.shortDesc} value={shortDesc} rows="5" onChange={(e)=>setShortDesc(e.target.value)}></textarea><br/>

                {   imagesUrl   }
                <input value={newImages} onChange={(e)=>{setNewImages(e.target.value)}}></input>

                <button onClick={(e)=>{
                    e.preventDefault()
                    let copy = [...images];
                    copy = [...copy, newImages];
                    setImages(copy)
                }}>+</button>

                <button onClick={(e)=>{
                    e.preventDefault()
                    let copy = [...images];
                    copy.pop();
                    setImages(copy)
                }}>-</button><br/>

                <label>Description : </label><br/>
                <textarea name="desc" placeholder={data.description} value={desc} rows="5" onChange={(e)=>setDesc(e.target.value)}></textarea><br/>

                <label>Made on : </label><br/>
                <input name="releasedOn" placeholder={data.version.releasedOn} value={releasedOn} onChange={(e)=>setReleasedOn(e.target.value)}></input><br/>

                <label>Last Update : </label><br/>
                <input name="lastUpdate" placeholder={data.version.lastUpdate} value={lastUpdate} onChange={(e)=>setLastUpdate(e.target.value)}></input><br/>

                <label>Version : </label><br/>
                <input name="version" placeholder={data.version.version} value={version} onChange={(e)=>setVersion(e.target.value)}></input><br/>

                <label>What's new :</label><br/>

                {   whatsNew   }
                <input value={newWhatsnew} onChange={(e)=>{setNewWhatsnew(e.target.value)}}></input>

                <button onClick={(e)=>{
                    e.preventDefault()
                    let copy = [...whatsnew];
                    copy = [...copy, newWhatsnew];
                    setWhatsnew(copy)
                }}>+</button>

                <button onClick={(e)=>{
                    e.preventDefault()
                    let copy = [...whatsnew];
                    copy.pop();
                    setWhatsnew(copy)
                }}>-</button><br/>
                
                <button type="submit">Save</button>
            </form>
        </div>
        <br/><br/><br/>

        <center>
            <center style={{width: 'fit-content'}}>
                {/* <a href={links.android}><div className="download-links">Download APK</div></a>
                <a href={links.windows}><div className="download-links">Download Windows</div></a>
                <a href={links.source}><div className="download-links">Source Code</div></a> */}
                <form onSubmit={handleSubmitLinks}>
                    <div className="download-links">Download APK : <input placeholder={android} value={android} onChange={(e)=>{setAndroid(e.target.value)}}></input></div>
                    <div className="download-links">Download Windows : <input placeholder={windows} value={windows} onChange={(e)=>{setWindows(e.target.value)}}></input></div>
                    <div className="download-links">Source Code : <input placeholder={source} value={source} onChange={(e)=>{setSource(e.target.value)}}></input></div>
                    <a href={`/playonline/${props.name}`}><div className="download-links">Play online</div></a>
                    <button type="submit">Save Links</button>
                </form>
                
            </center>
        </center>
        <br/>
        </>
    )
}
