import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ className = "", pictureBirthdayV1789webp, birthday }) => {
  return (
    <div className={`item6 ${className}`}>
      <img
        className="picture-birthday-v1789webp"
        loading="lazy"
        alt=""
        src={pictureBirthdayV1789webp}
      />
      <div className="background6">
        <div className="birthday">{birthday}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  pictureBirthdayV1789webp: PropTypes.string,
  birthday: PropTypes.string,
};

export default Item;
