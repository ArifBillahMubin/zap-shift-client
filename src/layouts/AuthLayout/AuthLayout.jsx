import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../../assets/authImage.png';
import Logo from '../../components/Logo/Logo';

const AuthLayout = () => {
    return (
        <div>
            <div className='flex h-screen relative'>
                <div className='flex-1 flex justify-center items-center bg-base-100'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 flex justify-center items-center bg-[#DEF29F]'>
                    <figure>
                        <img src={authImage} alt="" />
                    </figure>
                </div>
            </div>
            <div className='absolute top-3 left-10'>
                <Logo></Logo>
            </div>
        </div>
    );
};

export default AuthLayout;