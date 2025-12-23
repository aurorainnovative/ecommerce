import { useOrder } from "../hooks/useOrder";

const OrderPage = () => {
    const {orderItems, total, deliveryFee} = useOrder()


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">

          {/* Product List */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-6">Your Products</h2>

            <div className="space-y-4">
              {orderItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        ৳{item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="font-semibold">
                    ৳{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Phone Number" />
              <input className="input md:col-span-2" placeholder="Address" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="Postal Code" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳{total - deliveryFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>৳{deliveryFee}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-4">
              <span>Total</span>
              <span>৳{total}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium">
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderPage;
