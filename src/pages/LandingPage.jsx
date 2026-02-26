import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const categories = [
        { name: 'Fresh Fruits', icon: '🍎', color: 'bg-red-50' },
        { name: 'Vegetables', icon: '🥦', color: 'bg-green-50' },
        { name: 'Dairy & Eggs', icon: '🥚', color: 'bg-yellow-50' },
        { name: 'Bakery', icon: '🥐', color: 'bg-orange-50' },
        { name: 'Beverages', icon: '🥤', color: 'bg-blue-50' },
        { name: 'Snacks', icon: '🍿', color: 'bg-purple-50' },
    ];

    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center bg-orange-50 overflow-hidden">
                <div className="container mx-auto px-4 z-10">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl font-black text-gray-900 leading-tight mb-6 animate-fade-in">
                            Freshness Delivered <br />
                            <span className="text-orange-600">Faster Than Ever.</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Experience the next generation of retail ordering. The best local stores, delivered to your doorstep in minutes.
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/menu" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-200">
                                Order Now
                            </Link>
                            <button className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-2xl rotate-12 opacity-10 animate-float"></div>
                    <div className="absolute bottom-40 right-40 w-48 h-48 bg-orange-500 rounded-full opacity-5 animate-float-delayed"></div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                            <p className="text-gray-500">Explore our wide range of fresh and quality products.</p>
                        </div>
                        <Link to="/menu" className="text-orange-600 font-bold hover:underline">View All</Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat, idx) => (
                            <Link to={`/menu?cat=${cat.name}`} key={idx} className={`${cat.color} p-8 rounded-3xl flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md cursor-pointer`}>
                                <span className="text-4xl mb-4 group-hover:scale-125 transition-transform">{cat.icon}</span>
                                <span className="font-bold text-gray-800">{cat.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Promo */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[40px] p-12 relative overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="relative z-10 md:w-2/3">
                            <span className="bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Flash Sale</span>
                            <h2 className="text-4xl font-bold text-white mb-6">Get 50% OFF on your <br />first 3 orders!</h2>
                            <p className="text-gray-400 mb-8 max-w-md">Use code: <span className="text-white font-mono bg-gray-700 px-2 py-1 rounded">FRESH50</span></p>
                            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors">Claim Offer</button>
                        </div>
                        <div className="md:w-1/3 mt-8 md:mt-0 opacity-20 md:opacity-100">
                            <div className="text-[120px] filter drop-shadow-2xl animate-float">🛒</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
