import { Button } from "@mui/material";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Item from "../components/Item";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Background from "../components/Background";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage-inner">
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src="/frame-1000008058@2x.png"
        />
      </div>
      <FrameComponent
        howLucidGiftGalaxyWorks="How Lucid GiftGalaxy Works"
        image="/image@2x.png"
      />
      <section className="homepage-child">
        <div className="frame-parent">
          <div className="at-lucid-giftgalaxy-creating-wrapper">
            <div className="at-lucid-giftgalaxy">
              At Lucid GiftGalaxy, creating the perfect gift is as easy as
              1-2-3!
            </div>
          </div>
          <div className="frame-group">
            <FrameComponent1
              sVG="/svg.svg"
              heading4ChooseYourDesign="Choose Your Design"
              browseOurExtensiveCollect="Browse our extensive collection of designs to find the one that speaks to you. Whether it’s elegant, fun, or quirky, we have something for everyone."
            />
            <FrameComponent1
              sVG="/svg-1.svg"
              heading4ChooseYourDesign={`Write & Doodle`}
              browseOurExtensiveCollect="Make your gift truly unique by adding your personal touch. Write a heartfelt message, include names, dates, or even doodle your own designs."
            />
            <FrameComponent1
              sVG="/svg-2.svg"
              heading4ChooseYourDesign={`We Print & Send`}
              browseOurExtensiveCollect="Once you’re satisfied with your creation, leave the rest to us! We’ll handle the printing with top-notch quality and ensure your gift is beautifully packaged and sent directly to your recipient’s door."
            />
          </div>
        </div>
      </section>
      <div className="heading-3-choose-a-card-wrapper">
        <h3 className="heading-3">Choose a Card</h3>
      </div>
      <section className="divider-row-parent">
        <div className="divider-row">
          <div className="horizontal-divider" />
        </div>
        <h1 className="heading-4">You write, we post</h1>
        <div className="divider-row1">
          <div className="horizontal-divider1" />
        </div>
      </section>
      <section className="list-wrapper">
        <div className="list">
          <Item
            pictureBirthdayV1789webp="/picture--birthdayv1789webp@2x.png"
            birthday="Birthday"
          />
          <div className="item">
            <img
              className="picture-love-v1789webp"
              loading="lazy"
              alt=""
              src="/picture--lovev1789webp@2x.png"
            />
            <Button
              className="background"
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
          <div className="item1">
            <img
              className="picture-celebration-v1789we"
              loading="lazy"
              alt=""
              src="/picture--celebrationv1789webp@2x.png"
            />
            <Button
              className="background1"
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
          <div className="item2">
            <img
              className="picture-all-v1789webp"
              loading="lazy"
              alt=""
              src="/picture--allv1789webp@2x.png"
            />
            <Button
              className="background2"
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
      <FrameComponent
        howLucidGiftGalaxyWorks="Why Choose Lucid GiftGalaxy?"
        image="/image-1@2x.png"
      />
      <section className="frame-section">
        <div className="frame-container">
          <div className="thoughtful-gifts-that-make-a-d-wrapper">
            <div className="thoughtful-gifts-that">
              Thoughtful gifts that make a difference.
            </div>
          </div>
          <div className="frame-div">
            <FrameComponent1
              sVG="/svg-3.svg"
              heading4ChooseYourDesign="Support the Environment"
              browseOurExtensiveCollect="At Lucid GiftGalaxy, we are committed to sustainability. We use eco-friendly materials and processes to ensure that your gifts not only bring joy to your loved ones but also help protect our planet. By choosing us, you’re making a positive impact."
            />
            <FrameComponent1
              sVG="/svg-4.svg"
              heading4ChooseYourDesign="Never Forget a Date"
              browseOurExtensiveCollect="Our reminder service ensures you’ll never miss an important occasion again. Simply set up reminders for birthdays, anniversaries, and special events, and we’ll send you timely notifications so you can always be prepared with the perfect gift."
            />
            <FrameComponent1
              sVG="/svg.svg"
              heading4ChooseYourDesign="Support Independent Art"
              browseOurExtensiveCollect="We collaborate with talented independent artists and designers to bring you unique and creative gifts. When you shop with us, you’re supporting the creative community and helping artists thrive. Each purchase contributes to their work and passion, making your gift even more meaningful."
            />
          </div>
        </div>
      </section>
      <FrameComponent3 />
      <FrameComponent4 />
      <FrameComponent5 />
      <Background />
      <FooterDesktop />
    </div>
  );
};

export default HomePage;
