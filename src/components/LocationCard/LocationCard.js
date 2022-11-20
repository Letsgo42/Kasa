import "./LocationCard.scss";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function LocationCard({ title, cover, id }) {
  const backgroundCardStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${cover})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="LocationCard" style={backgroundCardStyle} >
      <Link to={`/logement/:${id}`} className="LocationCard__link">
        <p className="LocationCard__title title">{title}</p>
      </Link>
    </div>
  );
}

LocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default LocationCard;
