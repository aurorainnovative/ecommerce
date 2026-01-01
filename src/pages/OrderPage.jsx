import { useState } from "react";
import { useOrder } from "../hooks/useOrder";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
    const {orderItems, total, deliveryFee} = useOrder();
    const [isLoading, setIsLoading] = useState(false)
    const {user} = useAuth()
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
      fullname: "",
      phone: "",
      address: "",
      city: "",
      zipCode: ""
    });

    const navigate = useNavigate();

    const handleOnChange = (e) => {
      const {name, value} = e.target;
      setFormData((prev)=> ({
        ...prev,
        [name]: value
      }))
    }


    const onSubmit = async () => {
      setError("")
      const {fullname, phone, address, city, zipCode} = formData;
      if(!fullname) return setError("Fullname is required!");
      if(!phone) return setError("phone is required!");
      if(!address) return setError("address is required!");
      if(!city) return setError("city is required!");
      if(!zipCode) return setError("zip code is required!");
      setIsLoading(true)
      
      const order = {...formData, orderItems, total, deliveryFee, userId: user.id};
      
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
          method: "POST",
          headers: {
            "content-type":"application/json"
          },
          body: JSON.stringify(order)
        });

        const result = await response.json();
        localStorage.removeItem("cartItems");
        navigate("/my-orders");
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false)
      }
    }

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
              {error && <p className="text-white bg-red-400 col-span-2 p-2 text-sm rounded-sm">{error}</p>}
              <input className="input" placeholder="Full Name" name="fullname" value={formData?.fullname} onChange={handleOnChange} />
              <input className="input" placeholder="Phone Number" name="phone" value={formData?.phone} onChange={handleOnChange} />
              <input className="input md:col-span-2" placeholder="Address" name="address" value={formData?.address} onChange={handleOnChange} />
              <input className="input" placeholder="City" name="city" value={formData?.city} onChange={handleOnChange} />
              <input className="input" placeholder="Postal Code" name="zipCode" value={formData?.zipCode} onChange={handleOnChange} />
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

          <button disabled={isLoading} onClick={onSubmit} className="w-full disabled:bg-gray-400 mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium">
            {isLoading ? "Submitting...":"Place Order"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderPage;
