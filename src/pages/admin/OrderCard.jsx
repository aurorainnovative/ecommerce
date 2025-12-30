import { ShoppingBag } from "lucide-react";

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 space-y-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <div>
          <h2 className="font-semibold text-lg">Order ID</h2>
          <p className="text-sm text-gray-500">{order._id}</p>
        </div>
        <div className="flex items-center gap-2 text-blue-600">
          <ShoppingBag size={18} />
          <span className="font-medium">Total ৳{order.total}</span>
        </div>
      </div>

      {/* User Info */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <p>
          <span className="font-medium">Name:</span> {order.fullname}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {order.phone}
        </p>
        <p>
          <span className="font-medium">City:</span> {order.city}
        </p>
        <p>
          <span className="font-medium">Zip:</span> {order.zipCode}
        </p>
        <p className="col-span-2">
          <span className="font-medium">Address:</span> {order.address}
        </p>
      </div>

      {/* Order Items */}
      <div className="space-y-3">
        <h3 className="font-semibold">Order Items</h3>

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
                Qty: {item.quantity} × ৳{item.price}
              </p>
            </div>

            <p className="font-semibold">
              ৳{item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t pt-3 text-sm">
        <p className="text-gray-500">
          Delivery Fee: ৳{order.deliveryFee}
        </p>
        <p className="font-semibold text-lg">
          Grand Total: ৳{order.total + order.deliveryFee}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
