import React, { useEffect, useState } from 'react';

const CollectionSection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="mt-10">
            <h2 className="text-center text-2xl font-bold mb-8">Browse by Collection</h2>

            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center">
                {categories.map((cat, index) => (
                    <div key={index} className="text-center space-y-2">
                        <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-[200px] h-[278px] rounded-[200px] object-cover mx-auto"
                        />
                        <h4 className="font-semibold">{cat.name}</h4>
                        <p className="text-sm text-[#A35928]">{cat.items}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollectionSection;
