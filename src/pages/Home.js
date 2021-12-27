import AllSharedProjects from "../Components/AllSharedProjects";
import Banner from "../Components/banner/banner";
import Navbar from "../Components/navbar/navbar";
import Postbox from "../Components/posts/Postbox";
import Footer from "../Components/footer";
import React from 'react'

export default function Home() {
    return (
        <>
        {/* <Navbar /> */}
        <Banner title="Hi there...!" />
        <AllSharedProjects />
        <Postbox />
        {/* <Footer/> */}
        </>
    )
}
