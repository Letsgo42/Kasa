import "./Gallery.scss";
import Card from "../Card/Card";
import database from '../../logements.json';


function Gallery() {
  const logementCard = database.map((logement) =>
    <Card
      key={logement.id}
      title={logement.title}
      cover={logement.cover}
      id={logement.id}
    />
  );

  return (
    <section className="Gallery">
      {logementCard}
    </section>
  );
}

export default Gallery;