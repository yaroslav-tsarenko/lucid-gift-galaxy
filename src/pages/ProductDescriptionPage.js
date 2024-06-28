import { Button } from "@mui/material";
import FrameComponent7 from "../components/FrameComponent7";
import Content from "../components/Content";
import Item from "../components/Item";
import Background1 from "../components/Background1";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <FrameComponent7 />
      <Content />
      <div className="card-selection">
        <h3 className="heading-31">Choose a Card</h3>
      </div>
      <section className="card-divider">
        <div className="divider-components">
          <div className="horizontal-divider2" />
        </div>
        <h1 className="heading-41">You write, we post</h1>
        <div className="divider-components1">
          <div className="horizontal-divider3" />
        </div>
      </section>
      <section className="card-list">
        <div className="list1">
          <Item
            pictureBirthdayV1789webp="/picture--birthdayv1789webp@2x.png"
            birthday="Birthday"
          />
          <div className="item3">
            <img
              className="picture-love-v1789webp1"
              loading="lazy"
              alt=""
              src="/picture--lovev1789webp@2x.png"
            />
            <Button
              className="background3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#007373",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#007373" },
                width: 98,
                height: 38,
              }}
            >
              Love
            </Button>
          </div>
          <div className="item4">
            <img
              className="picture-celebration-v1789we1"
              loading="lazy"
              alt=""
              src="/picture--celebrationv1789webp@2x.png"
            />
            <Button
              className="background4"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#007373",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#007373" },
                width: 207.1,
                height: 38,
              }}
            >
              Congratulations
            </Button>
          </div>
          <Item
            pictureBirthdayV1789webp="/picture--babyv1789webp@2x.png"
            birthday="Newborn"
          />
          <div className="item5">
            <img
              className="picture-all-v1789webp1"
              loading="lazy"
              alt=""
              src="/picture--allv1789webp@2x.png"
            />
            <Button
              className="background5"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#007373",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#007373" },
                width: 129.7,
                height: 38,
              }}
            >
              View All
            </Button>
          </div>
        </div>
      </section>
      <Background1 />
      <FooterDesktop />
    </div>
  );
};

export default ProductDescriptionPage;
