import "./Star.scss";

function Star({ color }) {
  if (color === "red")
    return <img className="Star" src="/images/redStar.svg" alt="red star" />;
  else return <img className="Star" src="/images/star.svg" alt="grey star" />;
}

export default Star;
