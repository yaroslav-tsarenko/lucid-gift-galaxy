import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({
  className = "",
  background,
  heading4ASDAGiftCard,
  propTop,
  propLeft,
}) => {
  const linkStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className={`link ${className}`} style={linkStyle}>
      <img className="background-icon" alt="" src={background} />
      <div className="link-inner">
        <div className="heading-4-asda-gift-card-parent">
          <div className="heading-410">{heading4ASDAGiftCard}</div>
          <div className="heading-5-10-250-gbp-wrapper">
            <div className="heading-5">£10 - £250 GBP</div>
          </div>
          <div className="heading-5-available-in-wrapper">
            <div className="heading-51">Available in:</div>
          </div>
          <div className="list-item-picture-gbweb-wrapper">
            <img
              className="list-item-picture-gbweb"
              alt=""
              src="/list--item--picture--gbwebp-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  background: PropTypes.string,
  heading4ASDAGiftCard: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
};

export default Link;
