import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "", headerAlignSelf, headerFlex }) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: headerAlignSelf,
      flex: headerFlex,
    };
  }, [headerAlignSelf, headerFlex]);

  return (
    <header className={`header ${className}`} style={headerStyle}>
      <div className="header1">
        <div className="header-logo-links">
          <div className="logo">
            <img
              className="logo-symbol-icon"
              loading="lazy"
              alt=""
              src="/logo-symbol.svg"
            />
            <h1 className="lucid-giftgalaxy">Lucid GiftGalaxy</h1>
          </div>
          <nav className="header-links">
            <div className="item-link">Birthdays</div>
            <div className="item-link1">Occasion</div>
            <div className="item-link2">Every Day</div>
            <div className="item-link3">Valentine's Day</div>
            <div className="item-link4">Gift Cards</div>
            <div className="item-link5">Business</div>
            <div className="item-link6">FAQs</div>
          </nav>
          <div className="icon-link">
            <img className="icon" loading="lazy" alt="" src="/icon.svg" />
            <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
            <img className="icon1" alt="" src="/icon-1.svg" />
            <img
              className="uspng-icon"
              loading="lazy"
              alt=""
              src="/uspng@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  headerAlignSelf: PropTypes.any,
  headerFlex: PropTypes.any,
};

export default Header;
