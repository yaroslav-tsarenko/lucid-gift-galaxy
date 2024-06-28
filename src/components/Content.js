import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <div className="product-container-parent">
        <div className="product-container">
          <img
            className="belk-egift-aedb7cf8d60d7c12821-icon"
            loading="lazy"
            alt=""
            src="/belkegiftaedb7cf8d60d7c12821eae7d442bf1cewebp@2x.png"
          />
          <div className="product-details">
            <div className="product-title">
              <h1 className="belk-gift-card">BELK Gift Card</h1>
              <div className="heading-3-container">
                <span>
                  <p className="usd">$15 - $250 USD</p>
                  <p className="no-expiration">No expiration</p>
                </span>
              </div>
            </div>
            <div className="give-the-gift-container">
              <span>
                <p className="give-the-gift">
                  Give the gift of endless possibilities with a Belk Gift Card!
                  Perfect for any occasion, a Belk Gift Card lets your loved
                  ones choose exactly what they want from a wide selection of
                  fashion, beauty, home goods, and more. Available in various
                  denominations and with no expiration date, this gift card
                  offers the ultimate flexibility and convenience. Whether
                  you're celebrating a birthday, anniversary, or holiday, the
                  recipient will appreciate the freedom to select their perfect
                  gift.
                </p>
                <p className="blank-line">&nbsp;</p>
                <p className="using-a-belk">
                  Using a Belk Gift Card is easy and hassle-free. It can be
                  redeemed both in-store and online at Belk.com, making it a
                  versatile option for any shopper. Simply present the card at
                  checkout or enter the card number and PIN during the online
                  purchase process. Plus, with its attractive design and free
                  standard shipping when purchased online, a Belk Gift Card is
                  not only practical but also beautifully presented. Trust Belk
                  to provide a gift that suits everyone's tastes and
                  preferences.
                </p>
              </span>
            </div>
            <div className="info-container">
              <div className="region-info">
                <div className="region-details">
                  <div className="region-label">
                    <div className="usable-in">Usable in</div>
                    <div className="u-s-region">
                      <img
                        className="picture-uswebp"
                        loading="lazy"
                        alt=""
                        src="/picture--uswebp@2x.png"
                      />
                      <div className="united-states">United States</div>
                    </div>
                  </div>
                  <div className="strong-please">
                    Please note: This card can only be sent and redeemed in the
                    region specified above and terms and conditions may vary by
                    country.
                  </div>
                </div>
              </div>
              <div className="heading-520">
                <h3 className="send-a-belk">Send a Belk Gift Card</h3>
              </div>
              <div className="instructions">
                <div className="strong-to">
                  To send a Belk Gift Card, select the value you'd like to
                  include and then pick the card you'd like to include it in.
                  It's that easy!
                </div>
              </div>
              <div className="select-how-much-youd-like-to-parent">
                <div className="select-how-much">
                  Select how much you'd like to send:
                </div>
                <div className="amount-options">
                  <div className="label">
                    <div className="options-placeholder">$15</div>
                  </div>
                  <div className="label1">
                    <div className="div">$20</div>
                  </div>
                  <div className="label2">
                    <div className="div1">$25</div>
                  </div>
                  <div className="label3">
                    <div className="div2">$30</div>
                  </div>
                  <div className="label4">
                    <div className="div3">$35</div>
                  </div>
                  <div className="label5">
                    <div className="div4">$40</div>
                  </div>
                  <div className="label6">
                    <div className="div5">$50</div>
                  </div>
                  <div className="label7">
                    <div className="div6">$60</div>
                  </div>
                  <div className="label8">
                    <div className="div7">$75</div>
                  </div>
                  <div className="label9">
                    <div className="div8">$100</div>
                  </div>
                  <div className="label10">
                    <div className="div9">$125</div>
                  </div>
                  <div className="label11">
                    <div className="div10">$150</div>
                  </div>
                  <div className="label12">
                    <div className="div11">$175</div>
                  </div>
                  <div className="label13">
                    <div className="div12">$200</div>
                  </div>
                  <div className="label14">
                    <div className="div13">$250</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="whats-the-occasion-parent">
              <div className="whats-the-occasion">What's the occasion?</div>
              <div className="occasion-options">
                <div className="label15">
                  <div className="anniversary">Anniversary</div>
                </div>
                <div className="label16">
                  <div className="baby">Baby</div>
                </div>
                <div className="label17">
                  <div className="birthday1">Birthday</div>
                </div>
                <div className="label18">
                  <div className="christmas">Christmas</div>
                </div>
                <div className="label19">
                  <div className="congratulations">Congratulations</div>
                </div>
                <div className="label20">
                  <div className="farewell">Farewell</div>
                </div>
                <div className="label21">
                  <div className="happy-holidays">Happy Holidays</div>
                </div>
                <div className="label22">
                  <div className="thank-you">Thank You</div>
                </div>
                <div className="label23">
                  <div className="wedding">Wedding</div>
                </div>
                <div className="label24">
                  <div className="something-else">Something Else...</div>
                </div>
              </div>
            </div>
            <div className="swap-container-parent">
              <div className="swap-container">
                <div className="background11" />
                <div className="background12" />
              </div>
              <div className="swap-label">
                <div className="allow-the-recipient">
                  Allow the recipient to swap this card for something else
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add-to-cart">
          <Button
            className="button6"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "18",
              background: "#00cccc",
              borderRadius: "4px",
              "&:hover": { background: "#00cccc" },
              width: 200,
            }}
          >
            Pick a Card
          </Button>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
