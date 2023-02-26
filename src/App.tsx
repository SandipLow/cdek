import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './pages/root';
import Home, {loader as homeLoader} from './pages/home'
import Game, {loader as loadGameData} from './pages/game'
import Admin from "./pages/admin";
import EditGame from "./pages/editgame";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

      <Route index element={<Home/>} loader={homeLoader} />

      <Route path="admin" >
        <Route index element={<Admin/>} />
        <Route path=":slug" element={<EditGame/>} loader={loadGameData} />
      </Route>

      <Route path=':slug' element={<Game/>} loader={loadGameData} />

    </Route>
  )
)


function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
