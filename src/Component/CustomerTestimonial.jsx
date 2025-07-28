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
        <section className="py-5">
            <h2 className="text-center text-3xl font-bold mb-12">Customer Testimonial</h2>
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 relative w-full">
                    <div className="lg:hidden space-y-6 flex flex-col items-center">
                        {testimonials.slice(0, 2).map((test, index) => (
                            <div key={index} className="bg-white w-full max-w-[350px] h-auto px-6 py-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    <div>
                                        <h4 className="font-semibold text-lg">{test.name}</h4>
                                        <p className="text-gray-500 text-sm">{test.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{test.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:grid grid-cols-1 gap-6 relative">
                        {testimonials[0] && (
                            <div className="bg-white w-[360px] h-[284px] px-[48px] py-[29px] rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <img src={testimonials[0].image} alt={testimonials[0].name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                    <div>
                                        <h4 className="font-semibold text-lg">{testimonials[0].name}</h4>
                                        <p className="text-gray-500 text-sm">{testimonials[0].role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{testimonials[0].text}</p>
                            </div>
                        )}
                        {testimonials[1] && (
                            <div className="absolute left-[60%] top-1/2 -translate-y-1/2 z-10">
                                <div className="bg-white w-[360px] h-[284px] px-[48px] py-[29px] rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <img src={testimonials[1].image} alt={testimonials[1].name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                                        <div>
                                            <h4 className="font-semibold text-lg">{testimonials[1].name}</h4>
                                            <p className="text-gray-500 text-sm">{testimonials[1].role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{testimonials[1].text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex-1 w-full max-w-[536px]">
                    <img src="/test.png" alt="Testimonial Visual" className="w-full h-auto lg:w-[536px] lg:h-[429px] rounded-lg object-cover shadow-md" />
                </div>
            </div>
        </section>
    );
};

export default CustomerTestimonial;
