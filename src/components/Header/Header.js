import "./Header.scss";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="Header">
      <img className="Header__logo" src="/images/logo.svg" alt="logo Kasa" />
      <ul className="Header__navbar">
        <li className="Header__navbar-element">
          <Link to="/">Accueil</Link>
        </li>
        <li className="Header__navbar-element">
          <Link to="/propos">A Propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
