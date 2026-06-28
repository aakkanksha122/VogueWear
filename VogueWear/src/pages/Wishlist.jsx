import Navbar from "../components/Navbar";
import "../styles/Wishlist.css";
import { useContext, useState } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const { wishlistItems, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const isWishlistEmpty = wishlistItems.length === 0;
  const [addedProductId, setAddedProductId] = useState(null);
  const handleAddToCart = (item) => {
    addToCart(item, "", 1);
    setAddedProductId(item.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <Navbar />
      {isWishlistEmpty ? (
        <div className="empty-cart">
          <p className="empty-cart-label">Wishlist</p>
          <h1>Your Wishlist is Empty</h1>

          <p className="empty-cart-text">
            Discover timeless essentials curated for elevated everyday styling.
          </p>
          <Link to="/products">
            <button className="continue-shopping-button">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="wishlist-items">
          <p className="wishlist-label">Wishlist</p>
          <h1>
            Your Wishlist <span>({wishlistItems.length})</span>
          </h1>
          <p className="wishlist-subtitle">Curated pieces saved for later.</p>
          <div className="wishlist-items-container">
            {wishlistItems.map((item) => (
              <div className="wishlist-item" key={item.id}>
                <div className="wishlist-item-image">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="wishlist-item-details">
                  <h3>{item.name}</h3>
                  <p className="wishlist-item-price">₹{item.price}</p>
                </div>
                <div className="wishlist-item-actions">
                  <button
                    className="wishlist-add-cart-btn"
                    onClick={() => {
                      if (item.requiresSize) {
                        navigate(`/product/${item.id}`);
                      } else {
                        handleAddToCart(item);
                      }
                    }}
                    disabled={item.id === addedProductId}
                  >
                    {item.id === addedProductId ? "✓ Added" : "Add to Cart"}
                  </button>

                  <button
                    className="wishlist-remove-btn"
                    onClick={() => toggleWishlist(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
