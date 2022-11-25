import "./Logement.scss";
import Carrousel from "../../components/Carrousel/Carrousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Title from "../../components/Title/Title";
import Host from "../../components/Host/Host";
import P404 from "../../pages/P404/P404";
import { useParams } from "react-router-dom";
import database from '../../logements.json';

function Logement() {
  let { id } = useParams();
  const logement = database.find(logement => logement.id === id.substring(1));

  if (!logement) {
    return <P404 />;
  }
  
  return (
    <main className="Logement">
      <Carrousel pictures={logement.pictures} />
      <section className="Logement__infos">
        <div className="Logement__infos-left">
          <Title 
            title={logement.title} 
            location={logement.location} 
          />
          <Tags tagName={logement.tags} />
        </div>
        <div className="Logement__infos-right">
          <Host 
            name={logement.host.name} 
            picture={logement.host.picture}
          />
          <Rating rating={Number(logement.rating)} />
        </div>
      </section>
      <section className="Logement__dropdown">
        <Dropdown 
          title="Description" 
          logementContent={logement.description} 
        />
        <Dropdown 
          title="Équipements" 
          logementContent={logement.equipments}
        />
      </section>
    </main>
  );
}

export default Logement;
