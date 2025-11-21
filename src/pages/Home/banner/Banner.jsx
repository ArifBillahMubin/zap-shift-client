import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../assets/banner/banner1.png"
import banner2 from "../../../assets/banner/banner2.png"
import banner3 from "../../../assets/banner/banner3.png"
const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} className='pt-8'>
            <div className='relative'>
                <img src={banner1} className=''/>
                <div className='absolute top-[80%] left-[7%]'>
                    <div className='flex gap-5'>
                        <button className='btn btn-primary rounded-2xl text-black hidden md:block'>Track Your Parcel</button>
                        <button className='btn hidden md:block'>Be A Rider</button>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={banner2} />
                <div className='absolute top-[80%] left-[7%]'>
                    <div className='flex gap-5'>
                        <button className='btn btn-primary rounded-2xl text-black hidden md:block'>Track Your Parcel</button>
                        <button className='btn hidden md:block'>Be A Rider</button>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={banner3} />
                <div className='absolute top-[80%] left-[7%]'>
                    <div className='flex gap-5'>
                        <button className='btn btn-primary rounded-2xl text-black hidden md:block'>Track Your Parcel</button>
                        <button className='btn hidden md:block'>Be A Rider</button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;