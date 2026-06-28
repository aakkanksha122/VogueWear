import { createContext, useEffect, useState } from "react";

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlistItems");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);
  const toggleWishlist = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      setWishlistItems(
        wishlistItems.filter((wishlistItem) => wishlistItem.id !== product.id),
      );
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };
  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export { WishlistContext, WishlistProvider };
