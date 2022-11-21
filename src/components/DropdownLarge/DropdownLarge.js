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
        className="DropdownLarge__button title"
        onClick={toggleDropdown}
        style={{ marginBottom: !isOpen && title === "Sécurité" && "187px" }}
      >
        {title}
        <img
          className="DropdownLarge__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={isOpen ? { transform: "rotate(540deg)", transition: "transform 0.15s" } : {}}
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
