import "../styles/ProductCard.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FiShoppingBag, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, className }) {
  let content;
  const { addToCart } = useContext(CartContext);
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const isWishlisted = wishlistItems.some(
    (wishlistItem) => wishlistItem.id === product.id,
  );
  const navigate = useNavigate();
  if (product.isSale) {
    content = <span className="badge badge-sale">SALE</span>;
  } else if (product.isNew) {
    content = <span className="badge badge-new">NEW</span>;
  } else if (product.isTrending) {
    content = <span className="badge badge-trending">TRENDING</span>;
  }
  const handleAddToCart = () => {
    addToCart(product, "", 1);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  return (
    <div className={`product-card ${className || ""}`}>
      <div className="product-card-badges">{content}</div>
      <div className="product-card-image-wrapper">
        <Link to={`/product/${product.id}`}>
          <img
            className="product-card-image"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <button
          className={`wishlist-button ${isWishlisted ? "active" : ""}`}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted ? <FaHeart /> : <FiHeart />}
        </button>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="product-card-title">{product.name}</h3>
      </Link>
      <div className="product-card-footer">
        <p className="product-card-price">₹ {product.price}</p>
        <button
          className="product-card-cart"
          onClick={() => {
            if (product.requiresSize) {
              navigate(`/product/${product.id}`);
            } else {
              handleAddToCart();
            }
          }}
        >
          {addedToCart ? "✓" : <FiShoppingBag />}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
