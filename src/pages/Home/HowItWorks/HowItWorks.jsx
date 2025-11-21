import React from 'react';
import howItWorkLogo from '../../../assets/bookingIcon.png'

const HowItWorks = () => {
    return (
        <div className='max-w-6xl mx-auto px-2 md:px-4 lg:px-0'>
            <h2 className='font-semibold text-secondary text-3xl mb-8'>How it works</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                <div className=''>
                    <div className='space-y-2 bg-base-100 rounded-3xl p-8'>
                        <img src={howItWorkLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Booking Pick & Drop</h5>
                        <p className='text-[16px] text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-2 bg-base-100 rounded-3xl p-8'>
                        <img src={howItWorkLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Cash On Delivery</h5>
                        <p className='text-[16px] text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-2 bg-base-100 rounded-3xl p-8'>
                        <img src={howItWorkLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Delivery Hub</h5>
                        <p className='text-[16px] text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
                <div>
                    <div className='space-y-2 bg-base-100 rounded-3xl p-8'>
                        <img src={howItWorkLogo} alt="" />
                        <h5 className='text-secondary font-bold'>Booking SME & Corporate</h5>
                        <p className='text-[16px] text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;