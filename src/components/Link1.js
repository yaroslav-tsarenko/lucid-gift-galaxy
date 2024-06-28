import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link1.css";

const Link1 = ({
  className = "",
  background,
  heading4BarnesNobleGiftCa,
  heading510250USD,
  listItemPictureUSwebp,
  propLeft,
  propTop,
}) => {
  const link1Style = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div className={`link1 ${className}`} style={link1Style}>
      <img className="background-icon1" alt="" src={background} />
      <div className="link-child">
        <div className="heading-4-barnes-noble-gif-parent">
          <div className="heading-411">{heading4BarnesNobleGiftCa}</div>
          <div className="heading-5-10-250-usd-wrapper">
            <div className="heading-52">{heading510250USD}</div>
          </div>
          <div className="heading-5-available-in-container">
            <div className="heading-53">Available in:</div>
          </div>
          <div className="list-item-picture-usweb-wrapper">
            <img
              className="list-item-picture-usweb"
              alt=""
              src={listItemPictureUSwebp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Link1.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4BarnesNobleGiftCa: PropTypes.string,
  heading510250USD: PropTypes.string,
  listItemPictureUSwebp: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propTop: PropTypes.any,
};

export default Link1;
