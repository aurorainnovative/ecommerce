import React, { useContext, useState } from 'react'
import { CartContext, OrderContext } from '.'
import { useCartSummary } from '../hooks/useCartSummary';

const OrderProvider = ({children}) => {
    const {cartItems} = useContext(CartContext);
    const {deliveryFee: shippingFee, total: cartTotal} = useCartSummary()
    const [orderItems, setOrderItems] = useState(cartItems);
    const [deliveryFee, setDeliveryFee] = useState(shippingFee);
    const [total, setTotal] = useState(cartTotal);

    const orderDetails = (order) => {
        setOrderItems(order.orderItems);
        setDeliveryFee(order.deliveryFee);
        setTotal(order.total)
    }

  return (
    <OrderContext.Provider value={{orderItems, orderDetails, deliveryFee, total}}>
        {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider