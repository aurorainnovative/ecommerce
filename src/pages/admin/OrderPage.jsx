import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'


const OrderPage = () => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:4040/order");
            const result = await response.json();

            if(!response.ok) throw new Error(result.message);

            console.log(result)
            setOrders(result.data);

        } catch (error) {
            console.log("Orders Error : ", error)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])
  return (
    <div className="p-6 max-w-4xl mx-auto flex flex-wrap gap-8 justify-center">
      {
        orders.map((order)=><OrderCard key={order._id} order={order} />)
      }
    </div>
  )
}

export default OrderPage