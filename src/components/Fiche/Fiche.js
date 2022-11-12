import "./Fiche.scss";
import Carrousel from "../Carrousel/Carrousel";
import Dropdown from "../Dropdown/Dropdown";

function Fiche() {
  return (
    <div className="Fiche">
      <Carrousel />
      <main className="Fiche__menu">
        <Dropdown />
        <Dropdown />
      </main>
    </div>
  );
}

export default Fiche;
