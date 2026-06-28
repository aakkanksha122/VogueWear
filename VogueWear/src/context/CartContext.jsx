import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const increaseQuantity = (id, size) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === id && cartItem.size === size
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem,
      ),
    );
  };

  const decreaseQuantity = (id, size) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === id && cartItem.size === size
          ? {
              ...cartItem,
              quantity: cartItem.quantity === 1 ? 1 : cartItem.quantity - 1,
            }
          : cartItem,
      ),
    );
  };

  const removeItem = (id, size) => {
    setCartItems(
      cartItems.filter(
        (cartItem) => !(cartItem.id === id && cartItem.size === size),
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (product, selectedSize, quantity) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.size === selectedSize,
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === selectedSize
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem,
        ),
      );
    } else {
      setCartItems([
        ...cartItems,

        {
          ...product,
          size: selectedSize,
          quantity,
        },
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
        subtotal,
        cartTotal,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
