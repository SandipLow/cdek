import AllSharedProjects from "../Components/AllSharedProjects";
import Banner from "../Components/banner/banner";
import Postbox from "../Components/posts/Postbox";
import React from 'react'

export default function Home(props) {
    return (
        <>
        {/* <Navbar /> */}
        <Banner title="Hi there...!" />
        <AllSharedProjects />
        <Postbox games={props.games} />
        {/* <Footer/> */}
        </>
    )
}
