import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="mt-10 mb-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-4">
                {/* Column 1 */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">About Us</h4>
                    <p className="text-gray-800">
                        Perfume Paradise is dedicated to providing the best perfumes at affordable prices. Explore our wide range of cruelty-free and luxurious scents.
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul>
                        <li className="mb-2">
                            <Link to={'/'} className="text-gray-800 hover:text-gray-500">Home</Link>
                        </li>
                        <li className="mb-2">
                        <Link to={'collections'} className="text-gray-800 hover:text-gray-500">Shop</Link>
                        </li>
                        <li className="mb-2">
                        <Link to={'about'} className="text-gray-800 hover:text-gray-500">About</Link>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
                    <ul>
                        <li className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">Shipping Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">Returns</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">Privacy Policy</a>
                        </li>
                        <li className="mb-2">
                            <a href="#" className="text-gray-800 hover:text-gray-500">Terms & Conditions</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                    <p className="text-gray-800">
                        Email: support@perfumeparadise.com
                    </p>
                    <p className="text-gray-800 mt-2">
                        Phone: +1 234 567 890
                    </p>
                    <p className="text-gray-800 mt-2">
                        Address: 123 Perfume St, New Delhi, DL
                    </p>
                </div>
            </div>
            <hr/>

            {/* Footer Bottom */}
            <div className="mt-5 text-center text-gray-800">
                <p>&copy; 2024 Perfume Paradise. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
