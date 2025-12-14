import React, { useContext } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { CartContext } from '../../context';

export default function CartItem({ item }) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    console.log(item)
    return (
        <div
            className={`group relative flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl transition-all duration-300
                bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10
                hover:shadow-xl hover:shadow-gray-200/50 dark:hover:bg-white/10 dark:hover:border-white/20
            `}
        >
            {/* Product Image */}
            <div
                className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0
                    bg-gray-100 dark:bg-white/10
                `}
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                        <h3
                            className="font-semibold text-base sm:text-lg truncate text-gray-900 dark:text-white"
                        >
                            {item.title}
                        </h3>

                        <p className="text-sm mt-1 line-clamp-1 text-gray-500 dark:text-gray-400">
                            {item.description}
                        </p>
                    </div>

                    {/* Remove Button */}
                    <button onClick={()=>removeFromCart(item.id)}
                        className="p-2 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100
                            hover:bg-red-50 text-red-500 dark:hover:bg-red-500/20 dark:text-red-400"
                    >
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>

                {/* Price & Quantity */}
                <div className="flex items-end justify-between mt-4 gap-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1 rounded-xl p-1 bg-gray-100 dark:bg-white/10">
                        <button
                            onClick={()=>decreaseQuantity(item.id)}
                            className="p-2 rounded-lg transition-all duration-200
                                hover:bg-white text-gray-700 hover:shadow-sm dark:text-white dark:hover:bg-white/10"
                        >
                            <Minus className="w-4 h-4" />
                        </button>

                        <span
                            className="w-10 text-center font-semibold tabular-nums text-gray-900 dark:text-white"
                        >
                            {item.quantity}
                        </span>

                        <button
                            onClick={()=>increaseQuantity(item.id)}
                            className="p-2 rounded-lg transition-all duration-200
                                hover:bg-white text-gray-700 hover:shadow-sm dark:text-white dark:hover:bg-white/10"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                            ৳{item.price * item.quantity}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}