import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import "../styles/Sale.css";

function Sale() {
  return (
    <div className="sale-page">
      <Navbar />

      <section className="sale-hero">
        <p className="sale-subtitle">LIMITED TIME</p>

        <h1>End of Season Sale</h1>

        <p className="sale-description">
          Timeless silhouettes and elevated essentials now available at
          exclusive seasonal prices.
        </p>
      </section>

      <section className="sale-banner">
        <div className="sale-banner-content">
          <p>Exclusive Seasonal Reduction</p>

          <h2>Up to 40% Off</h2>

          <span>Curated luxury essentials with timeless appeal.</span>
        </div>
      </section>

      <section className="sale-intro">
        <h2>Selected Markdowns</h2>
      </section>

      <section className="sale-products">
        {products
          .filter((product) => product.isSale)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </div>
  );
}

export default Sale;
