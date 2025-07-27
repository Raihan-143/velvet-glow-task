import React, { useEffect, useState } from 'react';

const CustomerTestimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/testimonial.json")
            .then((res) => res.json())
            .then((data) => setTestimonials(data))
            .catch((err) => console.error("Error loading testimonials:", err));
    }, []);
    return (
        <section className='py-12 bg-[#68656520]'>
            <h2 className='text-center text-2xl md:text-3xl font-bold mb-10'>Customer Testimonial</h2>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
                {testimonials.map((test, index) => (
                    <div key={index} className='bg-white shadow-md rounded-lg p-6 w-80'>
                        <div className='flex items-center mr-4'>
                            <img src="" alt="" className='w-12 h-12 rounded-full mr-4' />
                        
                        <div>
                            <h4 className='font-semibold text-lg'>{test.name}</h4>
                            <p className='text-gray-500 text-sm'>{test.role}</p>
                        </div>
                    </div>
                    <p className='text-gray-600 text-sm leading-relaxed'>{test.text}</p>
                    </div>
                ))}
                <img src="/test.png" alt=""  className='w-80 h-80 object-cover rounded-lg'/>

            </div>
        </section>
    );
};

export default CustomerTestimonial;