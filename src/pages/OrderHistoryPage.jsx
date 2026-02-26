import React from 'react';
import { Link } from 'react-router-dom';

const OrderHistoryPage = () => {
    const orders = [
        { id: 'RO-10293', date: 'Oct 24, 2025', total: 450, items: 3, status: 'Delivered' },
        { id: 'RO-10294', date: 'Oct 26, 2025', total: 220, items: 2, status: 'Delivered' },
        { id: 'RO-10295', date: 'Oct 28, 2025', total: 890, items: 5, status: 'Processing' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Your Orders</h1>

                <div className="space-y-6">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white rounded-[40px] shadow-sm p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-md">
                            <div className="flex items-center space-x-6 mb-4 md:mb-0">
                                <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center text-2xl">
                                    📦
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{order.id}</h3>
                                    <p className="text-gray-500 text-sm">{order.date} • {order.items} items</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-8">
                                <div className="text-right">
                                    <p className="text-xl font-bold text-gray-900 mb-1">₹{order.total}</p>
                                    <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                                <button className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-orange-600 transition-colors">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link to="/menu" className="text-orange-600 font-bold hover:underline">Want to order something new?</Link>
                </div>
            </div>
        </div>
    );
};

export default OrderHistoryPage;
