import "./Gallery.scss";
import LocationCard from "../LocationCard/LocationCard";
import database from '../../logements.json';
import { useState }  from 'react';


function Gallery() {
  const [logements] = useState(database);
  const locationItem = logements.map((logement) => 
    <LocationCard key={logement.id} title={logement.title} cover={logement.cover} id={logement.id} />
  );

  return (
    <section className="Gallery">
      {locationItem}
    </section>
  );
}

export default Gallery;
