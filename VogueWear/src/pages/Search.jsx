import Navbar from "../components/Navbar";
import "../styles/Search.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { products } from "../data/product";
import ProductCard from "../components/ProductCard";
import AIStylist from "../components/AIStylist";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="search-page">
      <Navbar />

      <section className="search-header">
        <p className="search-label">Discover Your Style</p>

        <h1 className="search-title">Search Products</h1>

        <p className="search-subtitle">
          Explore our curated collection of fashion essentials.
        </p>
      </section>

      <section className="search-input-section">
        <div className="search-input-wrapper">
          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search for dresses, bags, tops..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="search-results">
        {filteredProducts?.length === 0 ? (
          <div className="no-results">
            <h2>No Products Found</h2>
            <p>Try searching for dresses, bags, tops...</p>
          </div>
        ) : (
          <>
            <p className="results-count">
              {filteredProducts?.length} Products Found
            </p>
            <div className="search-products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </section>
      <AIStylist />
    </div>
  );
}

export default Search;
