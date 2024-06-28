import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <form className={`background8 ${className}`}>
      <div className="card-content">
        <h3 className="heading-33">Keep in Touch</h3>
      </div>
      <div className="card-divider-row-parent">
        <input className="card-divider-row" type="text" />
        <h1 className="heading-44">Stay connected with Lucid GiftGalaxy</h1>
        <div className="card-divider-row1">
          <div className="horizontal-divider8" />
        </div>
      </div>
      <div className="card-button-container-wrapper">
        <div className="card-button-container">
          <TextField
            className="button2"
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
            className="button3"
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
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
