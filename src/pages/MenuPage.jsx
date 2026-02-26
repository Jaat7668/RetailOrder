import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const MenuPage = () => {
    const { addToCart } = useCart();
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Fruits', 'Vegetables', 'Bakery', 'Dairy', 'Snacks', 'Beverages'];

    const products = [
        { id: 1, name: 'Premium Avocado', price: 120, category: 'Fruits', image: '🥑', description: 'Fresh, organic avocados from local farms.' },
        { id: 2, name: 'Sourdough Bread', price: 65, category: 'Bakery', image: '🥖', description: 'Freshly baked artisanal sourdough bread.' },
        { id: 3, name: 'Organic Spinach', price: 45, category: 'Vegetables', image: '🥬', description: 'Crispy and nutrient-rich organic spinach.' },
        { id: 4, name: 'Full Cream Milk', price: 50, category: 'Dairy', image: '🥛', description: 'High-quality farm-fresh full cream milk.' },
        { id: 5, name: 'Gourmet Cookies', price: 80, category: 'Snacks', image: '🍪', description: 'Chocolate chip cookies baked with love.' },
        { id: 6, name: 'Iced Coffee', price: 90, category: 'Beverages', image: '☕', description: 'Cold brewed coffee with a hint of vanilla.' },
        { id: 7, name: 'Honey Honey', price: 150, category: 'Snacks', image: '🍯', description: 'Pure, raw honey from mountain beehives.' },
        { id: 8, name: 'Red Apples', price: 60, category: 'Fruits', image: '🍎', description: 'Crunchy and sweet Gala apples.' },
    ];

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Menu</h1>

                {/* Category Filter */}
                <div className="flex space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-orange-600 text-white shadow-md shadow-orange-200'
                                    : 'bg-white text-gray-600 hover:bg-orange-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="h-48 bg-gray-50 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                                {product.image}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">{product.category}</span>
                                    <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-6 line-clamp-2">{product.description}</p>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full bg-gray-900 text-white py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 100-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg text-6xl mb-4">🔍</p>
                        <p className="text-gray-500 text-lg">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MenuPage;
