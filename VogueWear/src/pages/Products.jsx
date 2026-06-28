import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import "../styles/Products.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromParams = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromParams || "All",
  );
  const [sortOption, setSortOption] = useState("featured");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === selectedCategory.toLowerCase(),
        );

  const sortedProducts = [...filteredProducts];

  if (sortOption === "featured") {
    sortedProducts.sort((a, b) => b.isTrending - a.isTrending);
  }

  if (sortOption === "newest") {
    sortedProducts.sort((a, b) => b.id - a.id);
  }

  if (sortOption === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <Navbar />
      <div className="products-page">
        <aside className="filters-sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h4>Category</h4>
            <p
              onClick={() => {
                setSelectedCategory("All");
                setSearchParams({});
              }}
              className={selectedCategory === "All" ? "active-category" : ""}
            >
              All
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Tops");
                setSearchParams({ category: "Tops" });
              }}
              className={selectedCategory === "Tops" ? "active-category" : ""}
            >
              Tops
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Dresses");
                setSearchParams({ category: "Dresses" });
              }}
              className={
                selectedCategory === "Dresses" ? "active-category" : ""
              }
            >
              Dresses
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Footwear");
                setSearchParams({ category: "Footwear" });
              }}
              className={
                selectedCategory === "Footwear" ? "active-category" : ""
              }
            >
              Footwear
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Accessories");
                setSearchParams({ category: "Accessories" });
              }}
              className={
                selectedCategory === "Accessories" ? "active-category" : ""
              }
            >
              Accessories
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Outerwear");
                setSearchParams({ category: "Outerwear" });
              }}
              className={
                selectedCategory === "Outerwear" ? "active-category" : ""
              }
            >
              Outerwear
            </p>
            <p
              onClick={() => {
                setSelectedCategory("Bottoms");
                setSearchParams({ category: "Bottoms" });
              }}
              className={
                selectedCategory === "Bottoms" ? "active-category" : ""
              }
            >
              Bottoms
            </p>
          </div>

          <div className="filter-group">
            <h4>Size</h4>
            <p>XS</p>
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>

          <div className="filter-group">
            <h4>Color</h4>
            <p>Black</p>
            <p>White</p>
            <p>Red</p>
            <p>Blue</p>
          </div>
        </aside>

        <section className="products-content">
          <div className="products-topbar">
            <p>Showing {sortedProducts.length} Products</p>
            <div className="sort-container">
              <span>Sort By:</span>

              <select
                className="sort-dropdown"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {sortedProducts.map((sortedProduct) => (
              <ProductCard
                className="grid-card"
                key={sortedProduct.id}
                product={sortedProduct}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;
