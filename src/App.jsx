import {Route, Routes} from "react-router-dom"
import { Nav, Nav_top } from "./Components"
import Home from "./page/Home"

function App() {

  return (
    <>
      <Nav_top/>
      <div className="conteiner">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
