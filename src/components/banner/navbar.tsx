import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='w-full fixed flex justify-center md:justify-between px-2 bg-cdek-black bg-opacity-70 z-50'>
        <ul className='flex w-fit font-roboto-flex text-cdek-aqua' >
          <Link to="/"><li className='px-4 transition p-2 hover:bg-slate-300 hover:text-black '>Home</li></Link>
          <a href='#About'><li className='px-4 transition p-2 hover:bg-slate-300 hover:text-black '>About</li></a>
          <Link to='/#Games'><li className='px-4 transition p-2 hover:bg-slate-300 hover:text-black '>Games</li></Link>
        </ul>
        <img src={logo} alt="logo" className='hidden md:block md:h-10 md:p-1' />
    </nav>
  )
}

export default Navbar