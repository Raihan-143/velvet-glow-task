import React, { useEffect, useState } from 'react';

const PopularProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/popularProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <section className='py-16'>
            <h2 className='text-black text-3xl text-center font-bold mb-10'>Our Popular Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
                    >
                        {/* Discount Badge */}
                        {item.discount && (
                            <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                {item.discount}
                            </div>
                        )}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <p className="text-sm text-gray-500">Better Wood and Home</p>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-red-600 font-semibold">Price: ${item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularProducts;