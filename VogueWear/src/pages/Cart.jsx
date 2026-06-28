import Navbar from "../components/Navbar";
import "../styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    subtotal,
    cartTotal,
  } = useContext(CartContext);

  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-page">
      <Navbar cartTotal={cartTotal} />
      {isCartEmpty ? (
        <div className="empty-cart">
          <p className="empty-cart-label">Shopping Bag</p>

          <h1>Your Cart is Empty</h1>

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
        <section className="cart-container">
          {/* LEFT SECTION */}

          <div className="cart-items-section">
            <div className="cart-header">
              <h1 className="cart-heading">Shopping Cart</h1>

              <button className="clear-cart-button" onClick={clearCart}>
                Clear Cart
              </button>
            </div>

            {/* CART ITEM */}

            {cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <div className="cart-item-image">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>

                <div className="cart-item-content">
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    {item.size && (
                      <p className="cart-item-size">
                        Size: <span>{item.size}</span>
                      </p>
                    )}

                    <p className="cart-item-price">
                      ₹ {item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="cart-item-actions">
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => decreaseQuantity(item.id, item.size)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id, item.size)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="remove-button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SECTION */}

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <p>Subtotal</p>

              <span>₹ {subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-row">
              <p>Shipping</p>

              <span>Free</span>
            </div>

            <div className="summary-total">
              <p>Total</p>

              <span>₹ {subtotal.toLocaleString()}</span>
            </div>

            <button className="checkout-button">Proceed to Checkout</button>
            <p className="shipping-note">Complimentary shipping and returns.</p>
            <p className="secure-checkout">
              Secure checkout powered by Stripe.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}

export default Cart;
