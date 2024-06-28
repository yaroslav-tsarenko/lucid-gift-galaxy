import Header from "./Header";
import PropTypes from "prop-types";
import "./MainPage.css";

const MainPage = ({ className = "" }) => {
  return (
    <section className={`main-page ${className}`}>
      <Header />
      <div className="main-page-inner">
        <div className="welcome-message-parent">
          <div className="welcome-message">
            <h1 className="welcome-darnell">Welcome, Darnell</h1>
          </div>
          <div className="your-personal-dashboard">Your Personal Dashboard</div>
        </div>
      </div>
    </section>
  );
};

MainPage.propTypes = {
  className: PropTypes.string,
};

export default MainPage;
