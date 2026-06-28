import { products } from "../data/product";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import Navbar from "../components/Navbar";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [selectedSize, setSelectedSize] = useState("");

  const [sizeError, setSizeError] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize && product.requiresSize) {
      setSizeError(true);
      return;
    } else {
      setSizeError(false);
      addToCart(product, selectedSize, quantity);
      setAddedToCart(true);
      setQuantity(1);
      setSelectedSize("");

      setTimeout(() => {
        setAddedToCart(false);
      }, 2000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="product-details">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="details-category">{product.category}</p>
          <p className="details-price">₹ {product.price}</p>
          <p className="product-description">{product.description}</p>
          {product.requiresSize && (
            <div className="size-section">
              <p className="section-label">Select Size</p>

              <div className={`size-options ${sizeError ? "size-error" : ""}`}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={selectedSize === size ? "active-size" : ""}
                  >
                    {size}
                  </button>
                ))}
                {sizeError && (
                  <p className="size-error-text">Please select a size</p>
                )}
              </div>
            </div>
          )}
          <div className="quantity-section">
            <p className="section-label">Quantity</p>

            <div className="quantity-controls">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          <button className="cart-button" onClick={handleAddToCart}>
            {addedToCart ? "Added ✓" : "Add To Cart"}
          </button>
          <div className="product-meta">
            <p>
              <span>Material:</span> Premium Cotton Blend
            </p>

            <p>
              <span>Fit:</span> Relaxed Contemporary Fit
            </p>

            <p>
              <span>Delivery:</span> Estimated in 3-5 Business Days
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
