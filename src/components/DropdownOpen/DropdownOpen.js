import "./DropdownOpen.scss";
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function DropdownOpen({ content, title }) {
  const { pathname } = useLocation();
  const divClass = pathname === '/propos' && 'DropdownLargeOpen';
  const contentClass = pathname === '/propos' && 'DropdownLargeOpen__content';

  if (title === "Équipements") {
    const equipmentItem = content.map((equipment, index) => 
    <li key={index} className="DropdownOpen__content">{equipment}</li>);

    return <ul className="DropdownOpen Equipment">{equipmentItem}</ul>;
  }

    return (
      <div className={ `DropdownOpen ${divClass}` }>
        <p className={ `DropdownOpen__content ${contentClass}` }>{content}</p>
      </div>
    );
  }

  DropdownOpen.propTypes = {
    title: PropTypes.string.isRequired
  };

export default DropdownOpen;
