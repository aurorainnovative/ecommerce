import { ShoppingCart } from 'lucide-react';
import React from 'react';

function AddToCartBtn() {
    return (
        <button className="
                        w-full py-3 px-4 rounded-xl font-semibold text-white
                        bg-linear-to-r from-indigo-600 to-purple-600
                        hover:from-indigo-700 hover:to-purple-700
                        transition-all duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center gap-2
                    ">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
        </button>
    );
}

export default AddToCartBtn;