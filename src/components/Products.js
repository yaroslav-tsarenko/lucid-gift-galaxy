import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import ItemInfo from "./ItemInfo";
import PropTypes from "prop-types";
import "./Products.css";

const Products = ({ className = "" }) => {
  return (
    <section className={`products ${className}`}>
      <div className="items-container">
        <div className="item-container">
          <div className="item-info1">
            <div className="header4">
              <div className="header-child" />
              <div className="product-label">
                <div className="product">Product</div>
              </div>
              <div className="price-quantity-column">
                <div className="price">Price</div>
                <div className="quantity">Quantity</div>
              </div>
              <div className="total">Total</div>
            </div>
            <div className="cart-item">
              <div className="wrapper-product-thumbnail">
                <img
                  className="product-thumbnail-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554@2x.png"
                />
              </div>
              <div className="item-price">
                <div className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </div>
                <div className="discount-20-off">Discount: 20% OFF</div>
              </div>
              <div className="quantity-adjust-parent">
                <div className="quantity-adjust">
                  <div className="price-value">$120.00</div>
                  <div className="credits1">12 Credits</div>
                </div>
                <div className="credit-adjustments">
                  <div className="adjust-buttons">
                    <div className="quantity-icons">
                      <img
                        className="icon-plus1"
                        loading="lazy"
                        alt=""
                        src="/iconplus.svg"
                      />
                    </div>
                    <div className="icon-separator">3</div>
                    <input className="buttons" type="checkbox" />
                  </div>
                  <FormControl
                    className="item-time"
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#007373",
                      borderRadius: "8px",
                      width: "100%",
                      height: "38px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "38px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#1c1c1c",
                        fontSize: 18,
                        fontWeight: "Regular",
                        fontFamily: "Libre Caslon Text",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "16px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="16px"
                          height="16px"
                          src="/time-input.svg"
                          style={{ marginRight: "16px" }}
                        />
                      )}
                    >
                      <MenuItem>Hourly</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
              </div>
              <div className="separator">$120.00</div>
            </div>
          </div>
          <ItemInfo shoppingSpreeGiftCard="Shopping Spree Gift Card" />
          <ItemInfo shoppingSpreeGiftCard="Travel GiftCard" />
          <div className="actions">
            <div className="action-divider" />
            <div className="action-buttons">
              <Button
                className="button9"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "18",
                  borderColor: "#000",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#000" },
                  width: 133,
                  height: 54,
                }}
              >
                Go Back
              </Button>
              <Button
                className="button10"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "18",
                  background: "#007373",
                  borderRadius: "4px",
                  "&:hover": { background: "#007373" },
                  width: 143,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-header">
            <div className="header5">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="total-details">
            <div className="total-values">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="total-separator">$360.00</div>
            </div>
          </div>
          <div className="additional-charges">
            <div className="tax-labels">
              <div className="charge-labels">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="tax-types">
                <div className="div14">$0.00</div>
                <div className="div15">$0.00</div>
              </div>
            </div>
          </div>
          <div className="divider">
            <div className="summary-divider" />
          </div>
          <div className="totals">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div16">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
