import "../styles/TrendingCarousel.css";
import { products } from "../data/product";
import ProductCard from "./ProductCard";

function TrendingCarousel() {
  return (
    <section className="trending-carousel">
      <div className="trending-header">
        <h2 className="trending-title">Trending Now</h2>

        <a href="/products" className="trending-link">
          View All
        </a>
      </div>

      <div className="trending-items">
        {products
          .filter(
            (product) =>
              product.isTrending && !product.isNew && !product.isSale,
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default TrendingCarousel;
