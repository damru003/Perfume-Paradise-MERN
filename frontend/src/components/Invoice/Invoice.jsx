import React, { useContext } from 'react';
import { StoreContext } from '../../pages/StoreProvider';

const Invoice = ({ref}) => {
    const { confirmedOrders, formData } = useContext(StoreContext);

    const gstRate = 0.18;
    const shippingFee = 100;

    const subtotal = confirmedOrders.reduce((total, order) => total + (order.price * order.quantity), 0);
    const gst = subtotal * gstRate;
    const discount = subtotal * 10/100
    const totalPrice = subtotal + gst + shippingFee - discount;

    return (
        <div ref={ref} className="p-8 bg-white font-sans max-w-4xl mx-auto border border-gray-200 rounded-lg shadow">
            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-5xl font-bold">Bill Receipt</h1>
                    <div className="mt-4">
                        <p>FROM</p>
                        <p>Perfume Paradise Ltd.</p>
                        <p>2006 Harvest Lane</p>
                        <p>New Delhi, DL 110088</p>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-gray-600">RECEIPT # 8001</div>
                    <div className="text-gray-600">RECEIPT DATE {new Date().toLocaleDateString()}</div>

                    <div className="mt-10">
                        <div className="w-48 rounded-full flex items-center justify-center">
                            <img src={'assets/logo_perfume.png'} className='w-44 md:w-64' alt='logo' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing and Shipping */}
            <div className="flex justify-between mt-8">
                <div>
                    <p className="font-bold">BILL TO</p>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.street}</p>
                    <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                    <p>{formData.phone}</p>
                </div>
                <div>
                    <p className="font-bold">SHIP TO</p>
                    <p>{formData.firstName} {formData.lastName}</p>
                    <p>{formData.street}</p>
                    <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                </div>
            </div>

            {/* Table */}
            <div className="mt-8 border-t border-gray-300">
                <table className="w-full mt-4 text-left">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="py-2">QTY</th>
                            <th className="py-2">PRODUCT NAME</th>
                            <th className="py-2">PRODUCT PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {confirmedOrders.map((order, index) => (
                            <tr key={index} className="border-b border-gray-300">
                                <td className="py-2">{order.quantity}</td>
                                <td className="py-2">{order.name}</td>
                                <td className="py-2">₹ {order.price}/-</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Totals */}
            {/* Uncomment this section if you want to display totals */}
            <div className="flex justify-end mt-8">
                <div className="w-full max-w-xs">
                    <div className="flex justify-between py-2">
                        <span>Subtotal</span>
                        <span>
                            ₹{confirmedOrders.reduce((total, order) => total + (order.price * order.quantity), 0).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>GST 12%</span>
                        <span>
                            ₹{gst.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span>Shipping Fee</span>
                        <span>
                            ₹{shippingFee}
                        </span>
                    </div>

                    <div className="flex justify-between py-2">
                        <span>Discount</span>
                        <span>
                            - ₹{discount.toFixed(2)}
                        </span>
                    </div>
                    
                        
                    <div className="flex justify-between border-t border-b border-gray-300 py-2">
                        <span className="font-bold text-lg">TOTAL</span>
                        <span className="font-bold text-lg">
                            ₹{totalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Signature */}
            <div className="mt-8">
                <p className="text-right">Perfume Paradise Ltd.</p>
            </div>
            <div className='flex justify-end mt-2'>
                <img src={'assets/stamp.jpg'} className='w-24 rounded-full' />
            </div>

            {/* Footer */}
            <div className="mt-12 text-gray-600">
                <p className="font-bold">TERMS & CONDITIONS</p>
                <p>Payment is due within 5 days.</p>
                <p>Please check products at the time of delivery.</p>
            </div>
        </div>
    );
};

export default Invoice;
