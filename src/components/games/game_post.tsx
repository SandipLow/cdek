import { useRef } from 'react'
import { Link } from 'react-router-dom';
import PostShareButton from './post_share_button';

export interface Props {
    slug: string;
    title: string;
    shortDescription: string;
    img: string;
}

const Game = (props : Props) => {
    const hoverBg: any = useRef();

    const displayBg = () => {
        hoverBg.current.classList.remove('h-0')
        hoverBg.current.classList.add('h-80')
    }

    const hideBg = () => {
        hoverBg.current.classList.remove('h-80')
        hoverBg.current.classList.add('h-0')
    }

    return (
        <div style={{ minWidth: '16rem' }} onMouseOver={displayBg} onMouseOut={hideBg} className='relative w-64 h-80 my-2 mx-4'>
            <div ref={hoverBg} className="h-0 w-64 overflow-hidden absolute transition-all duration-300 text-center text-white rounded-md bg-red-800 bg-opacity-60" >
                <Link to={props.slug}>
                <div className='relative h-full w-full'>
                    <div className='absolute bottom-4 w-full' >
                        <h2 className='text-2xl mb-2 font-semibold' >{props.title}</h2>
                        <div className='mb-2 w-full bg-cdek-aqua' style={{height: '1px'}} ></div>
                        <p>{props.shortDescription}</p>
                    </div>
                </div>
                </Link>
                <PostShareButton slug={props.slug}/>
            </div>
            <img src={props.img} alt="img" className='w-full h-full rounded-md object-cover' />
        </div>
    )
}

export default Game