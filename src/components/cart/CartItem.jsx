import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';

export default function CartItem({ item, isDark }) {
    return (
        <div className={`group relative flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl transition-all duration-300 ${isDark
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20'
                : 'bg-white/70 backdrop-blur-xl border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50'
            }`}
        >
            {/* Product Image */}
            <div className={`relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 ${isDark ? 'bg-white/10' : 'bg-gray-100'
                }`}>
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.discount && (
                    <div className="absolute top-2 left-2 px-2 py-1 bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        -{item.discount}%
                    </div>
                )}
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between min-w-0">
                <div className="flex justify-between items-start gap-2">
                    <div className="min-w-0">
                        <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-600'
                            }`}>
                            {item.brand}
                        </p>
                        <h3 className={`font-semibold text-base sm:text-lg truncate ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {item.name}
                        </h3>
                        {item.variant && (
                            <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                {item.variant}
                            </p>
                        )}
                    </div>

                    {/* Remove Button */}
                    <button className={`p-2 rounded-xl transition-all duration-300 opacity-60 hover:opacity-100 ${isDark
                            ? 'hover:bg-red-500/20 text-red-400'
                            : 'hover:bg-red-50 text-red-500'
                        }`}>
                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>

                {/* Price & Quantity */}
                <div className="flex items-end justify-between mt-4 gap-4">
                    {/* Quantity Selector */}
                    <div className={`flex items-center gap-1 rounded-xl p-1 ${isDark ? 'bg-white/10' : 'bg-gray-100'
                        }`}>
                        <button className={`p-2 rounded-lg transition-all duration-200 ${isDark
                                ? 'hover:bg-white/10 text-white'
                                : 'hover:bg-white text-gray-700 hover:shadow-sm'
                            }`}>
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className={`w-10 text-center font-semibold tabular-nums ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            {item.quantity}
                        </span>
                        <button className={`p-2 rounded-lg transition-all duration-200 ${isDark
                                ? 'hover:bg-white/10 text-white'
                                : 'hover:bg-white text-gray-700 hover:shadow-sm'
                            }`}>
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                        {item.originalPrice && item.originalPrice !== item.price && (
                            <p className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                ${(item.originalPrice * item.quantity).toFixed(2)}
                            </p>
                        )}
                        <p className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                            ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}