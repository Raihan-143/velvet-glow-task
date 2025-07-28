import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
    return (
        <div className="relative bg-white mt-5 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-4 gap-10">

                <div className="w-full lg:w-[48%] relative space-y-6 text-center items-center flex flex-col lg:items-start lg:text-left">

                    <div className="relative inline-block mb-3">
                        <img
                            src="/Ellipse 26.svg"
                            alt="ellipse1"
                            className="absolute -left-4 -top-2 w-8 h-8 z-0"
                        />
                        <img
                            src="/Ellipse 27.svg"
                            alt="ellipse2"
                            className="absolute -left-2 top-0 w-6 h-6 z-10"
                        />
                        <p className="text-sm text-gray-700 font-medium relative z-20 ml-8">
                            New Spring 2025 <br /> Collections
                        </p>
                    </div>

                    <h1 className="font-maven text-4xl md:text-5xl font-bold leading-snug">
                        Fashion That <br />
                        Feels As Good As <br />
                        It{' '}
                        <span className="text-[#CE4E61] font-extrabold inline-block -rotate-[1deg]">
                            Looks
                        </span>
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base max-w-md">
                        Streetwear-inspired and flavor-packed, every drop celebrates individuality,
                        freedom, and effortless style—where comfort meets cultural edge.
                    </p>

                    <button className="bg-[#CE4E61] text-white px-6 py-3 rounded hover:bg-pink-700 transition font-medium flex items-center gap-2">
                        Get Started
                        <span className="inline-block transform rotate-45"><BsArrowUpRight /></span>
                    </button>
                </div>

                <div className="w-full lg:w-[48%] relative flex items-center justify-center">
                    <div className="absolute w-[280px] h-[280px] hero-radial"></div>
                    <img
                        src="/hero.png"
                        alt="hero"
                        className="w-[320px] md:w-[400px] lg:w-[480px] h-auto bg-hero-radial object-cover relative z-10"
                    />
                    <div className="hidden md:block absolute top-[110px] right-[-10px] md:top-[120px] md:right-[10px] lg:top-[70px] lg:right-[-60px] w-[230px] text-sm z-20">
                        <img src="/picon.svg" alt="quote" className="w-6 mb-2" />
                        <p className="text-gray-600 italic leading-snug">
                            I love that it’s made with gentle ingredients — no irritation at all, even on my sensitive skin.
                        </p>
                        <p className="font-semibold text-center mt-2">— Afia Jaman</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
