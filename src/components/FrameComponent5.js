import { Button } from "@mui/material";
import ArticleCardItems from "./ArticleCardItems";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`articles-content-wrapper ${className}`}>
      <div className="articles-content">
        <div className="latest-articles-content-parent">
          <div className="latest-articles-content">
            <div className="horizontal-divider7" />
          </div>
          <h3 className="latest-articles">Latest Articles</h3>
          <div className="latest-article-image">
            <img className="image-icon1" alt="" src="/image-2@2x.png" />
          </div>
        </div>
        <div className="article-description-content-wrapper">
          <div className="article-description-content">
            <div className="description-content">
              <div className="your-go-to-source">
                Your go-to source for inspiration, tips, and stories about
                gift-giving, sustainability, and supporting independent artists.
              </div>
            </div>
            <div className="article-cards">
              <ArticleCardItems
                theArtOfPersonalizationHo="The Art of Personalization: How to Make Your Gifts Extra Special"
                discoverCreativeWaysToAdd="Discover creative ways to add a personal touch to your gifts. From custom messages to unique doodles, learn how to make your presents unforgettable."
              />
              <ArticleCardItems
                theArtOfPersonalizationHo="Eco-Friendly Gift-Giving: Tips for Sustainable Celebrations"
                discoverCreativeWaysToAdd="Celebrate with a conscience! Explore our tips for choosing eco-friendly gifts and wrapping, and learn how small changes can make a big impact on the environment."
              />
              <ArticleCardItems
                theArtOfPersonalizationHo="Never Forget a Date: The Ultimate Guide to Gift Reminders"
                discoverCreativeWaysToAdd="Learn how to use our reminder service to stay on top of important dates. Get tips on planning ahead and ensuring you always have the perfect gift ready."
              />
            </div>
            <div className="button-wrapper">
              <Button
                className="button1"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#007373",
                  borderRadius: "4px",
                  "&:hover": { background: "#007373" },
                  width: 200,
                }}
              >
                More Article
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
