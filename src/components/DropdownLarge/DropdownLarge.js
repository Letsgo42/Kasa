import "./DropdownLarge.scss";
import DropdownLargeOpen from "../DropdownLargeOpen/DropdownLargeOpen";
import { useState } from "react";
import PropTypes from 'prop-types';


function DropdownLarge({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevValue) => !prevValue);

  return (
    <article className="DropdownLarge">
      <button
        className="DropdownLarge-button"
        onClick={toggleDropdown}
        style={{ marginBottom: !isOpen && title === "Sécurité" && "155px" }}
      >
        {title}
        <img
          className="DropdownLarge-button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={{ transform: isOpen && "rotate(180deg)" }}
        />
      </button>
      {isOpen && (<DropdownLargeOpen content={content} />)}
    </article>
  )
}

DropdownLarge.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default DropdownLarge;
