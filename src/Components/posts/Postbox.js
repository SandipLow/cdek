import React, { useState, useEffect } from 'react'
import Post from './Post'
import { db } from '../../firebase/config'
import { onSnapshot, collection, query } from "firebase/firestore";
import './style.css'

export default function Postbox() {

  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGamesFromFirebase = [];
    const q = query(collection(db, "games"))

    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getGamesFromFirebase.push({
          ...doc.data(),
          key : doc.id
        });
      });
      setGames(getGamesFromFirebase);
      setLoading(false);
    });

  }, [loading]);

  const Posts = []

  games.forEach((game) => {
    Posts.push(<Post key={game.key} src={game.imageUrl} alt={game.name} link={`/CDEK/${game.name}`} name={game.name} desc={game.shortDesc} />)
  })

  return (
    <>
      <center>
        <div className="games flex flex-center">
          {Posts}
        </div>
      </center>
    </>
  )
}
