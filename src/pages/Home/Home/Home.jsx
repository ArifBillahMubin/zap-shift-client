import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurServices from '../ourServices/OurServices';
import Brands from '../Barands/Brands';
import Featured from '../featured/Featured';
import Reviews from '../reviews/Reviews';

const reviewsPromise = fetch('/reviews.json').then(res=> res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='pt-12 md:pt-16 max-w-6xl mx-auto px-2 md:px-4 lg:px-0'>
                <HowItWorks></HowItWorks>
            </div>
            <div className='pt-12 md:pt-16 max-w-[1380px] mx-auto px-2 md:px-4 lg:px-0'>
                <OurServices></OurServices>
            </div>
            <div className='pt-12 md:pt-16 max-w-6xl mx-auto px-2 md:px-4 lg:px-0 space-y-16'>
                <div>
                    <Brands></Brands>
                </div>
                <div>
                    <Featured></Featured>
                </div>
            </div>
            <div className='pt-12 md:pt-16 max-w-6xl mx-auto px-2 md:px-4 lg:px-0 space-y-16'>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </div>
            
        </div>
    );
};

export default Home;