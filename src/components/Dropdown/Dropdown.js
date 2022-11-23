import "./Dropdown.scss";
import DropdownOpen from "../DropdownOpen/DropdownOpen.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

function Dropdown({ title, logementContent, proposContent }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen((prevValue) => !prevValue);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 376;
  const buttonClasses = `Dropdown__button title ${pathname === '/propos' ? 'DropdownLarge__button' : "" }`;
  let marginBtm;

  if (!isOpen && title === "Équipements") {
    marginBtm = "239px";
  }
  else if (!isOpen && title === "Sécurité") {
    marginBtm = "187px";
  }
  
  useEffect (() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  },[])

  return (
    <article 
      className="Dropdown" 
      style={{ marginBottom: !isOpen && title === "Équipements" && width < breakpoint && "-102px" }}
    >
      <button 
        className={buttonClasses} 
        onClick={toggleDropdown}
        style={{ marginBottom: marginBtm }}
      > {title}
        <img
          className="Dropdown__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={isOpen ? { transform: "rotate(540deg)", transition: "transform 0.15s" } : {}}
        />
      </button>
      { isOpen && (
        <DropdownOpen 
          content={ pathname === '/propos' ? proposContent : logementContent } 
          title={title} 
        />
      )}
    </article>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired
};

export default Dropdown;
