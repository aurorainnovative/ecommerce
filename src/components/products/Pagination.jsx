import React from 'react';

function Pagination() {
    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            <button className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-400 hover:bg-gray-200
                            dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10">
                Previous
            </button>

            <button className="px-4 py-2 rounded-lg font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg">
                1
            </button>

            <button className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200
                            dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                2
            </button>

            <button className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200
                            dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                3
            </button>

            <button className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200
                            dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                Next
            </button>
        </div>
    );
}

export default Pagination;