import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemInfo.css";

const ItemInfo = ({ className = "", shoppingSpreeGiftCard }) => {
  return (
    <div className={`item-info ${className}`}>
      <div className="item-divider" />
      <div className="item-details">
        <div className="wrapper-item-image">
          <img
            className="item-image-icon"
            alt=""
            src="/rectangle-4554-1@2x.png"
          />
        </div>
        <div className="item-quantity">
          <div className="shopping-spree-gift">{shoppingSpreeGiftCard}</div>
          <div className="worth-usd-400">Worth USD $400</div>
        </div>
        <div className="quantity-controls-parent">
          <div className="quantity-controls">
            <div className="quantity-placeholder">$120.00</div>
            <div className="credits">12 Credits</div>
          </div>
          <div className="control-buttons-parent">
            <div className="control-buttons">
              <div className="increase-button">
                <img className="icon-plus" alt="" src="/iconplus.svg" />
              </div>
              <div className="button-separator">3</div>
              <input className="frame-input" type="checkbox" />
            </div>
            <FormControl
              className="item-duration"
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
                    src="/frame-1000002972-1.svg"
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
        <div className="item-placeholder">$120.00</div>
      </div>
    </div>
  );
};

ItemInfo.propTypes = {
  className: PropTypes.string,
  shoppingSpreeGiftCard: PropTypes.string,
};

export default ItemInfo;
