import React from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';

export default function ProductCard({ product, isDark }) {
    return (
        <div className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${
            isDark 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20' 
                : 'bg-white/70 backdrop-blur-xl border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50'
        }`}>
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="px-3 py-1 bg-linear-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full">
                            New
                        </span>
                    )}
                    {product.discount && (
                        <span className="px-3 py-1 bg-linear-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                            -{product.discount}%
                        </span>
                    )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className={`p-2 rounded-xl backdrop-blur-md transition-all duration-200 ${
                        isDark 
                            ? 'bg-white/10 text-white hover:bg-white/20' 
                            : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg'
                    }`}>
                        <Heart className="w-4 h-4" />
                    </button>
                    <button className={`p-2 rounded-xl backdrop-blur-md transition-all duration-200 ${
                        isDark 
                            ? 'bg-white/10 text-white hover:bg-white/20' 
                            : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg'
                    }`}>
                        <Eye className="w-4 h-4" />
                    </button>
                </div>

                {/* Add to Cart Button - Appears on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Category */}
                <p className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    isDark ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                    {product.category}
                </p>

                {/* Product Name */}
                <h3 className={`font-semibold text-base mb-2 line-clamp-2 min-h-12 ${
                    isDark ? 'text-white' : 'text-gray-900'
                }`}>
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        ({product.reviews})
                    </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                    <div>
                        {product.originalPrice && product.originalPrice !== product.price ? (
                            <div className="flex items-center gap-2">
                                <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    ${product.price.toFixed(2)}
                                </span>
                                <span className={`text-sm line-through ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>
                    
                    {product.inStock ? (
                        <span className="text-xs text-emerald-500 font-medium">In Stock</span>
                    ) : (
                        <span className="text-xs text-red-500 font-medium">Out of Stock</span>
                    )}
                </div>
            </div>
        </div>
    );
}