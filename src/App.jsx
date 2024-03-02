import {Route, Routes} from "react-router-dom"
import { Category, Footer, Nav, Nav_top } from "./Components"
import Favourites from "./page/Favourites"
import Home from "./page/Home"

function App() {

  return (
    <>
      <Nav_top/>
      <div className="conteiner">
        <Nav/>
        <Category/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Favourites/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
