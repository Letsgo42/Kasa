import "../styles/App.scss";
import Header from "../components/Header/Header";
import Fiche from "../components/Fiche/Fiche";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Fiche />
      <Footer />
    </div>
  );
}

export default App;
