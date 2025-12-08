import { Home, ChevronRight, ShoppingCart, Sun, Sparkles } from 'lucide-react';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';

// Sample cart data
const cartItems = [
    {
        id: 1,
        name: 'Premium Wireless Headphones',
        brand: 'AudioTech',
        price: 299.99,
        originalPrice: 349.99,
        quantity: 1,
        variant: 'Midnight Black',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
        discount: 15,
    },
    {
        id: 2,
        name: 'Minimalist Leather Watch',
        brand: 'Chronos',
        price: 189.00,
        quantity: 1,
        variant: 'Rose Gold / Brown Strap',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
        id: 3,
        name: 'Smart Home Speaker',
        brand: 'SoundWave',
        price: 149.99,
        originalPrice: 179.99,
        quantity: 2,
        variant: 'Pearl White',
        image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&q=80',
        discount: 17,
    },
];

export default function Cart() {
    // Set to true for dark theme
    const isDark = false;

    // Calculate totals
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const shipping = subtotal > 200 ? 0 : 12.99;
    const discount = subtotal > 500 ? subtotal * 0.1 : 0;
    const total = subtotal + shipping - discount;

    return (
        <div className={`min-h-screen transition-colors duration-500 ${isDark
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20">


                {/* Page Title */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-xl ${isDark
                                ? 'bg-linear-to-br from-indigo-500/20 to-purple-500/20'
                                : 'bg-linear-to-br from-indigo-100 to-purple-100'
                            }`}>
                            <ShoppingCart className={`w-6 h-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                        </div>
                        <h1 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Shopping Cart
                        </h1>
                    </div>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {itemCount > 0
                            ? `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`
                            : 'Your cart is waiting to be filled'
                        }
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {/* Free Shipping Banner */}
                        {subtotal < 200 && (
                            <div className={`flex items-center gap-3 p-4 rounded-xl ${isDark
                                    ? 'bg-linear-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20'
                                    : 'bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200'
                                }`}>
                                <Sparkles className="w-5 h-5 text-amber-500" />
                                <p className={`text-sm ${isDark ? 'text-amber-200' : 'text-amber-800'}`}>
                                    Add <span className="font-bold">${(200 - subtotal).toFixed(2)}</span> more for free shipping!
                                </p>
                                <div className="flex-1 h-2 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        style={{ width: `${Math.min((subtotal / 200) * 100, 100)}%` }}
                                        className="h-full bg-linear-to-r from-amber-500 to-orange-500 rounded-full"
                                    />
                                </div>
                            </div>
                        )}

                        {cartItems.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                isDark={isDark}
                            />
                        ))}
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <CartSummary
                            subtotal={subtotal}
                            shipping={shipping}
                            discount={discount}
                            total={total}
                            itemCount={itemCount}
                            isDark={isDark}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}