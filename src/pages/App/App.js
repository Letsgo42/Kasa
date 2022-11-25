import "./App.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
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
