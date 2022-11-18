import "./Dropdown.scss";
import DropdownOpen from "../DropdownOpen/DropdownOpen.js";
import { useState } from "react";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevValue) => !prevValue);

  return (
    <article className="Dropdown">
      <button className="Dropdown__button title" onClick={toggleDropdown}>
        {title}
        <img
          className="Dropdown__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={isOpen ? { transform: "rotate(180deg)" } : {}}
        />
      </button>
      {isOpen && ( 
        <DropdownOpen content={content} title={title} />) 
      }
    </article>
  );
}

export default Dropdown;
