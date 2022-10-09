import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from '../components/banner/navbar'
import Footer from '../components/footer/footer'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <main>{<Outlet/>}</main>
    <ScrollRestoration/>
    <Footer/>
    </>
  )
}

export default RootLayout