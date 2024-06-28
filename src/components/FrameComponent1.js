import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  sVG,
  heading4ChooseYourDesign,
  browseOurExtensiveCollect,
}) => {
  return (
    <div className={`svg-parent ${className}`}>
      <img className="svg-icon" loading="lazy" alt="" src={sVG} />
      <div className="design-content">
        <div className="heading-42">{heading4ChooseYourDesign}</div>
        <div className="browse-our-extensive">{browseOurExtensiveCollect}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  sVG: PropTypes.string,
  heading4ChooseYourDesign: PropTypes.string,
  browseOurExtensiveCollect: PropTypes.string,
};

export default FrameComponent1;
