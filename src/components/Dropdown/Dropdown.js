import "./Dropdown.scss";
import DropdownOpen from "../DropdownOpen/DropdownOpen.js";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevValue) => !prevValue);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 376;

  useEffect (() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  },[])


  return (
    <article className="Dropdown" style={{ marginBottom: !isOpen && title === "Équipements" && width < breakpoint && "-102px" }}>
      <button 
      className="Dropdown__button title" 
      onClick={toggleDropdown}
      style={{marginBottom: !isOpen && title === "Équipements" && "239px"  }}
      >
      {title}
      <img
          className="Dropdown__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={isOpen ? { transform: "rotate(540deg)", transition: "transform 0.15s" } : {}}
        />
      </button>
      {isOpen && ( 
        <DropdownOpen content={content} title={title} />) 
      }
    </article>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired
};

export default Dropdown;
