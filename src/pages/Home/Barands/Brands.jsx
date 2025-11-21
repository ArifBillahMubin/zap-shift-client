import React from 'react';
import Marquee from "react-fast-marquee";
import amazon from '../../../assets/brands/amazon.png'
import amazonVector from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'

const Brands = () => {
    const brands = [amazon,amazonVector,casio,moonstar,randstad,star,start_people];

    return (
        <div>
            <h1 className='text-[28px] font-semibold text-secondary text-center mb-5'>We've helped thousands of sales teams</h1>
            <div>
                <Marquee>
                    {
                        brands.map((brand,index)=> <>
                            <div key={index} className='mx-8'>
                                <img src={brand} alt="" />
                            </div>
                        </>)
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Brands;