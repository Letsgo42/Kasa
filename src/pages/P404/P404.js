import "./P404.scss";
import { Link } from 'react-router-dom';

function P404() {
  return (
    <main className="P404">
      <h1>404</h1>
      <h2>Oups ! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retourner à la page d'accueil</Link>
    </main>
  );
}

export default P404;
