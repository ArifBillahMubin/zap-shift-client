import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Review = ({ review }) => {
    const { userName, review: testimonial, user_photoURL } = review;
    return (
        <div className="card w-80 bg-base-100 shadow-sm p-6">
            {/* Quote Icon */}
            <FaQuoteLeft className="text-3xl text-secondary mb-3 opacity-50" />

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4">
                {
                    testimonial
                }
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* User Info */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary">
                    <img src={user_photoURL} alt="" />
                </div>

                <div>
                    <h3 className="font-semibold text-secondary">{userName}</h3>
                    <p className="text-xs text-gray-500">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
};

export default Review;