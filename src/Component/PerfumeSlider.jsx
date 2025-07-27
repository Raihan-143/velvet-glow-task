import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PerfumeSlider = () => {
    const [perfumes, setPerfumes] = useState([]);

    useEffect(() => {
        fetch("/perfumes.json")
            .then((res) => res.json())
            .then((data) => setPerfumes(data));
    }, []);

    const handlePrev = () => {
        const last = perfumes.pop();
        setPerfumes([last, ...perfumes]);
    };

    const handleNext = () => {
        const [first, ...rest] = perfumes;
        setPerfumes([...rest, first]);
    };

    const visiblePerfumes = perfumes.slice(0, 2);

    return (
        <div className="py-12 mt-10">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 items-stretch">
                <div className="md:col-span-2 flex gap-4 relative">
                    {visiblePerfumes.map((item, index) => (
                        <div
                            key={item.id}
                            className="relative flex-1 rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src={item.image}
                                alt="perfume"
                                className="w-full h-full object-cover"
                            />

                            {index === 0 && (
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                                >
                                    <FaArrowLeft />
                                </button>
                            )}
                            {index === 1 && (
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
                                >
                                    <FaArrowRight />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                <div className="bg-[#232325] text-white p-8 rounded-lg flex flex-col justify-center">
                    <p className="text-sm text-orange-400 uppercase mb-2">Ready to Shop</p>
                    <h2 className="text-2xl font-bold leading-snug">
                        Revolutionizing Your Skins Journey to Radiance
                    </h2>
                    <button className="mt-6 bg-white text-black px-5 py-2 rounded hover:bg-gray-100 transition w-fit">
                        Shop Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PerfumeSlider;
