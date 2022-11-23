import "./Rating.scss";
import Star from "../Star/Star";
import PropTypes from 'prop-types';

function Rating({ rating }) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      stars.push(<Star key={i} color="red" />);
    }
    else {
      stars.push(<Star key={i} color="grey" />);
    }
  }
  
  return (
    <div className="Rating">
      {stars}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
