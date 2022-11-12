import "./Dropdown.scss";
import DropdownOpen from "../DropdownOpen/DropdownOpen.js";
import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevValue) => !prevValue);

  return (
    <article className="Dropdown">
      <button className="Dropdown__button title" onClick={toggleDropdown}>
        Description
        <img
          className="Dropdown__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
        />
      </button>
      {isOpen && <DropdownOpen />}
    </article>
  );
}

export default Dropdown;
