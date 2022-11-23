import "./Title.scss";
import PropTypes from 'prop-types';

function Title({ title, location }) {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <h2>{location}</h2>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}

export default Title;
