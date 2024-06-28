import Link from "./Link";
import Link1 from "./Link1";
import Link2 from "./Link2";
import PropTypes from "prop-types";
import "./ProductGrid.css";

const ProductGrid = ({ className = "" }) => {
  return (
    <div className={`product-grid ${className}`}>
      <div className="link3">
        <img
          className="background-icon3"
          rows={9}
          cols={14}
          alt=""
          src="/background@2x.png"
        />
        <div className="product-content-amazon">
          <div className="heading-413">Amazon Gift Card</div>
          <div className="heading-56">$10 - $250 USD</div>
          <div className="heading-57">Available in:</div>
          <div className="list4">
            <img
              className="item-picture-uswebp1"
              loading="lazy"
              alt=""
              src="/item--picture--uswebp@2x.png"
            />
            <img
              className="item-picture-cawebp1"
              loading="lazy"
              alt=""
              src="/item--picture--cawebp@2x.png"
            />
            <img
              className="item-picture-auwebp"
              loading="lazy"
              alt=""
              src="/item--picture--auwebp@2x.png"
            />
            <img
              className="item-picture-gbwebp"
              alt=""
              src="/item--picture--gbwebp@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="link4">
        <img className="background-icon4" alt="" src="/background-1@2x.png" />
        <div className="product-headers-wrapper">
          <div className="product-headers">
            <div className="heading-414">Argos Gift Card</div>
            <div className="product-currency-headers">
              <div className="heading-58">£10 - £250 GBP</div>
            </div>
            <div className="product-available-labels">
              <div className="heading-59">Available in:</div>
            </div>
            <div className="product-country-lists">
              <img
                className="list-item-picture-gbweb1"
                alt=""
                src="/item--picture--gbwebp@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        background="/background-2@2x.png"
        heading4ASDAGiftCard="ASDA Gift Card"
      />
      <Link1
        background="/background-3@2x.png"
        heading4BarnesNobleGiftCa={`Barnes & Noble Gift Card`}
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
      />
      <Link1
        background="/background-4@2x.png"
        heading4BarnesNobleGiftCa="Belk Gift Card"
        heading510250USD="$15 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="1388px"
        propTop="0px"
      />
      <Link1
        background="/background-5@2x.png"
        heading4BarnesNobleGiftCa="Best Buy Gift Card"
        heading510250USD="$10 - $250 CAD"
        listItemPictureUSwebp="/list--item--picture--cawebp@2x.png"
        propLeft="0px"
        propTop="439px"
      />
      <Link1
        background="/background-6@2x.png"
        heading4BarnesNobleGiftCa="Big W Gift Card"
        heading510250USD="$10 - $250 AUD"
        listItemPictureUSwebp="/list--item--picture--auwebp@2x.png"
        propLeft="347px"
        propTop="439px"
      />
      <Link1
        background="/background-7@2x.png"
        heading4BarnesNobleGiftCa="Build-A-Bear Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="694px"
        propTop="439px"
      />
      <Link1
        background="/background-8@2x.png"
        heading4BarnesNobleGiftCa="catch.com.au Gift Card"
        heading510250USD="$10 - $250 AUD"
        listItemPictureUSwebp="/list--item--picture--auwebp@2x.png"
        propLeft="1041px"
        propTop="439px"
      />
      <Link2
        background="/background-9@2x.png"
        heading4CrateKidsGiftCard={`Crate & Kids Gift Card`}
        heading525250USD="$25 - $250 USD"
        itemPictureCAwebp="/list--item--picture--cawebp@2x.png"
        itemPictureUSwebp="/list--item--picture--uswebp@2x.png"
      />
      <Link
        background="/background-10@2x.png"
        heading4ASDAGiftCard="Currys Gift Card"
        propTop="878px"
        propLeft="0px"
      />
      <Link1
        background="/background-11@2x.png"
        heading4BarnesNobleGiftCa="EB Games Gift Card"
        heading510250USD="$20 - $250 AUD"
        listItemPictureUSwebp="/list--item--picture--auwebp@2x.png"
        propLeft="347px"
        propTop="878px"
      />
      <Link2
        background="/background-12@2x.png"
        heading4CrateKidsGiftCard="eBay Gift Card"
        heading525250USD="$10 - $250 AUD"
        itemPictureCAwebp="/list--item--picture--auwebp@2x.png"
        itemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propTop="878px"
        propLeft="694px"
      />
      <Link1
        background="/background-13@2x.png"
        heading4BarnesNobleGiftCa="Everyday WISH Gift Card"
        heading510250USD="$10 - $250 AUD"
        listItemPictureUSwebp="/list--item--picture--auwebp@2x.png"
        propLeft="1041px"
        propTop="878px"
      />
      <Link1
        background="/background-14@2x.png"
        heading4BarnesNobleGiftCa="GameStop Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="1388px"
        propTop="878px"
      />
      <div className="link5">
        <img className="background-icon5" alt="" src="/background-15@2x.png" />
        <div className="link-inner1">
          <div className="heading-4-guild-wars-ii-2000-parent">
            <div className="heading-415">Guild Wars II 2000 Gem Card</div>
            <div className="heading-5-25-usd-wrapper">
              <div className="heading-510">$25 USD</div>
            </div>
            <div className="heading-5-available-in-frame">
              <div className="heading-511">Available in:</div>
            </div>
            <div className="list-item-picture-usweb-container">
              <img
                className="list-item-picture-usweb1"
                alt=""
                src="/list--item--picture--uswebp-4@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Link1
        background="/background-16@2x.png"
        heading4BarnesNobleGiftCa="Homegoods Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp-5@2x.png"
        propLeft="354.5px"
        propTop="1317px"
      />
      <Link2
        background="/background-17@2x.png"
        heading4CrateKidsGiftCard="Homesense Gift Card"
        heading525250USD="$10 - $250 USD"
        itemPictureCAwebp="/list--item--picture--uswebp-5@2x.png"
        itemPictureUSwebp="/item--picture--cawebp-2@2x.png"
        propTop="1317px"
        propLeft="701.5px"
      />
      <Link1
        background="/background-18@2x.png"
        heading4BarnesNobleGiftCa="JCPenney Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp-5@2x.png"
        propLeft="1048.5px"
        propTop="1317px"
      />
      <div className="link6">
        <img className="background-icon6" alt="" src="/background-19@2x.png" />
        <div className="link-inner2">
          <div className="john-lewis-partners-gift-car-parent">
            <div className="john-lewis-container">
              <p className="john-lewis">{`John Lewis & Partners Gift`}</p>
              <p className="card">Card</p>
            </div>
            <div className="heading-5-10-250-gbp-container">
              <div className="heading-512">£10 - £250 GBP</div>
            </div>
            <div className="heading-5-available-in-wrapper1">
              <div className="heading-513">Available in:</div>
            </div>
            <div className="list-item-picture-gbweb-container">
              <img
                className="list-item-picture-gbweb2"
                alt=""
                src="/list--item--picture--gbwebp-3@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Link1
        background="/background-20@2x.png"
        heading4BarnesNobleGiftCa="Kohl's Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="0px"
        propTop="1756px"
      />
      <Link1
        background="/background-21@2x.png"
        heading4BarnesNobleGiftCa="Macy's Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="347px"
        propTop="1756px"
      />
      <div className="link7">
        <img className="background-icon7" alt="" src="/background-22@2x.png" />
        <div className="link-inner3">
          <div className="frame-parent2">
            <div className="heading-4-marshalls-gift-car-wrapper">
              <div className="heading-416">Marshalls Gift Card</div>
            </div>
            <div className="frame-parent3">
              <div className="heading-5-10-250-usd-container">
                <div className="heading-514">$10 - $250 USD</div>
              </div>
              <div className="product-available-label-parent">
                <div className="heading-515">Available in:</div>
              </div>
              <div className="product-country-pictures-c-a">
                <img
                  className="item-picture-uswebp2"
                  alt=""
                  src="/list--item--picture--uswebp@2x.png"
                />
                <img
                  className="item-picture-cawebp2"
                  alt=""
                  src="/list--item--picture--cawebp@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link1
        background="/background-23@2x.png"
        heading4BarnesNobleGiftCa="NHL Shop Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="1041px"
        propTop="1756px"
      />
      <div className="link8">
        <img className="background-icon8" alt="" src="/background-24@2x.png" />
        <div className="link-inner4">
          <div className="heading-4-roblox-gift-card-parent">
            <div className="heading-417">Roblox Gift Card</div>
            <div className="frame-wrapper">
              <div className="frame-parent4">
                <div className="product-price-a-u-d-wrapper">
                  <div className="product-price-a-u-d">
                    <div className="heading-516">$10 - $250 USD</div>
                    <div className="product-available-label">
                      <div className="heading-517">Available in:</div>
                    </div>
                  </div>
                </div>
                <div className="product-country-pictures-u-s">
                  <img
                    className="item-picture-uswebp3"
                    alt=""
                    src="/item--picture--uswebp-5@2x.png"
                  />
                  <img
                    className="item-picture-auwebp1"
                    alt=""
                    src="/item--picture--auwebp-2@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link1
        background="/background-25@2x.png"
        heading4BarnesNobleGiftCa="The Charity Shop Gift Card"
        heading510250USD="£20 - £100 GBP"
        listItemPictureUSwebp="/list--item--picture--gbwebp-1@2x.png"
        propLeft="0px"
        propTop="2195px"
      />
      <Link1
        background="/background-22@2x.png"
        heading4BarnesNobleGiftCa="TJX Multi-Brand Gift Card"
        heading510250USD="$10 - $250 USD"
        listItemPictureUSwebp="/list--item--picture--uswebp@2x.png"
        propLeft="347px"
        propTop="2195px"
      />
      <Link1
        background="/background-27@2x.png"
        heading4BarnesNobleGiftCa="Winners Gift Card"
        heading510250USD="$10 - $250 CAD"
        listItemPictureUSwebp="/list--item--picture--cawebp@2x.png"
        propLeft="694px"
        propTop="2195px"
      />
      <div className="link9">
        <img className="background-icon9" alt="" src="/background-28@2x.png" />
        <div className="link-inner5">
          <div className="heading-4-xbox-gift-card-parent">
            <div className="heading-418">XBox Gift Card</div>
            <div className="frame-wrapper1">
              <div className="frame-parent5">
                <div className="heading-5-25-100-aud-wrapper">
                  <div className="heading-518">$25 - $100 AUD</div>
                </div>
                <div className="heading-5-available-in-wrapper2">
                  <div className="heading-519">Available in:</div>
                </div>
                <div className="product-country-pictures-g-b">
                  <img
                    className="item-picture-auwebp2"
                    alt=""
                    src="/list--item--picture--auwebp@2x.png"
                  />
                  <img
                    className="item-picture-uswebp4"
                    alt=""
                    src="/list--item--picture--uswebp@2x.png"
                  />
                  <img
                    className="item-picture-gbwebp1"
                    alt=""
                    src="/list--item--picture--gbwebp-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductGrid.propTypes = {
  className: PropTypes.string,
};

export default ProductGrid;
