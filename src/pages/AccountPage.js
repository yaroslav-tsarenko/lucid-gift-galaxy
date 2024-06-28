import MainPage from "../components/MainPage";
import FrameComponent from "../components/FrameComponent";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <MainPage />
      <FrameComponent />
      <FooterDesktop />
    </div>
  );
};

export default AccountPage;
