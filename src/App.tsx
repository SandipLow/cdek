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


const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>

      <Route index element={<Home/>} loader={homeLoader} />
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
