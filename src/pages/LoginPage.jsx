import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic for login/register would go here
        navigate('/');
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-orange-50 flex items-center justify-center px-4 overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-30 animate-pulse"></div>

            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row shadow-orange-200/50">
                {/* Visual Side */}
                <div className="md:w-1/2 bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl font-black mb-6">Welcome Back to <br /><span className="text-orange-600">Retail Order.</span></h2>
                        <p className="text-gray-400 text-lg">Join thousands of happy customers getting fresh quality delivered daily.</p>
                    </div>

                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold">✓</div>
                            <p className="font-bold">Lightning fast delivery</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 bg-orange-600 rounded-2xl flex items-center justify-center text-2xl font-bold">✓</div>
                            <p className="font-bold">Freshness guarantee</p>
                        </div>
                    </div>

                    <div className="absolute -bottom-20 -right-20 opacity-20 text-[200px] animate-float">📦</div>
                </div>

                {/* Form Side */}
                <div className="md:w-1/2 p-12 md:p-16">
                    <div className="mb-10">
                        <h3 className="text-3xl font-black text-gray-900 mb-2">{isLogin ? 'Sign In' : 'Create Account'}</h3>
                        <p className="text-gray-500">Please enter your details to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLogin && (
                            <div>
                                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                            </div>
                        )}
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-orange-500 outline-none transition-all" required />
                        </div>

                        {isLogin && (
                            <div className="text-right">
                                <a href="#" className="text-orange-600 font-bold text-sm hover:underline">Forgot Password?</a>
                            </div>
                        )}

                        <button className="w-full bg-orange-600 text-white py-5 rounded-3xl font-bold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 mt-4">
                            {isLogin ? 'Sign In' : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-gray-600">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-orange-600 font-black ml-2 hover:underline"
                            >
                                {isLogin ? 'Sign Up' : 'Sign In'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
