import { ChevronDown, Grid3x3, List, Search } from 'lucide-react';
import React from 'react';

function SearchFilter() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8">

            {/* Search */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 
                            bg-white/70 border border-gray-100
                            focus-within:shadow-lg focus-within:border-indigo-200
                            dark:bg-white/5 dark:border-white/10 dark:focus-within:bg-white/10 dark:focus-within:border-white/20">
                <Search className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 bg-transparent outline-none text-sm
                                    text-gray-900 placeholder:text-gray-400
                                    dark:text-white dark:placeholder:text-gray-500"
                />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200
                            bg-white/70 border border-gray-100 hover:shadow-lg
                            dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Sort by: Popular</span>
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-gray-100 dark:bg-white/5">
                <button className="p-2.5 rounded-lg bg-white text-gray-900 shadow-sm dark:bg-white/10 dark:text-white">
                    <Grid3x3 className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-lg text-gray-500 hover:text-gray-900
                                dark:text-gray-400 dark:hover:text-white">
                    <List className="w-4 h-4" />
                </button>
            </div>
        </div>

    );
}

export default SearchFilter;