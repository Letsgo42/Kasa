import "./Logement.scss";
import Carrousel from "../../components/Carrousel/Carrousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import Title from "../../components/Logement_title/Title";
import Host from "../../components/Host/Host";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import database from '../../logements.json';

function Logement() {
  let { id } = useParams();
  // const [ isValid, setIsValid ] = useState(true)
  // const navigate = useNavigate();
  const logement = database.find(logement => logement.id === id.substring(1));

  
  
  return (
    <main className="Logement">
      <Carrousel pictures={logement.pictures} />
      <section className="Logement__infos">
        <div className="Logement__infos-left">
          <Title title={logement.title} location={logement.location} />
          <Tags tagName={logement.tags} />
        </div>
        <div className="Logement__infos-right">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={Number(logement.rating)} />
        </div>
      </section>
      <section className="Logement__dropdown">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown title="Équipements" content={logement.equipments} />
      </section>
    </main>
  );
}

export default Logement;