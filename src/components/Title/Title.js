import "./Title.scss";

function Title({ title, location }) {
  return (
    <div className="Title">
      <h1>{title}</h1>
      <h2>{location}</h2>
    </div>
  );
}

export default Title;
