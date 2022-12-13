import "./Collapse.scss";
import CollapseOpen from "../CollapseOpen/CollapseOpen.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


function Collapse({ title, logementContent, proposContent }) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen((prevValue) => !prevValue);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 376;
  const buttonClasses = `Collapse__button title ${pathname === '/propos' ? 'CollapseLarge__button' : ""}`;
  let marginBtm;

  if (!isOpen && title === "Équipements") {
    marginBtm = "239px";
  }
  else if (!isOpen && title === "Sécurité") {
    marginBtm = "187px";
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [])

  return (
    <article
      className="Collapse"
      style={{ marginBottom: !isOpen && title === "Équipements" && width < breakpoint && "-102px" }}
    >
      <button
        className={buttonClasses}
        onClick={toggleCollapse}
        style={{ marginBottom: marginBtm }}
      > {title}
        <img
          className="Collapse__button-img"
          src="/images/arrow.svg"
          alt="white arrow"
          style={isOpen ? { transform: "rotate(540deg)", transition: "transform 0.15s" } : {}}
        />
      </button>
      {isOpen && (
        <CollapseOpen
          content={pathname === '/propos' ? proposContent : logementContent}
          title={title}
        />
      )}
    </article>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  proposContent: PropTypes.string,
  logementContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default Collapse;