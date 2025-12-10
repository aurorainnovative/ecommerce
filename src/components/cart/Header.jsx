import React from 'react';
import { ShoppingCart } from 'lucide-react';

function Header({ itemCount }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-linear-to-br
                from-indigo-100 to-purple-100
                dark:from-indigo-500/20 dark:to-purple-500/20">
                    <ShoppingCart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    Shopping Cart
                </h1>
            </div>

            <p className="text-gray-500 dark:text-gray-400">
                {itemCount > 0
                    ? `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`
                    : 'Your cart is waiting to be filled'}
            </p>
        </div>
    );
}

export default Header;
