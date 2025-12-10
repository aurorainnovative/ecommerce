import React, { useState } from 'react';
import { CartContext } from '.';


function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const cartItemsCount = cartItems?.length;

    const addToCart = (product) => {
        const updatedCart = [...cartItems, product];
        setCartItems(updatedCart)
    }

    return (
        <CartContext.Provider value={{cartItems, addToCart, cartItemsCount}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;