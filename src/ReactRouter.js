import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import Propos from "./pages/Propos/Propos";
import P404 from "./pages/P404/P404";

function ReactRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/logement/:id' element={<Logement />} />
      <Route path='/propos' element={<Propos />} />
      <Route path='*' element={<P404 />} />
    </Routes>
  )
}

export default ReactRouter;