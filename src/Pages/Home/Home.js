import React from 'react';
import About from '../About/About/About';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <About/>
            <Reviews/>
        </div>
    );
};

export default Home;