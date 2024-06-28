import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link2.css";

const Link2 = ({
  className = "",
  background,
  heading4CrateKidsGiftCard,
  heading525250USD,
  itemPictureCAwebp,
  itemPictureUSwebp,
  propTop,
  propLeft,
}) => {
  const link2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`link2 ${className}`} style={link2Style}>
      <img className="background-icon2" alt="" src={background} />
      <div className="heading-4-crate-kids-gift-parent">
        <div className="heading-412">{heading4CrateKidsGiftCard}</div>
        <div className="heading-54">{heading525250USD}</div>
        <div className="heading-55">Available in:</div>
        <div className="list3">
          <img className="item-picture-cawebp" alt="" src={itemPictureCAwebp} />
          <img className="item-picture-uswebp" alt="" src={itemPictureUSwebp} />
        </div>
      </div>
    </div>
  );
};

Link2.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4CrateKidsGiftCard: PropTypes.string,
  heading525250USD: PropTypes.string,
  itemPictureCAwebp: PropTypes.string,
  itemPictureUSwebp: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Link2;
