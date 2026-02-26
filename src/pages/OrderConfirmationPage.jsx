import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden">
            {/* Celebration Elements */}
            <div className="relative mb-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100 rounded-full animate-ping opacity-20"></div>
                <div className="bg-green-600 text-white h-32 w-32 rounded-full flex items-center justify-center text-6xl shadow-2xl shadow-green-200 relative z-10 animate-bounce">
                    ✓
                </div>
            </div>

            <h1 className="text-5xl font-black text-gray-900 mb-6 font-display">Success!</h1>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your order is on the way.</h2>
            <p className="text-gray-500 mb-12 max-w-md text-lg leading-relaxed">
                Thank you for choosing Retail Order. We've sent an order confirmation and receipt to your email.
            </p>

            <div className="bg-gray-50 p-10 rounded-[40px] mb-12 max-w-md w-full">
                <div className="text-left space-y-4">
                    <div className="flex justify-between">
                        <span className="text-gray-400">Order ID:</span>
                        <span className="font-bold">#RO-9283741</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">Estimate Delivery:</span>
                        <span className="font-bold text-orange-600">30-45 Minutes</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/menu" className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                    Order More
                </Link>
                <Link to="/" className="bg-white text-gray-800 border-2 border-gray-100 px-10 py-4 rounded-2xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-all">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
