import FrameComponent2 from "../components/FrameComponent2";
import Products from "../components/Products";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent2 yourCart="Your Cart" />
      <Products />
      <FooterDesktop />
    </div>
  );
};

export default CartDetailsPage;
