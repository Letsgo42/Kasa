import "./Propos.scss";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useState, useEffect } from "react";


function Propos() {
  const [propos] = useState([
    {
      id: 1,
      title: 'Fiabilité',
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      id: 2,
      title: 'Respect',
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      title: 'Service',
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      id: 4,
      title: 'Sécurité',
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ])
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 376;
  const mobileBanner = "/images/smallPropos.png";
  const mobileStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${mobileBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  useEffect (() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  },[])

  return (
    <main className="Propos">
      <div 
      className="Propos__banner" 
      style={ width < breakpoint && mobileStyle }
      >
      </div>
      <section className="Propos__dropdown">
        {propos.map((propo) => (
          <Dropdown
            key={propo.id}
            title={propo.title}
            proposContent={propo.content}
          />
        ))}
      </section>
    </main>
  );
}

export default Propos;
