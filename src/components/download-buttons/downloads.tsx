import { faAndroid, faHtml5, faWindows } from '@fortawesome/free-brands-svg-icons'
import { faCode, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { DownloadLinks } from '../../utils/interfaces'

const Downloads = (props: DownloadLinks) => {
  return (
    <section className='w-full'>
        <h1 className="font-bebas-neue text-4xl pl-4 mb-2" >Download Links :</h1><hr className="mb-2" />
        <div className='w-full my-4 flex justify-center'>
            <div className='w-fit text-white'>
                <a href={props.android}>
                    <button className='w-52 text-green-600 border border-solid border-green-500 transition-colors hover:bg-green-500 hover:text-white relative m-1 text-left px-4 py-2 rounded-md'>
                        <FontAwesomeIcon icon={faDownload} className='mr-2'/>
                        <span>Android</span>
                        <FontAwesomeIcon icon={faAndroid} className='absolute right-4 bottom-1 bg-white text-green-500 rounded-full p-2'/>
                    </button><br />
                </a>
                <a href={props.windows}>
                    <button className='w-52 text-sky-600 border border-solid border-sky-500 transition-colors hover:bg-sky-500 hover:text-white relative m-1 text-left px-4 py-2 rounded-md'>
                        <FontAwesomeIcon icon={faDownload} className='mr-2'/>
                        <span>Windows</span>
                        <FontAwesomeIcon icon={faWindows} className='absolute right-4 bottom-1 bg-white text-sky-500 rounded-full p-2'/>
                    </button><br />
                </a>
                <a href={props.playOnline}>
                    <button className='w-52 text-orange-600 border border-solid border-orange-500 transition-colors hover:bg-orange-500 hover:text-white relative m-1 text-left px-4 py-2 rounded-md'>
                        <FontAwesomeIcon icon={faDownload} className='mr-2'/>
                        <span>Online</span>
                        <FontAwesomeIcon icon={faHtml5} className='absolute right-4 bottom-1 bg-white text-orange-500 rounded-full p-2'/>
                    </button><br />
                </a>
                <a href={props.source}>
                    <button className='w-52 text-slate-700 border border-solid border-slate-700 transition-colors hover:bg-slate-700 hover:text-white relative m-1 text-left px-4 py-2 rounded-md'>
                        <FontAwesomeIcon icon={faDownload} className='mr-2'/>
                        <span>Source</span>
                        <FontAwesomeIcon icon={faCode} className='absolute right-4 bottom-1 bg-white text-slate-700 rounded-full p-2'/>
                    </button><br />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Downloads