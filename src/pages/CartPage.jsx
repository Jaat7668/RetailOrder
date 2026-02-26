import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
    const navigate = useNavigate();

    if (cartCount === 0) {
        return (
            <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex flex-col items-center justify-center text-center px-4">
                <div className="text-[120px] mb-8 animate-bounce">🛒</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
                <p className="text-gray-500 mb-10 max-w-md">Looks like you haven't added anything to your cart yet. Let's find something delicious for you!</p>
                <Link to="/menu" className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                    Browse Menu
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart ({cartCount})</h1>
                        <div className="bg-white rounded-[40px] shadow-sm overflow-hidden p-8">
                            <div className="space-y-8">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between group">
                                        <div className="flex items-center space-x-6">
                                            <div className="h-24 w-24 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                                                {item.image}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                                                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                                <div className="flex items-center space-x-3 bg-gray-100 w-fit rounded-full px-4 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-gray-900 font-bold hover:text-orange-600"
                                                    >-</button>
                                                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-gray-900 font-bold hover:text-orange-600"
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xl font-bold text-gray-900 mb-2">₹{item.price * item.quantity}</p>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-[40px] shadow-sm p-10 sticky top-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Order Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping Fee</span>
                                    <span className="text-green-600 font-bold uppercase text-xs mt-1">Free</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax (5%)</span>
                                    <span className="font-semibold">₹{(cartTotal * 0.05).toFixed(0)}</span>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-gray-900">
                                    <span className="text-xl font-bold">Total</span>
                                    <span className="text-3xl font-black text-orange-600">₹{(cartTotal * 1.05).toFixed(0)}</span>
                                </div>
                            </div>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="w-full bg-orange-600 text-white py-5 rounded-3xl font-bold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-200"
                            >
                                Go to Checkout
                            </button>
                            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400 text-xs text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Secure Payment Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
