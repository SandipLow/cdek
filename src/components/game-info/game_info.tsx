import React from 'react'
import { VersionInformation } from '../../utils/interfaces';

export interface Props {
    shortDescription: string;
    description: string;
    versionInfo: VersionInformation;
}

const GameInfo = (props: Props) => {
  return (
    <section className='my-4 md:flex'>

        <div className='w-full py-6 px-6'>
            <p>{props.shortDescription}</p>
            <p className='mt-6'>{props.description}</p>
        </div>
        <div className='bg-cdek-gray my-2 hidden md:block' style={{width: '1px', height: 'inherit'}}></div>
        <div className='w-full py-6 px-6'>
            <div>
                <h2 className=' font-semibold'>Made on :</h2>
                <span>{props.versionInfo.releasedOn}</span>
            </div>
            <div className='my-2'>
                <h2 className=' font-semibold'>Last Update :</h2>
                <span>{props.versionInfo.lastUpdate}</span>
            </div>
            <div className='my-2'>
                <h2 className=' font-semibold'>Version :</h2>
                <span>{props.versionInfo.version}</span>
            </div>
            <div className='my-2'>
                <h2 className=' font-semibold'>What's New :</h2>
                {
                    props.versionInfo.whatsNew.map((ele, ind)=>{
                        return <li key={ind}>{ele}</li>
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default GameInfo