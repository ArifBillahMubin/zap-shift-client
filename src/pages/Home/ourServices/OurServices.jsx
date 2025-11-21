import React from 'react';
import servicesLogo from '../../../assets/service.png'
const OurServices = () => {
    return (
        <div className='bg-secondary rounded-4xl'>
            <div className='p-4 md:p-24'>
                <div className='text-center space-y-1 mb-8'>
                    <h1 className='font-semibold text-3xl text-base-100'>Our Services</h1>
                    <p className='text-[16px] text-base-100'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Express  & Standard Delivery</h5>
                        <p className='text-[16px] text-[#606060]'>We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.</p>
                    </div>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Fulfillment Solution</h5>
                        <p className='text-[16px] text-[#606060]'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Nationwide Delivery</h5>
                        <p className='text-[16px] text-[#606060]'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Cash on Home Delivery</h5>
                        <p className='text-[16px] text-[#606060]'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Corporate Service / Contract In Logistics</h5>
                        <p className='text-[16px] text-[#606060]'>Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                    <div className='space-y-3 bg-base-100 rounded-3xl p-8 hover:bg-primary transition-all duration-300 transform hover:scale-105'>
                        <img src={servicesLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Parcel Return</h5>
                        <p className='text-[16px] text-[#606060]'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;