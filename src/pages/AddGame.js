import { collection, addDoc } from '@firebase/firestore'
import { db } from '../firebase/config'
import React, { useState, useEffect } from 'react'
import Banner from '../Components/banner/banner'

export default function AddGame() {

    const [name, setName] = useState("")
    const [shortDesc, setShortDesc] = useState("")
    const [imageUrl, setImageUrl] = useState("") //Show image of game
    const [images, setImages] = useState("") // all images links in array from db
    const [newImages, setNewImages] = useState("add Image URL") // new Image URL entered in form
    const [imagesUrl, setImagesUrl] = useState([]) // array of input elements of all images links
    const [desc, setDesc] = useState("")
    const [releasedOn, setReleasedOn] = useState("")
    const [lastUpdate, setLastUpdate] = useState("")
    const [version, setVersion] = useState("")
    const [whatsnew, setWhatsnew] = useState("") // array of whatsnew from db
    const [newWhatsnew, setNewWhatsnew] = useState("add new") // new whatsnew entered in the form
    const [whatsNew, setWhatsNew] = useState([]) // array of input elements of all whatsnew

    // Links from db
    const [android, setAndroid] = useState("")
    const [windows, setWindows] = useState("")
    const [source, setSource] = useState("")

    // forming array of input elements of whatsnew and images. To rerun whenever array is modified input array given.

    useEffect(() => {

        if (whatsnew) {
            let whatsNew = whatsnew.map((e) =>
                <input defaultValue={e}></input>
            )

            setWhatsNew(whatsNew);
        }

    }, [whatsnew])

    useEffect(() => {

        if (images) {
            let imagesUrl = images.map((e) =>
                <input defaultValue={e}></input>
            )

            setImagesUrl(imagesUrl);
        }

    }, [images])

    // Submission of Info form...
    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "games"),
            {
                description: desc,
                imageUrl: imageUrl,
                images: images,
                links: {
                    android: android,
                    source: source,
                    windows: windows
                },
                name: name,
                shortDesc: shortDesc,
                version: {
                    lastUpdate: lastUpdate,
                    releasedOn: releasedOn,
                    version: version,
                    whatsNew: whatsnew
                }

            });
        alert("Saved..!");
    }

    return (
        <>
        <Banner title="ADD GAME DATA" />
            <br />
            <div className="full-width">
                <form className="about" id="editInfo" onSubmit={handleSubmit}>

                    <label>Name : </label><br />
                    <input name="name" value={name} onChange={(e) => setName(e.target.value)}></input><br />

                    <label>Display Image Url : </label><br />
                    <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input><br />

                    <label>Short Description : </label><br />
                    <textarea name="shortDesc" value={shortDesc} rows="5" onChange={(e) => setShortDesc(e.target.value)}></textarea><br />

                    {imagesUrl}
                    <input value={newImages} onChange={(e) => { setNewImages(e.target.value) }}></input>

                    <button onClick={(e) => {
                        e.preventDefault()
                        let copy = [...images];
                        copy = [...copy, newImages];
                        setImages(copy)
                    }}>+</button>

                    <button onClick={(e) => {
                        e.preventDefault()
                        let copy = [...images];
                        copy.pop();
                        setImages(copy)
                    }}>-</button><br />

                    <label>Description : </label><br />
                    <textarea name="desc" value={desc} rows="5" onChange={(e) => setDesc(e.target.value)}></textarea><br />

                    <label>Made on : </label><br />
                    <input name="releasedOn" value={releasedOn} onChange={(e) => setReleasedOn(e.target.value)}></input><br />

                    <label>Last Update : </label><br />
                    <input name="lastUpdate" value={lastUpdate} onChange={(e) => setLastUpdate(e.target.value)}></input><br />

                    <label>Version : </label><br />
                    <input name="version" value={version} onChange={(e) => setVersion(e.target.value)}></input><br />

                    <label>What's new :</label><br />

                    {whatsNew}
                    <input value={newWhatsnew} onChange={(e) => { setNewWhatsnew(e.target.value) }}></input>

                    <button onClick={(e) => {
                        e.preventDefault()
                        let copy = [...whatsnew];
                        copy = [...copy, newWhatsnew];
                        setWhatsnew(copy)
                    }}>+</button>

                    <button onClick={(e) => {
                        e.preventDefault()
                        let copy = [...whatsnew];
                        copy.pop();
                        setWhatsnew(copy)
                    }}>-</button><br />

                    <div>Download APK : <input value={android} onChange={(e) => { setAndroid(e.target.value) }}></input></div>
                    <div>Download Windows : <input value={windows} onChange={(e) => { setWindows(e.target.value) }}></input></div>
                    <div>Source Code : <input value={source} onChange={(e) => { setSource(e.target.value) }}></input></div>
                    <a href={`/playonline/${name}`}><div>Play online</div></a>

                    <button type="submit">Save</button>
                </form>
            </div>
            <br /><br /><br />
        </>
    )
}
