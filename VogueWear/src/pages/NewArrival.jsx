import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import "../styles/NewArrival.css";

function NewArrivals() {
  return (
    <div className="new-arrivals-page">
      <Navbar />

      <section className="new-arrivals-hero">
        <p className="new-arrivals-subtitle">NEW SEASON</p>

        <h1>Curated Arrivals</h1>

        <p className="new-arrivals-description">
          Minimal silhouettes and timeless essentials crafted for the modern
          wardrobe.
        </p>
      </section>

      <section className="new-arrivals-intro">
        <h2>Latest Drop</h2>
      </section>

      <section className="new-arrivals-products">
        {products
          .filter((product) => product.isNew)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </div>
  );
}

export default NewArrivals;
