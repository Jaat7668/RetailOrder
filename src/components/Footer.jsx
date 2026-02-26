import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-white text-xl font-bold mb-4">RETAIL ORDER</h3>
                    <p className="text-sm">Delivering the best products right to your doorstep with speed and care.</p>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Shipping Info</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Returns</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4">Newsletter</h4>
                    <p className="text-sm mb-4">Subscribe to get the latest offers.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email" className="bg-gray-800 border-none px-4 py-2 rounded-l-md w-full focus:ring-1 focus:ring-orange-500" />
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-r-md hover:bg-orange-700 transition-colors">Join</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-center text-xs">
                &copy; {new Date().getFullYear()} Retail Order Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
