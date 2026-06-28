import "../styles/AccountDrawer.css";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import AuthModal from "./AuthModal";

function AccountDrawer({ onClose }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <div className="account-drawer">
        <div className="account-drawer-header">
          <h2>My Account</h2>

          <button className="account-close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="account-user">
          <div className="account-avatar">
            <FiUser />
          </div>

          <div>
            <h3>Guest User</h3>
            <p>Sign in to access your account</p>
          </div>
        </div>

        <div className="account-drawer-content">
          <button className="account-menu-item">Personal Information</button>

          <button className="account-menu-item">Orders</button>

          <button className="account-menu-item">Wishlist</button>

          <button className="account-menu-item">Addresses</button>
        </div>

        <div className="account-drawer-footer">
          <button
            className="account-auth-btn"
            onClick={() => setIsLoginOpen(true)}
          >
            Login / Register
          </button>
        </div>
      </div>
      {isLoginOpen && <AuthModal onClose={() => setIsLoginOpen(false)} />}
    </>
  );
}

export default AccountDrawer;
