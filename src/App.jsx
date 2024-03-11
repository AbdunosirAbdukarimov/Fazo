import {Route, Routes} from "react-router-dom"
import { Category, Footer, Nav, Nav_top } from "./Components"
import Favourites from "./page/Favourites"
import Filter from "./page/Filter"
import Home from "./page/Home"
import Prduct from "./page/prduct"
import Profile from "./page/profile"

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
          <Route path="/filter" element={<Filter/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/prduct" element={<Prduct/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
