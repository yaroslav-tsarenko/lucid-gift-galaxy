import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FooterDesktop from "./FooterDesktop";
import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <footer className={`background-parent ${className}`}>
      <div className="background10">
        <div className="choose-card-header">
          <h3 className="heading-34">Keep in Touch</h3>
        </div>
        <form className="choose-card-body">
          <div className="choose-card-divider">
            <input className="choose-card-divider-container" type="text" />
            <h1 className="heading-419">
              Stay connected with Lucid GiftGalaxy
            </h1>
            <input className="choose-card-divider-container1" type="text" />
          </div>
          <div className="choose-card-button-container">
            <div className="choose-card-buttons">
              <TextField
                className="button4"
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
                className="button5"
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
      </div>
      <FooterDesktop />
    </footer>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
