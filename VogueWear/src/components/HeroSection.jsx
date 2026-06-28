import "../styles/HeroSection.css";
import bannerImage from "../assets/banner-1.jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="heading">Elevate Your Everyday Style</h1>
        <p className="subheading">
          Discover curated fashion designed for confidence, comfort, and
          timeless elegance.
        </p>
        <Link to="/products" className="button">
          Shop Now
        </Link>
      </div>
      <div className="hero-image">
        <img
          src={bannerImage}
          alt="VogueWear Fashion Hero - Elevate Your Style"
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default HeroSection;
