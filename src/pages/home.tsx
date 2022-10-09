import Games from '../components/games/games'
import Banner from '../components/banner/banner_home'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { getGames } from '../utils/api'
import { GameData } from '../utils/interfaces'
import { Suspense, useEffect } from 'react'
import LoadingSpinner from '../components/loading/loading'


const Home = () => {
    const loadingGames:any = useLoaderData()

    useEffect(()=>{
        document.title = "CDEK"
    }, [])
    
    return (
        <>
        <Banner />
        <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRYX56fxRTKMHvz2wP2PVH8ntNe8350CPY7_MX7wWAUixgzm7B39uPD4CzULqN6h47eTi_9k9z2Jz97/pubhtml?gid=0"
            className='w-full px-2 my-6 md:px-1/10'
            style={{ height: '640px' }}
        />
        <Suspense fallback={
            <section className='py-6 px-2' >
                <h1 className="font-bebas-neue text-4xl pl-4 mb-2" >Loading Games...</h1><hr className="mb-2" />
                <div className='flex justify-center'>
                    <LoadingSpinner/>
                </div>
            </section>
        }>
            <Await resolve={loadingGames.games}>
                {
                    (games) => {
                        let mapped = games.map((game: any)=>({
                            slug: game.id,
                            title: game.name,
                            shortDescription: game.shortDesc,
                            img: game.imageUrl
                        }))
                        return <Games games={mapped}/>
                    }
                }
            </Await>
        </Suspense>
        
        </>
    )
}

export default Home

export async function loader() {
    try {
        let games:Promise<Array<GameData>> = getGames()

        return defer({games: games})
        
    } catch (error) {
        console.error(error)
        return defer({games: []})
    }
}