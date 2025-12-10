import React, { useContext } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { CartContext } from '../../context';

export default function ProductCard({ product }) {

    const {addToCart} = useContext(CartContext)

    const handleAddToCart = (item) => {
        const newProduct = {...item, quantity: 1}
        addToCart(newProduct)
    }
    return (
        <div className="
            group relative rounded-2xl overflow-hidden transition-all duration-300
            bg-white/70 backdrop-blur-xl border border-gray-100
            hover:shadow-2xl hover:shadow-gray-200/50
            dark:bg-white/5 dark:border-white/10 
            dark:hover:bg-white/10 dark:hover:border-white/20
        ">
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="
                        p-2 rounded-xl backdrop-blur-md transition-all duration-200
                        bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg
                        dark:bg-white/10 dark:text-white dark:hover:bg-white/20
                    ">
                        <Heart className="w-4 h-4" />
                    </button>

                    <button className="
                        p-2 rounded-xl backdrop-blur-md transition-all duration-200
                        bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg
                        dark:bg-white/10 dark:text-white dark:hover:bg-white/20
                    ">
                        <Eye className="w-4 h-4" />
                    </button>
                </div>

                {/* Add to Cart */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button onClick={()=>handleAddToCart(product)} className="
                        w-full py-3 px-4 rounded-xl font-semibold text-white
                        bg-linear-to-r from-indigo-600 to-purple-600
                        hover:from-indigo-700 hover:to-purple-700
                        transition-all duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center gap-2
                    ">
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Title */}
                <h3 className="
                    font-semibold text-base mb-2 line-clamp-2 min-h-12
                    text-gray-900 dark:text-white
                ">
                    {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-4 h-4 ${
                                    i < Math.floor(product.rating)
                                        ? 'fill-amber-400 text-amber-400'
                                        : 'text-gray-300 dark:text-gray-600'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        {product.rating.toFixed(1)}
                    </span>
                </div>

                {/* Price */}
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ৳ {product.price}
                </span>
            </div>
        </div>
    );
}
