import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ReactRouter from "../../ReactRouter";


function App() {
  return (
    <div className="App">
      <Header />
      <ReactRouter />
      <Footer />
    </div>
  );
};

export default App;