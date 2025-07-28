import React, { useEffect, useState } from 'react';

const LatestBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error loading blogs:', error));
    }, []);

    return (
        <section className='py-16 bg-white'>
            <h2 className='text-center text-3xl font-bold mb-12'>Latest News and Blog</h2>

            <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
                {blogs.map((blog, index) => (
                    blog.type === 'text' ? (
                        <div key={index} className='bg-white p-6 rounded-lg shadow-md w-[390px] h-[347px] flex flex-col justify-between'>
                            <div>
                                <h3 className='text-xl font-semibold mb-4'>{blog.title}</h3>
                                <p className='text-gray-600 text-sm leading-relaxed mb-6'>{blog.text}</p>
                            </div>
                            {blog.buttonType === 'filled' ? (
                                <button className='bg-[#CE4E61] text-white px-5 py-2 rounded hover:bg-red-700 transition'>Read more</button>
                            ) : (
                                <button className="border border-[#CE4E61] text-black px-5 py-2 rounded hover:bg-red-50 transition">
                                    Read more
                                </button>
                            )}
                        </div>
                    ) : (
                        <div key={index} className='overflow-hidden rounded w-[390px] h-[347px]'>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className='w-full h-full object-cover rounded'
                            />
                        </div>
                    )
                ))}
            </div>
        </section>
    );
};

export default LatestBlog;
