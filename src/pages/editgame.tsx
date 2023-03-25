import { faClose, faCross, faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from "firebase/storage"
import { ChangeEvent, useEffect, useRef, useState, MouseEvent } from "react"
import { useLoaderData } from "react-router-dom"
import Banner from "../components/banner/banner_game"
import EditGameInfo from "../components/game-info/edit_game_info"
import FaLoading from "../components/loading/faLoading"
import { uploadGameImage } from "../utils/api"
import { db, storage } from "../utils/firebase"
import { GameData } from "../utils/interfaces"
import { errorHandler } from "../utils/tools"

const EditGame = ()=>  {
    const data: GameData|any = useLoaderData()
    const [formData, setFormData] = useState<GameData|null>(data)
    const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false)
    const [srcInitial, setSrcInitial] = useState<string>("")

    if (!data || !formData) {
        return (<></>)
    }

    return (
        <>
        <Banner title={"Editing : " + data.name} />
        <UploadModal 
            open={uploadModalOpen} 
            setOpen={setUploadModalOpen} 
            srcInitial={srcInitial} 
            gameData={data}
        />
        <section className='h-72 py-3 px-1 bg-cdek-gray w-full flex overflow-x-auto'>
            {
                data.images.map((url: string, ind: number)=>{
                    return (
                        <div key={ind} className="relative h-full inline-block mx-2">
                            <img key={ind} src={url} alt={`img${ind}`} className='h-full object-cover' />
                            <button 
                                onClick={e=>{
                                    setUploadModalOpen(true)
                                    setSrcInitial(url)
                                }} 
                                className="absolute bg-white rounded-full top-2 right-2 h-8 w-8">
                                <FontAwesomeIcon icon={faEdit}  />
                            </button>
                        </div>
                    )
                })
            }
        </section>
        <EditGameInfo 
            shortDescription={data.shortDesc} 
            description={data.description} 
            versionInfo={data.version}
            formData= {formData}
            setFormData = {setFormData}
        />
        </>
    )
}

export default EditGame

interface UploadModalProps {
    open: boolean,
    setOpen: Function
    srcInitial?: string
    gameData: GameData
}

const UploadModal = ({ open, setOpen, srcInitial, gameData }: UploadModalProps)=> {
    if (!open) return (<></>)

    const previewUploadRef = useRef<HTMLImageElement>(null)
    const [uploadTask, setUploadTask] = useState<null | UploadTask>(null)
    const [selectedImage, setSelectedImage] = useState<File|null>(null)
    const [progress, setProgress] = useState<number|null>()

    useEffect(()=> {

        previewUploadRef.current ? previewUploadRef.current.src = srcInitial ? srcInitial : "" : null
    }, [srcInitial])

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=> {
        if (!e.target.files) return
        if (!previewUploadRef.current) return

        setSelectedImage(e.target.files[0])

        previewUploadRef.current.src = URL.createObjectURL(e.target.files[0]);
    }

    const handleUpload = async (e: MouseEvent<HTMLButtonElement>)=> {
        if (!selectedImage) return

        await uploadGameImage(
            selectedImage, 
            gameData, 
            srcInitial !== null,
            srcInitial ? gameData.images.indexOf(srcInitial) : -1,
            // uploading callback
            (_uploadtask: UploadTask, progressSnap: number) =>{
                setUploadTask(_uploadtask)
                setProgress(progressSnap)
            },
            // success callback
            () => {
                setSelectedImage(null);
                setOpen(false);
                setProgress(null);
            },
            // error callback
            (err: any) => {
                setSelectedImage(null);
                setOpen(false);
                setProgress(null);
            }
        )

    }

    return (
        <div className="fixed top-0 left-0 z-10 h-screen w-screen bg-black bg-opacity-80 grid">
            <button onClick={e=>setOpen(false)} className="absolute top-12 right-4 w-12 h-12 text-3xl text-white text-opacity-50 hover:text-opacity-100 transition-colors">
                <FontAwesomeIcon icon={faClose} />
            </button>
            <div className="place-self-center bg-white p-4 w-96">
                <input className="w-full p-2 border" type="file" onChange={handleChange} />
                <img className="w-full my-2" ref={previewUploadRef} src={srcInitial} alt="preview" />
                {
                    uploadTask ? <div className="p-2 text-blue-600">
                        <button className="border border-blue-600 p-2 text-blue-600"><FaLoading/></button>
                        <button onClick={()=>uploadTask.cancel()} className="border border-blue-600 p-2 text-blue-600">Cancel</button>
                        <span>{progress} %</span>
                    </div>
                    : <button onClick={handleUpload} className="border border-blue-600 p-2 text-blue-600">Submit</button>
                }
            </div>
        </div>
    )
}