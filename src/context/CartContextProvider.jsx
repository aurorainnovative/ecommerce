import React, { useEffect, useState } from "react";
import { CartContext } from ".";

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem("cartItems");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const cartItemsCount = cartItems?.length;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const isExistInCart = (id) => {
    const isExist = cartItems.find((item) => item.id === id);
    if (isExist) {
      return true;
    } else {
      return false;
    }
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedArray = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return { ...item };
      }
    });

    setCartItems(updatedArray);
  };

  const decreaseQuantity = (id) => {
    const updatedArray = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item, quantity: 1 };
        }
      } else {
        return { ...item };
      }
    });

    setCartItems(updatedArray);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        cartItemsCount,
        isExistInCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
