import { Star } from 'lucide-react';
import product1 from "../../assets/products/f1.jpg"
import product2 from "../../assets/products/f2.jpg"
import product3 from "../../assets/products/f3.jpg"
import product4 from "../../assets/products/f4.jpg"
import product5 from "../../assets/products/f5.jpg"
import product6 from "../../assets/products/f6.jpg"
import product7 from "../../assets/products/f7.jpg"
import product8 from "../../assets/products/f8.jpg"


function BestSelling() {
    const products = [
        {
            id: 1,
            image: product1,
            title: "Trendy Summer T-Shirt",
            price: 1200,
            rating: 4.5,
            description: "Soft and breathable cotton t-shirt perfect for everyday summer wear.",
        },
        {
            id: 2,
            image: product2,
            title: "Casual Cotton Shirt",
            price: 1500,
            rating: 4.3,
            description: "High-quality cotton shirt designed for comfort and a casual stylish look.",
        },
        {
            id: 3,
            image: product3,
            title: "Mens Classic Hoodie",
            price: 2200,
            rating: 4.8,
            description: "Warm and cozy hoodie with premium fabric for all-season comfort.",
        },
        {
            id: 4,
            image: product4,
            title: "Slim Fit Jeans",
            price: 1990,
            rating: 4.2,
            description: "Trendy slim-fit denim jeans with durable and flexible stitching.",
        },
        {
            id: 5,
            image: product5,
            title: "Sports Sneaker Shoe",
            price: 2800,
            rating: 4.7,
            description: "Lightweight sports sneakers offering comfort, support, and style.",
        },
        {
            id: 6,
            image: product6,
            title: "Comfortable Shorts",
            price: 900,
            rating: 4.1,
            description: "Soft stretchable shorts suitable for gym, sports, or casual wear.",
        },
        {
            id: 7,
            image: product7,
            title: "Stylish Jacket",
            price: 3200,
            rating: 4.9,
            description: "Trendy and warm jacket with modern fit and durable zipper quality.",
        },
        {
            id: 8,
            image: product8,
            title: "Cotton Polo Shirt",
            price: 1400,
            rating: 4.4,
            description: "Premium polo shirt made from skin-friendly fabric with a classic look.",
        }
    ];


    return (
        <div className='w-full flex flex-col items-center  gap-5'>
            <h2 className='text-2xl font-bold w-full'>Best Selling Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto place-content-center'>
                {/* single product card */}
                {
                    products?.map((item) => (
                        <div key={item.id} className='max-w-96 bg-gray-100 rounded-md p-3 shadow-xl border border-gray-100'>
                            <div className='w-full h-72 rounded-sm overflow-hidden shadow'>
                                <img src={item.image} alt={item.title} className='w-full h-full object-contain' />
                            </div>
                            <div className='mt-3'>
                                <h1 className='font-semibold text-xl'>{item.title}</h1>
                                <p className='text-sm truncate'>{item.description}</p>
                                <div className='flex items-center text-xl justify-between mt-3 font-bold'>
                                    <span>${item.price}</span>
                                    <span className='flex items-center gap-1'><Star className='h-4 w-4 text-yellow-600' /> {item.rating}</span>
                                </div>
                                <button className='py-3 bg-yellow-400 w-full mt-3 rounded-sm font-semibold cursor-pointer'>Buy Now</button>
                                <button className='py-3 bg-green-400 w-full mt-3 rounded-sm font-semibold cursor-pointer'>Add to Cart</button>
                            </div>
                        </div>))
                }
            </div>
        </div>
    );
}

export default BestSelling;