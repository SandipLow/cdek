import { VersionInformation } from "../../utils/interfaces";

interface Props {
    shortDescription: string;
    description: string;
    versionInfo: VersionInformation;
}

const EditGameInfo = (props: Props)=> {
    return (
        <section className='my-4 md:flex'>

            <div className='w-full py-6 px-6'>
                <input className="block w-full" value={props.shortDescription} />
                <textarea className='mt-6 block w-full resize-none' rows={10} value={props.description} />
            </div>
            <div className='bg-cdek-gray my-2 hidden md:block' style={{width: '1px', height: 'inherit'}}></div>
            <div className='w-full py-6 px-6'>
                <div>
                    <h2 className=' font-semibold'>Made on :</h2>
                    <input value={props.versionInfo.releasedOn} />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>Last Update :</h2>
                    <input value={props.versionInfo.lastUpdate} />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>Version :</h2>
                    <input value={props.versionInfo.version} />
                </div>
                <div className='my-2'>
                    <h2 className=' font-semibold'>What's New :</h2>
                    {
                        props.versionInfo.whatsNew.map((ele, ind)=>{
                            return <li key={ind}>
                                <input className="focus:outline mb-1" value={ele} />
                            </li>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default EditGameInfo