import { Route, Routes } from "react-router-dom";
import { Category, Footer, Login, Nav, Nav_top, Register, ShopCard } from "./Components";
import Favourites from "./page/Favourites";
import Filter from "./page/Filter";
import Home from "./page/Home";
import Prduct from "./page/prduct";
import Profile from "./page/profile";
import Purchase from "./page/purchase";

function App() {
  return (
    <>
      {/* <ShopCard /> */}      
      <Nav_top />
      <div className="conteiner">
        <Nav />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/filter/:subCategory/:theme" element={<Filter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/prduct" element={<Prduct />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
