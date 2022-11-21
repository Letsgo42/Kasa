import "./Home.scss";
import Gallery from "../../components/Gallery/Gallery";


function Home() {
  return (
    <main className="Home">
      <div className="Banner">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery />
    </main>
  );
}

export default Home;
