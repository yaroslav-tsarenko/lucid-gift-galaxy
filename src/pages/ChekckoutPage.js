import FrameComponent2 from "../components/FrameComponent2";
import CheckoutFormContainer from "../components/CheckoutFormContainer";
import FooterDesktop from "../components/FooterDesktop";
import "./ChekckoutPage.css";

const ChekckoutPage = () => {
  return (
    <div className="chekckoutpage">
      <FrameComponent2 yourCart="Checkout" />
      <CheckoutFormContainer />
      <FooterDesktop />
    </div>
  );
};

export default ChekckoutPage;
