import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import "./ContactInfoLabels.css";

const ContactInfoLabels = ({
  className = "",
  contactInformation,
  formLabel,
}) => {
  return (
    <div className={`contact-info-labels ${className}`}>
      <div className="contact-information2">{contactInformation}</div>
      <TextField
        className="form-field"
        placeholder="Email"
        variant="outlined"
        sx={{
          "& fieldset": { borderColor: "#b6b6b6" },
          "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
          "& .MuiInputBase-input": { color: "#000" },
        }}
      />
    </div>
  );
};

ContactInfoLabels.propTypes = {
  className: PropTypes.string,
  contactInformation: PropTypes.string,
  formLabel: PropTypes.string,
};

export default ContactInfoLabels;
