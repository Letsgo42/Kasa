import "./Tags.scss";
import Tagname from "../Tagname/Tagname";

function Tags({ tagName }) {
  const tagItem = tagName.map((tag, index) => <Tagname key={index} tagName={tag} />)
  return (
    <ul className="Tags">
      {tagItem}
    </ul>
  );
}

export default Tags;
