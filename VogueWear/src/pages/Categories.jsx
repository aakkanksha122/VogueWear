import Navbar from "../components/Navbar";
import "../styles/Categories.css";
import shirt from "../assets/shirt-Category.jpg";
import dress from "../assets/dress-Category.jpg";
import footwear from "../assets/boots-Category.jpg";
import accessories from "../assets/accessories-Category.jpg";
import outerwear from "../assets/blazer-Category.jpg";
import bottoms from "../assets/bottom-Category.jpg";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-page">
      <Navbar />

      <section className="categories-header">
        <p className="categories-subtitle">DISCOVER COLLECTIONS</p>

        <h1>Curated Categories</h1>

        <p className="categories-description">
          Explore refined essentials designed for every mood and moment.
        </p>
      </section>

      <section className="category-section">
        <div className="category-content">
          <span>01</span>

          <h2>Tops</h2>

          <p>
            Elevated wardrobe staples designed with modern tailoring and
            timeless silhouettes.
          </p>

          <Link to="/products?category=tops">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=tops">
            <img src={shirt} alt="tops" />
          </Link>
        </div>
      </section>

      <section className="category-section reverse">
        <div className="category-content">
          <span>02</span>

          <h2>Dresses</h2>

          <p>
            Minimal elegance crafted for refined occasions and effortless
            styling.
          </p>

          <Link to="/products?category=dresses">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=dresses">
            <img src={dress} alt="dresses" />
          </Link>
        </div>
      </section>

      <section className="category-section">
        <div className="category-content">
          <span>03</span>

          <h2>Footwear</h2>

          <p>
            Contemporary footwear balancing statement aesthetics with comfort.
          </p>

          <Link to="/products?category=footwear">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=footwear">
            <img src={footwear} alt="footwear" />
          </Link>
        </div>
      </section>

      <section className="category-section reverse">
        <div className="category-content">
          <span>04</span>

          <h2>Accessories</h2>

          <p>
            Curated finishing touches that elevate every contemporary wardrobe.
          </p>

          <Link to="/products?category=accessories">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=accessories">
            <img src={accessories} alt="accessories" />
          </Link>
        </div>
      </section>

      <section className="category-section">
        <div className="category-content">
          <span>05</span>

          <h2>Outerwear</h2>

          <p>
            Structured layers and elevated outer pieces crafted for transitional
            styling.
          </p>

          <Link to="/products?category=outerwear">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=outerwear">
            <img src={outerwear} alt="outerwear" />
          </Link>
        </div>
      </section>

      <section className="category-section reverse">
        <div className="category-content">
          <span>06</span>

          <h2>Bottoms</h2>

          <p>
            Tailored trousers and relaxed essentials designed for versatile
            modern dressing.
          </p>

          <Link to="/products?category=bottoms">
            <button>EXPLORE COLLECTION</button>
          </Link>
        </div>

        <div className="category-image">
          <Link to="/products?category=bottoms">
            <img src={bottoms} alt="bottoms" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Categories;
