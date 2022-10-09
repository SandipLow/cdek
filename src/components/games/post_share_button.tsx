import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faSquareWhatsapp, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { useRef } from 'react';

const PostShareButton = (props: any) => {

    const sharePan:any = useRef();

    const toogleSharePan = () => {
        if (sharePan.current.classList.contains("w-fit")) {
            sharePan.current.classList.replace("w-fit", "w-0")
            sharePan.current.classList.replace("h-12", "h-0")
        } else {
            sharePan.current.classList.replace("h-0", "h-12")
            sharePan.current.classList.replace("w-0", "w-fit")
        }
    }


    return (
        <>
        <FontAwesomeIcon icon={faShareNodes} className='absolute top-2 right-2 w-6 h-6 rounded-full p-2 bg-white text-cdek-blue cursor-pointer' onClick={toogleSharePan} />
        <div ref={sharePan} className='h-0 w-0 transition-all overflow-hidden p-1 bg-white rounded-md absolute top-10 right-6'>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https://sandiplow.github.io/CDEK/#/${props.slug}`} target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} className='h-full mx-1 text-blue-700' />
            </a>
            <a href={`https://wa.me/?text=https://sandiplow.github.io/CDEK/#/${props.slug}`}>
                <FontAwesomeIcon icon={faSquareWhatsapp} className='h-full mx-1 text-green-700' />
            </a>
            <a href={`https://telegram.me/share/url?url=https://sandiplow.github.io/CDEK/#/${props.slug}`}>
                <FontAwesomeIcon icon={faTelegram} className='h-full mx-1 text-sky-700' />
            </a>
        </div>
        </>
    )
}

export default PostShareButton