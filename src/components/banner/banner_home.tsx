import cover_gameplay from '../../assets/cover_gameplay.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {

  return (
    <section id='Home' className='bg-cdek-black h-screen'>

      <div className='w-full h-full' >
        <div className='h-full w-full absolute bg-cdek-black bg-opacity-70'></div>
        
        {/* Here will be sliders divs...*/}
        <div className='h-full' >
          <img src={cover_gameplay} loading="lazy" alt="gameplay" className='w-full h-full object-cover'/>
          <div className='text-white w-full absolute top-1/3 bottom-8 md:top-4/10' >
            <h1 className='md:top-56 text-5xl w-full text-center' >{"This Is "}
              <span className='font-bebas-neue bg-cdek-aqua text-cdek-black text-6xl pl-2'>CD</span>
              <span className='font-bebas-neue bg-cdek-black text-cdek-aqua text-6xl'>E</span>
              <span className='font-bebas-neue bg-cdek-aqua text-cdek-black text-6xl pr-2'>K</span>
            </h1>
            <div className='w-full mt-4 flex justify-center text-center' style={{maxHeight: 'calc(66% - 2rem)'}}>
              <p className='mx-20 max-w-md bg-red-400 bg-opacity-60 p-2 rounded overflow-y-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse similique est eius maxime, tempore saepe id quasi quo placeat? Magnam accusamus itaque fugit aliquid expedita, nisi ab autem mollitia ducimus?
              </p>
            </div>
          </div>
        </div>
        
      </div>

      {/* <div className='absolute w-full top-1/2' >
        <FontAwesomeIcon className='w-12 h-12 absolute left-2 text-cdek-gray bg-white rounded-full' icon={faChevronCircleLeft} />
        <FontAwesomeIcon className='w-12 h-12 absolute right-2 text-cdek-gray bg-white rounded-full' icon={faChevronCircleRight} />
      </div> */}


      {/* <div className='w-full absolute bottom-6 flex justify-center'>
        <div className='w-fit flex' >
          <div className='w-8 h-1 mx-2 bg-white' ></div>
          <div className='w-8 h-1 mx-2 bg-white' ></div>
          <div className='w-8 h-1 mx-2 bg-white' ></div>
        </div>
      </div> */}
    </section>
  )
}

export default Banner