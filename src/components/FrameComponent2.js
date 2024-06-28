import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", yourCart }) => {
  return (
    <section className={`header-parent ${className}`}>
      <header className="header2">
        <div className="header3">
          <div className="logo-container">
            <div className="logo2">
              <img
                className="logo-symbol-icon2"
                loading="lazy"
                alt=""
                src="/logo-symbol.svg"
              />
              <h2 className="lucid-giftgalaxy2">Lucid GiftGalaxy</h2>
            </div>
            <nav className="menu">
              <div className="item-link33">Birthdays</div>
              <div className="item-link34">Occasion</div>
              <div className="item-link35">Every Day</div>
              <div className="item-link36">Valentine's Day</div>
              <div className="item-link37">Gift Cards</div>
              <div className="item-link38">Business</div>
              <div className="item-link39">FAQs</div>
            </nav>
            <div className="locale">
              <img className="icon2" loading="lazy" alt="" src="/icon.svg" />
              <img
                className="link-icon1"
                loading="lazy"
                alt=""
                src="/link.svg"
              />
              <img className="icon3" alt="" src="/icon-1.svg" />
              <img
                className="uspng-icon1"
                loading="lazy"
                alt=""
                src="/uspng@2x.png"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="cart-title">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default FrameComponent2;
