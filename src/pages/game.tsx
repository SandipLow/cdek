import React, { useEffect } from 'react'
import Banner from '../components/banner/banner_game'
import CommentSection from '../components/comment-section/comment_section'
import Downloads from '../components/download-buttons/downloads'
import GameInfo from '../components/game-info/game_info'
import Scroller from '../components/images-scroller/scroller'
import { useLoaderData } from 'react-router-dom'
import MyImage from '../assets/MyImage.jpg'
import { GameData } from '../utils/interfaces'
import { getGame } from '../utils/api'


const Game = () => {

  const data: GameData|any = useLoaderData()

  return (
    <>
    <Banner title={data.name}/>
    <Scroller img={ data.images}/>
    <GameInfo 
      shortDescription={data.shortDesc} 
      description={data.description} 
      versionInfo={data.version}
    />
    <Downloads 
      android={data.links.android} 
      windows={data.links.windows} 
      playOnline={data.links.playOnline} 
      source={data.links.source} 
    />
    <CommentSection gameId={data.id}/>
    </>
  )
}

export default Game


export async function loader( { params }: any ) : Promise<any> {
  // return {
  //   id: "123",
  //   name: params.slug,
  //   shortDesc: "Hi There",
  //   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis et animi aut, iure dolorem labore ea libero eum. Aperiam nam nostrum quasi cum dolores temporibus est eum facere totam?",
  //   imageUrl: MyImage,
  //   images: [
  //     MyImage,
  //     MyImage,
  //     MyImage,
  //     MyImage,
  //     MyImage,
  //   ],
  //   links: {
  //     android: "#",
  //     windows: "#",
  //     playOnline: "#",
  //     source: "#",
  //   },
  //   version: {
  //     releasedOn: "13/11/2002",
  //     lastUpdate: "6/10/2022",
  //     version: "19.9",
  //     whatsNew: [
  //       "Cracked JEE",
  //       "Learned Coding",
  //       "Loved Physics",
  //     ]
  //   },
  // }

  try {
    let gameData = await getGame(params.slug)

    document.title = "CDEK | " + gameData.name;
    
    return gameData
    
  } catch (error) {
    console.error(error)
    return null
  }
}