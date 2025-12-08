import React from 'react';
import { SlidersHorizontal, Star } from 'lucide-react';

export default function ProductFilters({ isDark }) {
    const categories = [
        { name: 'All Products', count: 156 },
        { name: 'Electronics', count: 45 },
        { name: 'Fashion', count: 38 },
        { name: 'Home & Living', count: 29 },
        { name: 'Beauty', count: 22 },
        { name: 'Sports', count: 15 },
        { name: 'Books', count: 7 },
    ];

    const priceRanges = [
        { label: 'Under $25', count: 42 },
        { label: '$25 - $50', count: 38 },
        { label: '$50 - $100', count: 45 },
        { label: '$100 - $200', count: 21 },
        { label: 'Over $200', count: 10 },
    ];

    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className={`rounded-2xl p-6 transition-all duration-300 ${
            isDark 
                ? 'bg-white/5 backdrop-blur-xl border border-white/10' 
                : 'bg-white/70 backdrop-blur-xl border border-gray-100 shadow-lg'
        }`}>
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200 dark:border-white/10">
                <SlidersHorizontal className={`w-5 h-5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Filters
                </h2>
            </div>

            {/* Categories */}
            <div className="mb-8">
                <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Categories
                </h3>
                <div className="space-y-2">
                    {categories.map((category, index) => (
                        <label
                            key={index}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                index === 0
                                    ? isDark
                                        ? 'bg-indigo-500/20 text-indigo-400'
                                        : 'bg-indigo-50 text-indigo-600'
                                    : isDark
                                    ? 'text-gray-400 hover:bg-white/5'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="category"
                                    defaultChecked={index === 0}
                                    className="w-4 h-4 text-indigo-600"
                                />
                                <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <span className="text-xs">{category.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Price Range
                </h3>
                <div className="space-y-2">
                    {priceRanges.map((range, index) => (
                        <label
                            key={index}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                isDark
                                    ? 'text-gray-400 hover:bg-white/5'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-indigo-600 rounded"
                                />
                                <span className="text-sm">{range.label}</span>
                            </div>
                            <span className="text-xs">{range.count}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className="mb-6">
                <h3 className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Rating
                </h3>
                <div className="space-y-2">
                    {ratings.map((rating) => (
                        <label
                            key={rating}
                            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 ${
                                isDark
                                    ? 'text-gray-400 hover:bg-white/5'
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-indigo-600 rounded"
                            />
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < rating
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm ml-auto">& Up</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Reset Button */}
            <button className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}>
                Reset Filters
            </button>
        </div>
    );
}