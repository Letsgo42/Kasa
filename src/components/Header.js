import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img className="logo" src="/images/logo.svg" alt="logo Kasa" />
      <ul className="navbar">
        <li className="navbar-element">
          <a href="#">Accueil</a>
        </li>
        <li className="navbar-element">
          <a href="#">A Propos</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
