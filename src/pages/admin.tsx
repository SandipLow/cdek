import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'
import Banner from '../components/banner/banner_game'
import Games from '../components/games/games'
import FaLoading from '../components/loading/faLoading'
import { useGames } from '../utils/api'
import { auth, useAuth } from '../utils/firebase'

export default function Admin() {

  const user = useAuth()

  return (
    <>
    <Banner title="Edit Your Games"/>
    {
      user ? <EditGames />
      : <InputForm/>
    }
    </>
  )
}

function InputForm() {
  const [clicked, setClicked] = useState(false)
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = async ()=> {
    setClicked(true)
    const res = await signInWithEmailAndPassword(auth, id, password)
    if (!res) setClicked(false)
  }

  return (
    <div className='text-center'>
      <div className='inline-block m-2 p-2 border rounded-lg'>
        <span className='font-bebas-neue text-3xl'>Log In to Continue</span>
        <input className='px-4 py-3 bg-slate-200 outline-none block my-2' type="email" placeholder='Enter User Id' onChange={(e)=>setId(e.target.value)} value={id} />
        <input className='px-4 py-3 bg-slate-200 outline-none block my-2' type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button className='py-3 px-6 text-cdek-blue border border-cdek-blue rounded-full w-32' onClick={handleLogIn} disabled={clicked}>{clicked ? <FaLoading/> : "Log In"}</button>
      </div>
    </div>
  )
}

function EditGames() {
    const [clicked, setClicked] = useState(false)
    const games = useGames()

    const handleLogOut =()=> {
        setClicked(true)
        signOut(auth)
    }

    return (<>
        <button className='mx-4 my-8 py-3 px-6 text-cdek-blue border border-cdek-blue rounded-full w-32' onClick={handleLogOut} disabled={clicked}>{clicked ? <FaLoading/> : "Log Out"}</button>
        <Games games={
            games.map((game: any)=>({
                slug: game.id,
                title: game.name,
                shortDescription: game.shortDesc,
                img: game.imageUrl
            }))
        } />
    </>)
}
