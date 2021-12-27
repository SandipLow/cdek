import Home from "./pages/Home";
import Game from "./pages/Game";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer";

function App() {
  
  function Page() {
    
    if (window.location.pathname=='/CDEK/' || window.location.pathname=='/CDEK') {
      return (<Home/>)
    }
  
    else {
      let game = window.location.pathname.replace('/CDEK/', '').replace('%20', ' ').replace('%20', ' ')
      document.title = game;
      return (<Game name={game} />)
    }
  }

  return (
    <>
    <Navbar/>
    {Page()}
    <Footer/>
    </>
  )

  
}

export default App;
