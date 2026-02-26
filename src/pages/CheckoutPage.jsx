import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
    const { cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        clearCart();
        navigate('/order-confirmation');
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">Checkout</h1>

                <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-12">
                    {/* Shipping Details */}
                    <div className="lg:w-2/3 space-y-8">
                        <div className="bg-white rounded-[40px] shadow-sm p-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Shipping Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="block text-gray-700 font-bold mb-2">Street Address</label>
                                    <input type="text" placeholder="House No, Building, Street" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">City</label>
                                    <input type="text" defaultValue="New Delhi" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-bold mb-2">PIN Code</label>
                                    <input type="text" placeholder="110001" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none" required />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[40px] shadow-sm p-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Payment Method</h2>
                            <div className="space-y-4">
                                {['Credit/Debit Card', 'UPI / Google Pay', 'Cash on Delivery'].map((method, idx) => (
                                    <label key={idx} className="flex items-center space-x-4 p-6 rounded-3xl border-2 border-gray-50 hover:border-orange-500 cursor-pointer transition-all bg-gray-50/50">
                                        <input type="radio" name="payment" defaultChecked={idx === 0} className="w-5 h-5 text-orange-600 focus:ring-orange-500" />
                                        <span className="font-bold text-gray-800">{method}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Checkout Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-[40px] shadow-sm p-10 sticky top-32">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Final Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Payable Amount</span>
                                    <span className="text-3xl font-black text-orange-600">₹{(cartTotal * 1.05).toFixed(0)}</span>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-5 rounded-3xl font-bold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-200"
                            >
                                Place Order
                            </button>
                            <p className="mt-6 text-center text-gray-400 text-sm">
                                By placing the order, you agree to our Terms & Conditions.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckoutPage;
