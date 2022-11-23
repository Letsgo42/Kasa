import "./Star.scss";
import PropTypes from "prop-types";

function Star({ color }) {
  if (color === "red")
    return (
    <img 
      className="Star" 
      src="/images/redStar.svg" 
      alt="red star" 
    />
    );

  else return (
  <img 
    className="Star" 
    src="/images/star.svg" 
    alt="grey star" 
  />
  );
};

Star.propTypes = {
  color: PropTypes.string.isRequired
}

export default Star;
