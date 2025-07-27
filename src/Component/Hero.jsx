import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6'>
                <div className='md:w-1/2 space-y-4'>
                    <p className='text-pink-600'>🌸 New Spring 2025 Collections</p>
                    <h2 className="text-4xl font-bold leading-snug">
                        Fashion That <br />
                        Feels As Good As <br />
                        <span className="text-pink-600">It Looks</span>
                    </h2>
                    <p className="text-gray-600">
                        Streetwear-inspired and flavor-packed, every drop celebrates individuality, freedom, and effortless style—where comfort meets cultural edge.
                    </p>
                    <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
                        Get Started
                    </button>
                </div>

                <div className="md:w-1/2">
                    <img src="/hero.png" alt="girl" className="w-[542px] h-[678px]" />
                </div>

            </div>
        </div >
    );
};

export default Hero;