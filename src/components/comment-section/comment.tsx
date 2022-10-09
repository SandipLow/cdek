import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Timestamp } from 'firebase/firestore';
import React from 'react'
import { timeDifference } from '../../utils/tools';

export interface Props {
    name : string;
    comment : string;
    time: Timestamp;
    Admin?: Boolean;
}

const Comment = (props: Props) => {
    
    return (
        <>
        <div className='flex text-white my-2'>
            <div className='text-center'>
                <div className={`mx-2 rounded-full h-12 w-12 ${props.Admin ? "bg-cdek-blue" : "bg-cdek-gray"}`} style={{ minWidth: '3rem', fontSize: '2rem' }}>{props.name.charAt(0)}</div>
                {
                    props.Admin ? <span className="text-xs block my-2 text-red-800">{props.name} <FontAwesomeIcon icon={faUserCheck}/></span>

                    : <span className="text-xs block my-2 text-black">{props.name}</span>
                }

                <br />
            </div>
            <div className={`mx-2 p-2 w-full rounded-xl rounded-tl-none ${props.Admin ? "bg-cdek-blue" : "bg-cdek-gray"}`}>
                <span className='text-gray-200 text-xs'>{timeDifference(Date.now(), props.time.toDate())}</span>
                <p className='mt-1'>{props.comment}</p>
            </div>
        </div>
        </>
    )
}

export default Comment