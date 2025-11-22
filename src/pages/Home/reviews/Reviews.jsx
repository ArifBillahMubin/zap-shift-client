import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import customerTop from '../../../assets/customer-top.png'

import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import Review from './Review';

const Reviews = ({ reviewsPromise }) => {
    const reviewsAll = use(reviewsPromise);
    console.log(reviewsAll);
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center space-y-2 pb-12'>
                <div className='w-fit'>
                    <img src={customerTop} alt="" />
                </div>
                <h1 className='font-bold text-secondary text-4xl w-fit'>
                    What our customers are sayings
                </h1>
                <p className='text-sm'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <>
                <Swiper
                    loop={true}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.75,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }
                    }
                    pagination={true}
                    modules={[EffectCoverflow, Pagination,Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviewsAll.map(review => <SwiperSlide key={review.id}>
                            <Review review={review}></Review>
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
        </div>
    );
};

export default Reviews;