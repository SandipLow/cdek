import React from 'react'
import styles from './scroller.module.css'

export interface Props {
  img: Array<string>
}

const Scroller = (props: Props) => {
  return (
    <>
    <section className='h-72 py-3 px-1 bg-cdek-gray w-full flex overflow-auto'>
      {
        props.img.map((img, ind)=>{
          return <img key={ind} src={img} alt={`img${ind}`} className='h-full mx-2 object-cover' />
        })
      }
    </section>
    </>
  )
}

export default Scroller