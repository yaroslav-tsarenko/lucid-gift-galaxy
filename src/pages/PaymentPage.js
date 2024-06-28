import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <Header />
      <section className="footer-container">
        <div className="footer-container-inner">
          <FrameComponent2 />
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent1 />
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
};

export default PaymentPage;
