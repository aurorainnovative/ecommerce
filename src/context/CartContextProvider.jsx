import React, { useState } from 'react';
import { CartContext } from '.';


function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const cartItemsCount = cartItems?.length;

    const isExistInCart = (id) => {
        const isExist = cartItems.find((item) => item.id === id);
        if (isExist) {
            return true
        } else {
            return false
        }
    }

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart)
    }

    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart)
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, cartItemsCount, isExistInCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;