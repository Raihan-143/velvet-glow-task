import React, { useEffect, useState } from 'react';


const LatestBlog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error loading blogs:', error))
    }, []);
    return (
        <section className='mt-10'>
            <h2 className='text-center text-2xl md:text-3xl font-bold mb-10'>Latest News and Blog</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
                {blogs.map((blog, index) => (
                    <div key={index} className='bg-white rounded-lg overflow-hidden shadow-sm'>
                        <img src={blog.image} alt={blog.title} className='w-full h-56 object-cover' />
                        <div className='p-5'>
                            <h3 className='text-lg font-semibold mb-3'>{blog.title}</h3>
                            <p className='text-gray-600 text-sm leading-relaxed mb-4'>{blog.text}</p>
                            {blog.buttonType === 'filled' ? (
                                <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition'>Read more</button>

                            ) : (
                                <button className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-50 transition">
                                    Read more
                                </button>
                            )}

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default LatestBlog;