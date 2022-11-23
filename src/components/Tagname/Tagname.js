import "./Tagname.scss";
import PropTypes from 'prop-types';

function Tagname({ tagName }) {
  return <li className="Tagname">{tagName}</li>;
}

Tagname.propTypes = {
  tagName: PropTypes.string
};

export default Tagname;
