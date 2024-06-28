import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <section className={`background13 ${className}`}>
      <div className="mobile-selection">
        <h3 className="heading-35">Keep in Touch</h3>
      </div>
      <form className="mobile-divider">
        <div className="divider-elements-parent">
          <input className="divider-elements" type="text" />
          <h1 className="heading-420">Stay connected with Lucid GiftGalaxy</h1>
          <div className="divider-elements1">
            <div className="horizontal-divider11" />
          </div>
        </div>
        <div className="mobile-buttons">
          <div className="button-container">
            <TextField
              className="button7"
              placeholder="Your Email "
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "54px",
                  backgroundColor: "#fff",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
            <Button
              className="button8"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#333",
                borderRadius: "4px",
                "&:hover": { background: "#333" },
                width: 200,
                height: 54,
              }}
            >
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
