import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="footer-top-divider">
          <div className="divider-pair">
            <div className="horizontal-divider9" />
          </div>
          <div className="logo1">
            <img className="logo-symbol-icon1" alt="" src="/logo-symbol.svg" />
            <div className="logo-name">
              <h1 className="lucid-giftgalaxy1">Lucid GiftGalaxy</h1>
            </div>
          </div>
          <div className="divider-pair1">
            <div className="horizontal-divider10" />
          </div>
        </div>
        <div className="footer-columns">
          <div className="column-container">
            <div className="column-items">
              <div className="heading-45">Keep It Personal</div>
              <div className="links-container">
                <div className="personal-links">
                  <div className="item-link7">Gift Cards</div>
                  <div className="item-link8">Christmas Cards</div>
                  <div className="item-link9">Engagement Cards</div>
                  <div className="item-link10">Anniversaries</div>
                  <div className="item-link11">For Him</div>
                  <div className="item-link12">Newborn Cards</div>
                </div>
                <div className="card-types-two">
                  <div className="item-link13">Birthday Cards</div>
                  <div className="item-link14">Thank You Cards</div>
                  <div className="item-link15">Wedding Cards</div>
                  <div className="item-link16">For Her</div>
                  <div className="item-link17">For Kids</div>
                </div>
              </div>
            </div>
            <div className="business-info">
              <div className="heading-46">Cardly For Business</div>
              <div className="business-links-container">
                <div className="item-link18">Build Better Relationships</div>
                <div className="item-link19">Get Started</div>
                <div className="item-link20">{`Features & Benefits`}</div>
                <div className="item-link21">{`Automations & Integrations`}</div>
                <div className="item-link22">Use Cases</div>
                <div className="item-link23">Frequently Asked Questions</div>
              </div>
            </div>
            <div className="artists-info">
              <div className="heading-47">Our Artists</div>
              <div className="artists-links">
                <div className="item-link24">Our Independent Artists</div>
                <div className="item-link25">Why Join Us?</div>
                <div className="item-link26">Join Us Today!</div>
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-heading">
                <div className="heading-48">Contact Us</div>
                <div className="contact-items">
                  <div className="email-container">
                    <img
                      className="email-icon"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="supportlucidgiftgalaxynet">
                      support@lucidgiftgalaxy.net
                    </div>
                  </div>
                  <div className="address-container">
                    <img className="location-icon" alt="" src="/vector-1.svg" />
                    <div className="e-hampden-ave-container">
                      <p className="e-hampden-ave">9955 E Hampden Ave</p>
                      <p className="denver-co-80231">Denver CO 80231 USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-info">
                <div className="heading-49">Follow Us</div>
                <div className="social-links-container">
                  <img
                    className="item-link27"
                    loading="lazy"
                    alt=""
                    src="/item--link.svg"
                  />
                  <img className="item-link28" alt="" src="/item--link-1.svg" />
                  <img className="item-link29" alt="" src="/item--link-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background9">
          <div className="legal-links">
            <div className="item-link30">Disclaimer</div>
            <div className="item-link31">Privacy Policy</div>
            <div className="item-link32">{`Terms & Conditions`}</div>
            <div className="item13">© 2024 Cardly</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
