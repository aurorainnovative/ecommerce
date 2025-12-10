import { ShoppingBag } from 'lucide-react';
import React from 'react';

function Header() {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-xl bg-linear-to-br
                        from-indigo-100 to-purple-100
                        dark:from-indigo-500/20 dark:to-purple-500/20">
                    <ShoppingBag className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    All Products
                </h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
                Discover our curated collection of premium products
            </p>
        </div>
    );
}

export default Header;