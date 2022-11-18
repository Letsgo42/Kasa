import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import Logement from "../Logement/Logement";
import Propos from "../Propos/Propos";
import P404 from "../P404/P404";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/logement/:id' element={<Logement />} />
          <Route path='/logement/*' element={<P404 />} />
          <Route path='/propos' element={<Propos />} />
          <Route path='*' element={<P404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
