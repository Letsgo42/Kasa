import "./LocationCard.scss";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled  from 'styled-components';


//STYLED COMPONENT A SUPPRIMER !!!


const Card = styled.article`
  background: ${props => `linear-gradient(180deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
`

function LocationCard({ title, cover, id }) {
  return (
    <Card className="LocationCard" background={cover}>
      <Link to={`/logement/:${id}`} className="LocationCard__link">
        <p className="LocationCard__title title">{title}</p>
      </Link>
    </Card>
  );
}

LocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default LocationCard;
