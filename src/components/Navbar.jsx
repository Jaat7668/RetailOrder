import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount } = useCart();

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-orange-600 tracking-tight">
                    RETAIL<span className="text-gray-800">ORDER</span>
                </Link>

                <div className="hidden md:flex space-x-8 items-center font-medium">
                    <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
                    <Link to="/menu" className="text-gray-600 hover:text-orange-600 transition-colors">Menu</Link>
                    <Link to="/orders" className="text-gray-600 hover:text-orange-600 transition-colors">Orders</Link>
                </div>

                <div className="flex items-center space-x-6">
                    <Link to="/login" className="text-gray-600 hover:text-orange-600 font-medium">Login</Link>
                    <Link to="/cart" className="relative group p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
