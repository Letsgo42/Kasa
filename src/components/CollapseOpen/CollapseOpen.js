import "./CollapseOpen.scss";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function CollapseOpen({ content, title }) {
  const { pathname } = useLocation();
  const divClass = pathname === '/propos' ? 'CollapseLargeOpen' : '';
  const contentClass = pathname === '/propos' ? 'CollapseLargeOpen__content' : '';

  if (title === "Équipements") {
    const equipmentItem = content.map((equipment, index) =>
      <li key={index} className="CollapseOpen__content">{equipment}</li>);

    return <ul className="CollapseOpen Equipment">{equipmentItem}</ul>;
  }

  return (
    <div className={`CollapseOpen ${divClass}`}>
      <p className={`CollapseOpen__content ${contentClass}`}>{content}</p>
    </div>
  );
}

CollapseOpen.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  title: PropTypes.string.isRequired
};

export default CollapseOpen;
