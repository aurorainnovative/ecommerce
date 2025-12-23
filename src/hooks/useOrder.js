import { useContext } from "react"
import { OrderContext } from "../context"

export const useOrder = () => {
    const {orderItems, orderDetails,  deliveryFee, total} = useContext(OrderContext);
    return {orderItems, orderDetails,  deliveryFee, total}
}