import "./Card.scss";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Card({ title, cover, id }) {
  const backgroundCardStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      className="Card"
      style={backgroundCardStyle}
    >
      <Link to={`/logement/:${id}`} className="Card__link">
        <p className="Card__title">{title}</p>
      </Link>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Card;