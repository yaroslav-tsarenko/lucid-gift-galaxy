import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`companies-content-wrapper ${className}`}>
      <div className="companies-content">
        <div className="heading-3-just-some-of-the-c-wrapper">
          <h1 className="heading-32">Companies We’ve Worked With</h1>
        </div>
        <div className="companies-logos">
          <img
            className="item-picture-google-cloud"
            loading="lazy"
            alt=""
            src="/item--picture--googlecloudpng@2x.png"
          />
          <img
            className="item-picture-hubspotpng"
            loading="lazy"
            alt=""
            src="/item--picture--hubspotpng@2x.png"
          />
          <img
            className="item-picture-linked-inpng"
            loading="lazy"
            alt=""
            src="/item--picture--linkedinpng@2x.png"
          />
          <img
            className="item-picture-buzzfeedpng"
            loading="lazy"
            alt=""
            src="/item--picture--buzzfeedpng@2x.png"
          />
          <img
            className="item-picture-keller-willia"
            alt=""
            src="/item--picture--kellerwilliamspng@2x.png"
          />
          <img
            className="item-picture-remaxpng"
            loading="lazy"
            alt=""
            src="/item--picture--remaxpng@2x.png"
          />
          <img
            className="item-picture-freelancerpn"
            loading="lazy"
            alt=""
            src="/item--picture--freelancerpng@2x.png"
          />
          <img
            className="item-picture-adobepng"
            loading="lazy"
            alt=""
            src="/item--picture--adobepng@2x.png"
          />
          <img
            className="item-picture-lendipng"
            alt=""
            src="/item--picture--lendipng@2x.png"
          />
          <img
            className="item-picture-oxfampng"
            loading="lazy"
            alt=""
            src="/item--picture--oxfampng@2x.png"
          />
          <img
            className="item-picture-ray-whitepng"
            loading="lazy"
            alt=""
            src="/item--picture--raywhitepng@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
