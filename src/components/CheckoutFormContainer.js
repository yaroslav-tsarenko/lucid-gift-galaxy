import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutFormContainer.css";

const CheckoutFormContainer = ({ className = "" }) => {
  return (
    <section className={`checkout-form-container ${className}`}>
      <div className="frame-parent6">
        <form className="billing-header-parent">
          <div className="billing-header">
            <h1 className="checkout">Checkout</h1>
            <TextField
              className="header6"
              placeholder="Billing Details"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#eee",
                  borderRadius: "5px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <div className="form-field-block">
              <div className="row-1">
                <TextField
                  className="block-1"
                  placeholder="First Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-2"
                  placeholder="Last Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
              <div className="row-2">
                <TextField
                  className="block-11"
                  placeholder="Company Name"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="block-21">
                  <div className="country">Country</div>
                  <img className="icon4" alt="" src="/icon-2.svg" />
                </div>
              </div>
              <TextField
                className="row-3"
                placeholder="Street Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-22"
                placeholder="Apartment / Suite / Unit / etc. (Optional)"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="row-4"
                placeholder="Town / City"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <TextField
                className="block-23"
                placeholder="Email Address"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#b6b6b6" },
                  "& .MuiInputBase-root": {
                    height: "50px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="row-5">
                <TextField
                  className="block-12"
                  placeholder="ZIP"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <TextField
                  className="block-24"
                  placeholder="Phone"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
              </div>
            </div>
            <div className="billing-header-child" />
            <div className="billing-title">
              <Button
                className="button11"
                disableElevation
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#5a5a5a",
                  fontSize: "16",
                  borderColor: "#b6b6b6",
                  borderRadius: "4px",
                  "&:hover": { borderColor: "#b6b6b6" },
                  width: 100,
                  height: 54,
                }}
              >
                Back
              </Button>
              <Button
                className="button12"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#1c1c1c",
                  fontSize: "16",
                  background: "#007373",
                  borderRadius: "4px",
                  "&:hover": { background: "#007373" },
                  width: 137,
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
          <div className="order-details">
            <div className="checkout-details2">
              <div className="header7">
                <div className="checkout-details3">Checkout Details</div>
              </div>
              <div className="order-summary">
                <div className="cart-subtotal1">Cart Subtotal</div>
                <div className="total-amounts">$360.00</div>
              </div>
              <div className="order-summary1">
                <div className="shipping-handling1">{`Shipping & Handling`}</div>
                <div className="div17">$0.00</div>
              </div>
              <div className="order-summary2">
                <div className="other-taxes1">Other Taxes</div>
                <div className="div18">$0.00</div>
              </div>
              <div className="summary-divider1" />
              <div className="order-summary3">
                <div className="grand-total1">Grand Total</div>
                <div className="div19">$360.00</div>
              </div>
            </div>
            <div className="transfer-options">
              <div className="header8">
                <div className="transfer-options1">Transfer Options</div>
              </div>
              <div className="checkout-details4">
                <div className="logos-block">
                  <div className="block-13">
                    <div className="logo-block">
                      <img
                        className="image-1-icon"
                        loading="lazy"
                        alt=""
                        src="/image-11@2x.png"
                      />
                    </div>
                    <div className="bank-transfer">
                      <p className="bank">Bank</p>
                      <p className="transfer">Transfer</p>
                    </div>
                  </div>
                  <div className="block-25">
                    <div className="logo-block1">
                      <img
                        className="image-2-icon"
                        loading="lazy"
                        alt=""
                        src="/image-21@2x.png"
                      />
                    </div>
                    <div className="google-pay">
                      <p className="google">Google</p>
                      <p className="pay">Pay</p>
                    </div>
                  </div>
                </div>
                <div className="method-container">
                  <div className="block-3">
                    <div className="logo-block2">
                      <img
                        className="image-3-icon"
                        loading="lazy"
                        alt=""
                        src="/image-3@2x.png"
                      />
                    </div>
                    <div className="apple-pay">
                      <p className="apple">Apple</p>
                      <p className="pay1">Pay</p>
                    </div>
                  </div>
                  <div className="block-4">
                    <div className="logo-block3">
                      <img
                        className="image-4-icon"
                        loading="lazy"
                        alt=""
                        src="/image-4@2x.png"
                      />
                    </div>
                    <div className="paypal">PayPal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="checkout1">
          <div className="header9">
            <div className="checkout2">Checkout</div>
          </div>
          <div className="checkout-details5">
            <div className="your-personal-data">
              Your Personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our product
            </div>
            <Button
              className="button13"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#1c1c1c",
                fontSize: "16",
                background: "#007373",
                borderRadius: "4px",
                "&:hover": { background: "#007373" },
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

CheckoutFormContainer.propTypes = {
  className: PropTypes.string,
};

export default CheckoutFormContainer;
