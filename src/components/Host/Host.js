import "./Host.scss";
import PropTypes from 'prop-types';

function Host({ name, picture }) {
  return (
    <div className="Host">
      <div className="Host__name">{name}</div>
      <img className="Host__photo" src={picture} alt={name} />
    </div>
  );
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
};

export default Host;
