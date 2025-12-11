import { Star } from 'lucide-react';
import { products } from '../../data/product';
import ProductCard from '../products/ProductCard';
function BestSelling() {

    return (
        <div className='w-full flex flex-col items-center  gap-5'>
            <h2 className='text-2xl font-bold w-full'>Best Selling Items</h2>
            <div className='grid grid-cols-1 px-5 md:grid-cols-3 gap-10 mx-auto place-content-center'>
                {/* single product card */}
                {
                    products?.map((item) => <ProductCard key={item.id} product={item} />)
                }
            </div>
        </div>
    );
}

export default BestSelling;