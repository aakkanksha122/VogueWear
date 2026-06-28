import { FiSearch, FiUser, FiShoppingCart, FiHeart } from "react-icons/fi";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import AccountDrawer from "./AccountDrawer";

function Navbar() {
  const { cartTotal } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          <Link to="/">VogueWear</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/new-arrivals">New Arrivals</Link>
          </li>
          <li>
            <Link to="/sales">Sale</Link>
          </li>
        </ul>
        <ul className="nav-actions">
          <li>
            <Link to="/wishlist" className="icon-link" title="Wishlist">
              <FiHeart className="nav-icon" />
              {wishlistItems?.length > 0 && (
                <span className="count">{wishlistItems.length}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="/search" className="icon-link" title="Search">
              <FiSearch className="nav-icon" />
            </Link>
          </li>
          <li>
            <button
              className="icon-link"
              onClick={() => setIsAccountOpen(true)}
            >
              <FiUser className="nav-icon" />
            </button>
          </li>
          <li>
            <Link to="/cart" className="icon-link" title="Cart">
              <FiShoppingCart className="nav-icon" />
              {cartTotal > 0 && <span className="count">{cartTotal}</span>}
            </Link>
          </li>
        </ul>
      </nav>
      {isAccountOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setIsAccountOpen(false)}
          />

          <AccountDrawer onClose={() => setIsAccountOpen(false)} />
        </>
      )}
    </>
  );
}

export default Navbar;
