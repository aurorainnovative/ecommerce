import { useContext } from "react"
import { CartContext } from "../context"

export const useCartSummary = ()=>{
    const {cartItems} = useContext(CartContext);
    const subTotal = cartItems.reduce((subtotal, item)=>{
        const itemPrice = item.quantity * item.price;
        return subtotal + itemPrice
    }, 0);

    const cartItemCount = cartItems.length;
    const discount = subTotal >= 5000 ? 500:0;
    const deliveryFee = 120;
    const total = (deliveryFee + subTotal) - discount;

    
    return {
        subTotal,
        cartItemCount,
        deliveryFee,
        total,
        discount
    };
}