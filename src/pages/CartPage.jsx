import { Sparkles } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Header from '../components/cart/Header';
import { useContext } from 'react';
import { CartContext } from '../context';
import EmptyCart from '../components/cart/EmptyCart';


export default function Cart() {
    const {cartItems} = useContext(CartContext)
   if(cartItems.length === 0) return <EmptyCart/>


    return (
        <div className="min-h-screen transition-colors duration-500 bg-linear-to-br 
        from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">

                <Header itemCount={5} />

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
  
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}

                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <CartSummary
                            subtotal={200}
                            shipping={50}
                            discount={10}
                            total={120}
                            itemCount={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
