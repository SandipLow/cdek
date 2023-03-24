import { doc, updateDoc } from "firebase/firestore";
import { Dispatch, version } from "react";
import { db } from "../../utils/firebase";
import { GameData, VersionInformation } from "../../utils/interfaces";

interface Props {
    shortDescription: string;
    description: string;
    versionInfo: VersionInformation;
    formData: GameData; 
    setFormData: Dispatch<React.SetStateAction<GameData|any>>;
}

const EditGameInfo = (props: Props)=> {
    const handleSubmit = async ()=> {
        await updateDoc(doc(db, 'games/'+props.formData.id), {...props.formData})

        alert("done..!")
    }

    return (
        <>
        <section className='my-4 md:flex'>

            <div className='w-full py-6 px-6'>
                <input className="block w-full" value={props.formData.shortDesc} onChange={e=>props.setFormData({...props.formData, shortDesc: e.target.value})} />
                <textarea className='mt-6 block w-full resize-none' rows={10} value={props.formData.description} onChange={e=>props.setFormData({...props.formData, description: e.target.value})} />
            </div>
            <div className='bg-cdek-gray my-2 hidden md:block' style={{width: '1px', height: 'inherit'}}></div>
            <div className='w-full py-6 px-6'>
                <div>
                    <h2 className=' font-semibold'>Made on :</h2>
                    <input 
                        value={props.formData.version.releasedOn} 
                        onChange={e=>{
                            props.setFormData({
                                ...props.formData, 
                                version: {
                                    ...props.formData.version, 
                                    releasedOn: e.target.value
                                }
                            })
                        }} />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>Last Update :</h2>
                    <input 
                        value={props.formData.version.lastUpdate} 
                        onChange={e=> {
                            props.setFormData({
                                ...props.formData,
                                version: {
                                    ...props.formData.version,
                                    lastUpdate: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>Version :</h2>
                    <input 
                        value={props.formData.version.version} 
                        onChange={e=> {
                            props.setFormData({
                                ...props.formData,
                                version: {
                                    ...props.formData.version,
                                    version: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>What's New :</h2>
                    {
                        props.formData.version.whatsNew.map((ele, ind)=>{
                            return <li key={ind}>
                                <input className="focus:outline mb-1" 
                                    value={ele} 
                                    onChange={e=> {
                                        props.setFormData({
                                            ...props.formData,
                                            version: {
                                                ...props.formData.version,
                                                whatsNew: props.formData.version.whatsNew,
                                                
                                            }
                                        })
                                    }}
                                />
                            </li>
                        })
                    }
                </div>
            </div>

        </section>
        <div className="my-4 text-center">
            <button onClick={handleSubmit} className="border border-blue-600 p-2 text-blue-600">Submit</button>
        </div>
        </>
    )
}

export default EditGameInfo