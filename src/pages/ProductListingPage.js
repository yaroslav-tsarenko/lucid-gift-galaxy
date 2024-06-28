import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import FrameComponent6 from "../components/FrameComponent6";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header headerAlignSelf="stretch" headerFlex="unset" />
      <section className="productlistingpage-inner">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-10000080581@2x.png"
        />
      </section>
      <section className="product-grid-wrapper">
        <ProductGrid />
      </section>
      <FrameComponent6 />
    </div>
  );
};

export default ProductListingPage;
