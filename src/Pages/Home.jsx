import React from 'react';
import Hero from '../Component/Hero';
import CollectionSection from '../Component/CollectionSection';
import PerfumeSlider from '../Component/PerfumeSlider';
import PopularProducts from '../Component/PopularProducts';
import CustomerTestimonial from '../Component/CustomerTestimonial';
import LatestBlog from '../Component/LatestBlog';

const Home = () => {
    return (
        <div className='mt-10'>
            <Hero></Hero>
            <CollectionSection></CollectionSection>
            <PerfumeSlider></PerfumeSlider>
            <PopularProducts></PopularProducts>
            <CustomerTestimonial></CustomerTestimonial>
            <LatestBlog></LatestBlog>
        </div>
    );
};

export default Home;