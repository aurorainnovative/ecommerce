import React from 'react';
import { Home, ChevronRight, Search, Grid3x3, List, ChevronDown, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';

// Sample products data
const products = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        category: 'Electronics',
        price: 299.99,
        originalPrice: 349.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
        rating: 4.8,
        reviews: 234,
        discount: 15,
        isNew: false,
        inStock: true,
    },
    {
        id: 2,
        name: 'Minimalist Leather Watch',
        category: 'Fashion',
        price: 189.00,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
        rating: 4.9,
        reviews: 189,
        isNew: true,
        inStock: true,
    },
    {
        id: 3,
        name: 'Smart Home Speaker',
        category: 'Electronics',
        price: 149.99,
        originalPrice: 179.99,
        image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&q=80',
        rating: 4.6,
        reviews: 456,
        discount: 17,
        isNew: false,
        inStock: true,
    },
    {
        id: 4,
        name: 'Designer Sunglasses',
        category: 'Fashion',
        price: 249.00,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
        rating: 4.7,
        reviews: 167,
        isNew: true,
        inStock: true,
    },
    {
        id: 5,
        name: 'Professional Camera',
        category: 'Electronics',
        price: 899.00,
        originalPrice: 1099.00,
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
        rating: 4.9,
        reviews: 342,
        discount: 18,
        isNew: false,
        inStock: true,
    },
    {
        id: 6,
        name: 'Organic Cotton T-Shirt',
        category: 'Fashion',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
        rating: 4.5,
        reviews: 89,
        isNew: false,
        inStock: true,
    },
    {
        id: 7,
        name: 'Bluetooth Portable Speaker',
        category: 'Electronics',
        price: 79.99,
        originalPrice: 99.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
        rating: 4.4,
        reviews: 278,
        discount: 20,
        isNew: false,
        inStock: true,
    },
    {
        id: 8,
        name: 'Leather Crossbody Bag',
        category: 'Fashion',
        price: 159.00,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
        rating: 4.8,
        reviews: 145,
        isNew: true,
        inStock: true,
    },
    {
        id: 9,
        name: 'Wireless Gaming Mouse',
        category: 'Electronics',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
        rating: 4.7,
        reviews: 512,
        isNew: false,
        inStock: false,
    },
];

export default function Products() {
    // Set to true for dark theme
    const isDark = false;

    return (
        <div className={`min-h-screen py-12 transition-colors duration-500 ${isDark
                ? 'bg-linear-to-br from-gray-950 via-gray-900 to-gray-950'
                : 'bg-linear-to-br from-gray-50 via-white to-gray-100'
            }`}>
            {/* Background decorations */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-30 ${isDark
                        ? 'bg-linear-to-br from-indigo-600/20 to-purple-600/20'
                        : 'bg-linear-to-br from-indigo-200/50 to-purple-200/50'
                    }`} />
                <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 ${isDark
                        ? 'bg-linear-to-tr from-blue-600/20 to-cyan-600/20'
                        : 'bg-linear-to-tr from-blue-200/50 to-cyan-200/50'
                    }`} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">


                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-xl ${isDark
                                ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20'
                                : 'bg-linear-to-br from-indigo-100 to-purple-100'
                            }`}>
                            <ShoppingBag className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        </div>
                        <h1 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            All Products
                        </h1>
                    </div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Discover our curated collection of premium products
                    </p>
                </div>

                {/* Search and Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    {/* Search */}
                    <div className={`flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isDark
                            ? 'bg-white/5 border border-white/10 focus-within:bg-white/10 focus-within:border-white/20'
                            : 'bg-white/70 border border-gray-100 focus-within:shadow-lg focus-within:border-indigo-200'
                        }`}>
                        <Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-white placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-400'
                                }`}
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className={`flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${isDark
                            ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                            : 'bg-white/70 border border-gray-100 hover:shadow-lg'
                        }`}>
                        <span className={`text-sm font-medium whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Sort by: Popular
                        </span>
                        <ChevronDown className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>

                    {/* View Toggle */}
                    <div className={`flex items-center gap-1 p-1 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-100'
                        }`}>
                        <button className={`p-2.5 rounded-lg transition-all duration-200 ${isDark
                                ? 'bg-white/10 text-white'
                                : 'bg-white text-gray-900 shadow-sm'
                            }`}>
                            <Grid3x3 className="w-4 h-4" />
                        </button>
                        <button className={`p-2.5 rounded-lg transition-all duration-200 ${isDark
                                ? 'text-gray-400 hover:text-white'
                                : 'text-gray-500 hover:text-gray-900'
                            }`}>
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <ProductFilters isDark={isDark} />
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        {/* Results Count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Showing <span className="font-semibold">{products.length}</span> products
                            </p>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    isDark={isDark}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center gap-2 mt-12">
                            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isDark
                                    ? 'bg-white/5 text-gray-400 hover:bg-white/10'
                                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                                }`}>
                                Previous
                            </button>

                            <button className="px-4 py-2 rounded-lg font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg">
                                1
                            </button>

                            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isDark
                                    ? 'bg-white/5 text-white hover:bg-white/10'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>
                                2
                            </button>

                            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isDark
                                    ? 'bg-white/5 text-white hover:bg-white/10'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>
                                3
                            </button>

                            <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isDark
                                    ? 'bg-white/5 text-white hover:bg-white/10'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}