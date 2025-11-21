import React from 'react';
import liveTrackingImage from '../../../assets/live-tracking.png'
import locationMerchant from '../../../assets/location-merchant.png'
import beAMerchantBg from '../../../assets/be-a-merchant-bg.png'
const Featured = () => {
    return (
        <div className='space-y-6 lg:space-y-12'>
            <div className='space-y-4 lg:space-y-8'>
                <div className='grid grid-cols-1 lg:grid-cols-5 bg-base-100 rounded-2xl p-5 items-center text-center lg:text-left space-y-6'>
                    <div className='col-span-1 flex justify-center items-center md:pr-6'>
                        <img src={liveTrackingImage} alt="" />
                    </div>
                    <div className='col-span-4 md:pl-6 border-0 lg:border-l border-dashed'>
                        <h3 className='text-2xl font-semibold text-secondary'>Live Parcel Tracking</h3>
                        <p className='text-gray-500'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 bg-base-100 rounded-2xl p-5 items-center text-center lg:text-left space-y-6'>
                    <div className='col-span-1 flex justify-center items-center md:pr-6'>
                        <img src={liveTrackingImage} alt="" />
                    </div>
                    <div className='col-span-4 md:pl-6 border-0 lg:border-l border-dashed'>
                        <h3 className='text-2xl font-semibold text-secondary'>100% Safe Delivery</h3>
                        <p className='text-gray-500'>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-5 bg-base-100 rounded-2xl p-5 items-center text-center lg:text-left space-y-6'>
                    <div className='col-span-1 flex justify-center items-center md:pr-6'>
                        <img src={liveTrackingImage} alt="" />
                    </div>
                    <div className='col-span-4 md:pl-6 border-0 lg:border-l border-dashed'>
                        <h3 className='text-2xl font-semibold text-secondary'>24/7 Call Center Support</h3>
                        <p className='text-gray-500'>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                    </div>
                </div>
            </div>

            <div className='bg-secondary rounded-2xl text-base-100 p-8 md:p-20  relative'>
                <div className='flex flex-col md:flex-row gap-5 '>
                    <div className='w-full md:w-1/2 space-y-2 md:space-y-4'>
                        <h1 className='text-3xl font-bold'>Merchant and Customer Satisfaction is Our First Priority</h1>
                        <p className='text-gray-300'>We offer the lowest delivery charge with the highest value along with 100%  safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>

                        <div className='flex flex-col md:flex-row gap-2 md:gap-5 w-fit'>
                            <button className='btn btn-primary text-black rounded-full'>Become a Merchant</button>
                            <button className='btn btn-outline rounded-full text-primary border-primary'>Earn with ZapShift Courier</button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img src={locationMerchant} alt="" />
                    </div>
                </div>
                <div className='absolute top-0'>
                    <img src={beAMerchantBg} alt="" />
                </div>   
            </div>

            
        </div>
    );
};

export default Featured;