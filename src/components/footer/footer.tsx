import React from 'react'

const Footer = () => {
  return (
    <footer className='py-2 bg-cdek-black text-cdek-aqua text-center relative'>
      <p>©CDEK 2021-{new Date().getFullYear()} : All rights reserved</p>
      <p className='text-xs absolute right-2 top-3'>v2.0.2</p>
    </footer>
  )
}

export default Footer