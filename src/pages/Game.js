import {React, useEffect, useContext } from 'react'
import Banner from '../Components/banner/banner'
import CommentSection from '../Components/commentsection/CommentSection'
import Crousel from '../Components/crousel/Crousel'
import EditInfo from '../Components/gameinfo/EditInfo'
import GameInfo from '../Components/gameinfo/GameInfo'
import AuthContext from '../Context/auth/AuthContext'

export default function Game(props) {

    // ======== Props =========
    // name : game name,
    // id: game Id
    // data: game data


    const authContext = useContext(AuthContext)

    useEffect(() => {
        document.title = `CDEK | ${props.name}`
        document.getElementsByTagName('meta')["description"].content = props.data.shortDesc ;

        // eslint-disable-next-line
    }, []);


    return (
        <>
        {/* <Navbar/> */}
        <Banner title={props.name}/>
        <Crousel name={props.name} images={props.data.images}/>
        { !authContext.user ? <GameInfo name={props.name} data={props.data} /> : <EditInfo name={props.name} data={props.data} id={props.id}/>}
        <CommentSection loggedIn={authContext.user} name={props.name} id={props.id} />
        {/* <Footer/> */}
        </>
    )
    
    
}
