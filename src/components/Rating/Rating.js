import "./Rating.scss";
import Star from "../Star/Star";

function Rating({ rating }) {
  return (
    <div className="Rating">
      <Star color={rating > 0 ? "red" : ""} />
      <Star color={rating > 1 ? "red" : ""} />
      <Star color={rating > 2 ? "red" : ""} />
      <Star color={rating > 3 ? "red" : ""} />
      <Star color={rating > 4 ? "red" : ""} />
    </div>
  );
}

export default Rating;
