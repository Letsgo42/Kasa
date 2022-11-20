import "./DropdownOpen.scss";
import PropTypes from 'prop-types';

function DropdownOpen({ content, title }) {
  if (title !== "Description") {
    const equipmentItem = content.map((equipment, index) => 
    <li key={index} className="DropdownOpen__content">{equipment}</li>);

    return <ul className="DropdownOpen Equipment">{equipmentItem}</ul>;
  }

    return (
      <div className="DropdownOpen">
        <p className="DropdownOpen__content">{content}</p>
      </div>
    );
  }

  DropdownOpen.propTypes = {
    title: PropTypes.string.isRequired
  };

export default DropdownOpen;
