import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", howLucidGiftGalaxyWorks, image }) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <div className="horizontal-divider-wrapper">
        <div className="horizontal-divider4" />
      </div>
      <h3 className="how-lucid-giftgalaxy">{howLucidGiftGalaxyWorks}</h3>
      <div className="image-wrapper">
        <img className="image-icon" loading="lazy" alt="" src={image} />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  howLucidGiftGalaxyWorks: PropTypes.string,
  image: PropTypes.string,
};

export default FrameComponent;
