import React from 'react';
import Banner from '../banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='pt-8 md:pt-12'>
                <HowItWorks></HowItWorks>
            </div>
            
        </div>
    );
};

export default Home;