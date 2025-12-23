import React, { useContext } from 'react';
import { ShieldCheck, Truck, RefreshCw, CreditCard, Lock, ArrowRight } from 'lucide-react';
import { useCartSummary } from '../../hooks/useCartSummary';
import { useAuth } from '../../hooks/useAuth';
import { CartContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../hooks/useOrder';


 const trustBadges = [
        { icon: ShieldCheck, label: 'Secure Checkout' },
        { icon: Truck, label: 'Free Returns' },
        { icon: RefreshCw, label: '30-Day Guarantee' },
    ];

    const paymentMethods = [
        { name: 'Visa', color: 'from-blue-600 to-blue-700' },
        { name: 'MC', color: 'from-red-500 to-orange-500' },
        { name: 'Amex', color: 'from-blue-400 to-cyan-500' },
        { name: 'PayPal', color: 'from-blue-500 to-indigo-600' },
    ];
export default function CartSummary({  isDark }) {
   const {subTotal, cartItemCount, deliveryFee, total, discount} = useCartSummary();
   const {cartItems} = useContext(CartContext)
   const navigate = useNavigate()
   const {orderDetails} = useOrder()

   const handleOrder = () => {
    if(cartItemCount === 0) return;
    const order = {
        orderItems: cartItems,
        total,
        deliveryFee
    }
    orderDetails(order)
    navigate("/order")
   }


    return (
        <div className={`sticky top-8 rounded-3xl p-6 sm:p-8 transition-all duration-300 ${isDark
            ? 'bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10'
            : 'bg-linear-to-br from-white to-gray-50/80 backdrop-blur-xl border border-gray-100 shadow-xl shadow-gray-200/50'
            }`}
        >
            <h2 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Order Summary
            </h2>

            {/* Summary Lines */}
            <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        Subtotal ({cartItemCount} items)
                    </span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        ${subTotal}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        deliveryFee
                    </span>
                    <span className={`font-semibold ${deliveryFee === 0
                        ? 'text-emerald-500'
                        : isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                    </span>
                </div>

                {discount > 0 && (
                    <div className="flex justify-between items-center">
                        <span className="text-emerald-500 flex items-center gap-2">
                            <span className="px-2 py-0.5 bg-emerald-500/10 rounded-full text-xs font-medium">
                                DISCOUNT
                            </span>
                        </span>
                        <span className="font-semibold text-emerald-500">
                            -${discount.toFixed(2)}
                        </span>
                    </div>
                )}

                {/* Divider */}
                <div className={`border-t pt-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-center">
                        <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Total
                        </span>
                        <div className="text-right">
                            <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                ${total.toFixed(2)}
                            </span>
                            <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                Including taxes
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Promo Code Input */}
            <div className="mb-6">
                <div className={`flex gap-2 p-1.5 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-100'
                    }`}>
                    <input
                        type="text"
                        placeholder="Promo code"
                        className={`flex-1 px-4 py-2.5 bg-transparent rounded-lg text-sm outline-none placeholder:text-gray-500 ${isDark ? 'text-white' : 'text-gray-900'
                            }`}
                    />
                    <button className={`px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${isDark
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-white text-gray-700 hover:shadow-md'
                        }`}>
                        Apply
                    </button>
                </div>
            </div>

            {/* Checkout Button */}
            <button onClick={handleOrder} className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-size-[200%_100%] hover:bg-right transition-all duration-500 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 flex items-center justify-center gap-2 group">
                <Lock className="w-4 h-4" />
                Proceed to Checkout
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Trust Badges */}
            <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="grid grid-cols-3 gap-4">
                    {trustBadges.map((badge, index) => (
                        <div key={index} className="text-center">
                            <badge.icon className={`w-5 h-5 mx-auto mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'
                                }`} />
                            <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                {badge.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Payment Methods */}
            <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                <div className="flex items-center justify-center gap-2 mb-3">
                    <CreditCard className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        We accept
                    </span>
                </div>
                <div className="flex justify-center gap-2">
                    {paymentMethods.map((method, index) => (
                        <div
                            key={index}
                            className={`w-12 h-8 rounded-md bg-linear-to-r ${method.color} flex items-center justify-center`}
                        >
                            <span className="text-white text-xs font-bold">{method.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}