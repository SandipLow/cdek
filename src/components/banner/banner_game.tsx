import React from 'react'

const Banner = (props: any) => {
  return (
    <>
    <section id="Banner" className='w-screen h-96 bg-cdek-black text-white'>
        <div className='pt-40 text-center'>
            <span className='border-2 border-solid text-4xl px-2'>{props.title}</span>
        </div>
    </section>
    </>
  )
}

export default Banner