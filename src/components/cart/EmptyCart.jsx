import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyCart({ isDark }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
                isDark 
                    ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20' 
                    : 'bg-linear-to-br from-indigo-100 to-purple-100'
            }`}>
                <ShoppingBag className={`w-10 h-10 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            </div>
            
            <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your cart is empty
            </h2>

            <p className={`max-w-md mb-8 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>

            <Link
                to={"/products"}
                className="px-8 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
                Start Shopping
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </div>
    );
}
