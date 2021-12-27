import React from 'react'
import Banner from '../Components/banner/banner'
import CommentSection from '../Components/commentsection/CommentSection'
import Crousel from '../Components/crousel/Crousel'
import Footer from '../Components/footer'
import GameInfo from '../Components/gameinfo/GameInfo'
import Navbar from '../Components/navbar/navbar'

export default function Game(props) {

    return (
        <>
        {/* <Navbar/> */}
        <Banner title={props.name}/>
        <Crousel name={props.name}/>
        <GameInfo name={props.name}/>
        <CommentSection name={props.name}/>
        {/* <Footer/> */}
        </>
    )
}
