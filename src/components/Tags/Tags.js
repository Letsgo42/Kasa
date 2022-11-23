import "./Tags.scss";
import Tagname from "../Tagname/Tagname";
import PropTypes from "prop-types";

function Tags({ tagName }) {
  const tagItem = tagName.map((tag, index) => <Tagname key={index} tagName={tag} />)
  
  return (
    <ul className="Tags">
      {tagItem}
    </ul>
  );
}

Tags.propTypes = {
  tagName: PropTypes.arrayOf(PropTypes.string)
}

export default Tags;
