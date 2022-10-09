import Game, {Props as gamesProps} from "./game_post"
import React from "react"

export interface Props {
  games: Array<gamesProps>
}

const Games = (props: Props) => {

  const autoScrollX = (e: React.MouseEvent)=> {
    if (screen.availWidth < 768) {
      return
    }
    let scrollAmount: number = 0;
    let scrollSpeed: number;
    if (e.screenX > 2*screen.availWidth/3) {

      scrollSpeed = e.screenX - 2*screen.availWidth/3;
      scrollAmount+=0.1;
      let ele = document.getElementById("Games");

      if (ele != null) {
        ele.scrollLeft += scrollAmount*scrollSpeed;
      }
    }
    else if (e.screenX < screen.availWidth/3) {
      scrollSpeed = e.screenX - screen.availWidth/3;
      scrollAmount+=0.1;
      let ele = document.getElementById("Games");

      if (ele != null) {
        ele.scrollLeft += scrollAmount*scrollSpeed;
      }
    }
  }

  return (
    <section className='py-6 px-2' >

      <h1 className="font-bebas-neue text-4xl pl-4 mb-2" >Games</h1><hr className="mb-2" />

      <div id='Games' onMouseMove={autoScrollX} className="flex flex-wrap justify-center md:justify-start md:flex-nowrap overflow-auto">
        {
          props.games.map((gameInfo, index)=>{
            return <Game key={index} slug={gameInfo.slug} title={gameInfo.title} shortDescription={gameInfo.shortDescription} img={gameInfo.img}/>
          })
        }
      </div>

    </section>
  )
}

export default Games