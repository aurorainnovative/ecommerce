import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';
import Header from '../components/products/Header';
import SearchFilter from '../components/products/SearchFilter';
import Pagination from '../components/products/Pagination';
import { products } from '../data/product';



export default function Products() {
    return (
        <div className="min-h-screen py-12 transition-colors duration-500 bg-linear-to-br 
        from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                <Header />
                <SearchFilter />
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-1">
                        <ProductFilters />
                    </div>
                    <div className="lg:col-span-3">

                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Showing <span className="font-semibold">{products.length}</span> products
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>

                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
}
