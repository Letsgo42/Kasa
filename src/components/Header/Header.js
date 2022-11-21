import "./Header.scss";
import { Link, useLocation } from 'react-router-dom';


function Header() {
  let { pathname } = useLocation();

  return (
    <header className="Header">
      <img className="Header__logo" src="/images/logo.svg" alt="logo Kasa" />
      <ul className="Header__navbar">
        <li className="Header__navbar-element">
          <Link to="/" className={ (pathname.includes("propos") && pathname !== "/propos") || (!pathname.includes("propos")) ? "current" : undefined}>Accueil</Link>
        </li>
        <li className="Header__navbar-element">
          <Link to="/propos" className={ pathname === "/propos" ? "current" : undefined }>A Propos</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
