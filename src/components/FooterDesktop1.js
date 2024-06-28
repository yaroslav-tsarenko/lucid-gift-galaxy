import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer1">
        <div className="logo-divider-parent">
          <div className="logo-divider">
            <div className="horizontal-divider2" />
          </div>
          <div className="logo3">
            <img className="logo-symbol-icon3" alt="" src="/logo-symbol.svg" />
            <div className="footer-brand">
              <h1 className="lucid-giftgalaxy3">Lucid GiftGalaxy</h1>
            </div>
          </div>
          <div className="logo-divider1">
            <div className="horizontal-divider3" />
          </div>
        </div>
        <div className="footer-links">
          <div className="frame-div">
            <div className="heading-4-keep-it-personal-group">
              <div className="heading-45">Keep It Personal</div>
              <div className="personal-links">
                <div className="personal-link-items">
                  <div className="item-link40">Gift Cards</div>
                  <div className="item-link41">Christmas Cards</div>
                  <div className="item-link42">Engagement Cards</div>
                  <div className="item-link43">Anniversaries</div>
                  <div className="item-link44">For Him</div>
                  <div className="item-link45">Newborn Cards</div>
                </div>
                <div className="card-types">
                  <div className="item-link46">Birthday Cards</div>
                  <div className="item-link47">Thank You Cards</div>
                  <div className="item-link48">Wedding Cards</div>
                  <div className="item-link49">For Her</div>
                  <div className="item-link50">For Kids</div>
                </div>
              </div>
            </div>
            <div className="heading-4-cardly-for-busines-group">
              <div className="heading-46">Cardly For Business</div>
              <div className="business-links">
                <div className="item-link51">Build Better Relationships</div>
                <div className="item-link52">Get Started</div>
                <div className="item-link53">{`Features & Benefits`}</div>
                <div className="item-link54">{`Automations & Integrations`}</div>
                <div className="item-link55">Use Cases</div>
                <div className="item-link56">Frequently Asked Questions</div>
              </div>
            </div>
            <div className="heading-4-our-artists-group">
              <div className="heading-47">Our Artists</div>
              <div className="artists-links">
                <div className="item-link57">Our Independent Artists</div>
                <div className="item-link58">Why Join Us?</div>
                <div className="item-link59">Join Us Today!</div>
              </div>
            </div>
            <div className="contact-info-parent">
              <div className="contact-info">
                <div className="heading-48">Contact Us</div>
                <div className="contact-details">
                  <div className="email-info">
                    <img
                      className="email-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="supportlucidgiftgalaxynet1">
                      support@lucidgiftgalaxy.net
                    </div>
                  </div>
                  <div className="address-info">
                    <img className="location-icon" alt="" src="/vector-1.svg" />
                    <div className="e-hampden-ave-container1">
                      <p className="e-hampden-ave1">9955 E Hampden Ave</p>
                      <p className="denver-co-802311">Denver CO 80231 USA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heading-4-follow-us-group">
                <div className="heading-49">Follow Us</div>
                <div className="social-links">
                  <img
                    className="item-link60"
                    loading="lazy"
                    alt=""
                    src="/item--link.svg"
                  />
                  <img className="item-link61" alt="" src="/item--link-1.svg" />
                  <img className="item-link62" alt="" src="/item--link-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background1">
          <div className="legal-links">
            <div className="item-link63">Disclaimer</div>
            <div className="item-link64">Privacy Policy</div>
            <div className="item-link65">{`Terms & Conditions`}</div>
            <div className="item1">© 2024 Cardly</div>
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
