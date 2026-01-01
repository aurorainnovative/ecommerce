import { PackageOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const {user} = useAuth()

  const fetchOrders = async () => {
          try {
              const response = await fetch(`${import.meta.env.VITE_API_URL}/order/my-orders/${user.id}`);
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
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold">My Orders</h1>
          <p className="text-gray-500 text-sm">
            Track and manage your orders
          </p>
        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div className="bg-white rounded-xl shadow-sm border p-10 text-center">
            <PackageOpen size={48} className="mx-auto text-gray-400" />
            <h2 className="mt-4 font-semibold text-lg">
              You have no orders yet
            </h2>
            <p className="text-gray-500 text-sm">
              Start shopping to see your orders here
            </p>
          </div>
        )}

        {/* Orders List */}
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-sm border"
          >
            {/* Order Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center p-5 border-b gap-3">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-medium">{order._id}</p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {order.status}
                </span>

                <p className="font-semibold text-lg">
                  ৳{order.total + order.deliveryFee}
                </p>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-5 space-y-4">
              {order.orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border rounded-lg p-3"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">
                      Qty {item.quantity} × ৳{item.price}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ৳{item.quantity * item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-5 border-t text-sm">
              <p className="text-gray-500">
                Delivery Fee: ৳{order.deliveryFee}
              </p>
              <p className="font-semibold">
                Total: ৳{order.total + order.deliveryFee}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrdersPage;
