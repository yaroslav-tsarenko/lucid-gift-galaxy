import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`background-wrapper ${className}`}>
      <div className="background7">
        <div className="testimonial-divider-row-parent">
          <div className="testimonial-divider-row">
            <div className="horizontal-divider5" />
          </div>
          <h3 className="heading-43">You write, we post</h3>
          <div className="testimonial-divider-row1">
            <div className="horizontal-divider6" />
          </div>
        </div>
        <div className="testimonial-content">
          <blockquote className="im-so-glad">
            “I’m so glad to have found a gift shop that cares about the
            environment. The eco-friendly materials used made my gift even more
            special. I will definitely shop here again.” The reminder service is
            a lifesaver! I never have to worry about forgetting a birthday or
            anniversary anymore. Lucid GiftGalaxy has made my life so much
            easier.”
          </blockquote>
        </div>
        <div className="testimonial-content1">
          <div className="sarah-l-april">— Sarah L. (April 28, 2024)</div>
        </div>
        <div className="testimonial-list">
          <div className="list2">
            <div className="item7" />
            <div className="item8" />
            <div className="item9" />
            <div className="item10" />
            <div className="item11" />
            <div className="item12" />
          </div>
        </div>
        <div className="gradient" />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
