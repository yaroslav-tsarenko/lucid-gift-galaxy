import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ArticleCardItems.css";

const ArticleCardItems = ({
  className = "",
  theArtOfPersonalizationHo,
  discoverCreativeWaysToAdd,
}) => {
  return (
    <div className={`article-card-items ${className}`}>
      <div className="sending-gift-cards-in-the-us-2">
        <Button
          className="sending-gift-cards-in-the-us-2-child"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#333",
            fontSize: "16",
            background: "#ffd100",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "#ffd100" },
            width: 96,
            height: 38,
          }}
        >
          Article
        </Button>
      </div>
      <div className="article-details">
        <div className="the-art-of">{theArtOfPersonalizationHo}</div>
        <div className="discover-creative-ways">
          {discoverCreativeWaysToAdd}
        </div>
        <Button
          className="button"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#007373",
            borderRadius: "4px",
            "&:hover": { background: "#007373" },
            width: 143,
            height: 54,
          }}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

ArticleCardItems.propTypes = {
  className: PropTypes.string,
  theArtOfPersonalizationHo: PropTypes.string,
  discoverCreativeWaysToAdd: PropTypes.string,
};

export default ArticleCardItems;
