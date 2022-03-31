import {useEffect, useState} from 'react'
import Home from "./pages/Home";
import Game from "./pages/Game";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer";
import { Route, Switch } from 'react-router-dom';
import { db } from './firebase/config'
import { onSnapshot, collection, query} from "firebase/firestore";
import Admin from './pages/Admin';
import AddGame from './pages/AddGame';
import ScrollToTop from './Components/scrollToTop';
import Loading from './Components/loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState([])

  useEffect(() => {

    const q = query(collection(db, "games"))

    onSnapshot(q, (querySnapshot) => {
      setGames(querySnapshot)
      setTimeout(()=>{setLoading(false);}, 3000)
    });
    
  }, []);

  const paths = [];

  games.forEach(doc => {
    paths.push(
      <Route key={doc.id} exact path={`/${doc.data().name}`}>
        <Game data={doc.data()} name={doc.data().name} id={doc.id} />
      </Route>
    )
  })

  if (loading) {
    return (
      <>
      <Loading/>
      </>
    )
  }
  
  return (
    <>
    <ScrollToTop/>

    <Navbar />

    <Switch>

      <Route exact path="/">
        <Home games={games}/>
      </Route>

      <Route exact path="/Admin">
        <Admin/>
      </Route>

      <Route exact path="/Addgame">
        <AddGame/>
      </Route>

      {paths}

      <Route>
        <p>404 not found...!</p>
      </Route>
    </Switch>

    <Footer />
    </>
  )


}

export default App;
