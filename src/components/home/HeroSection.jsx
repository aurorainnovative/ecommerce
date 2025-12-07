import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeroBannerCard from './HeroBannerCard';

import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.png"



function HeroSection() {

    const heroBanners = [
        {
            id: "01",
            text: "Banner 1",
            image: banner1
        },
        {
            id: "02",
            text: "Banner 2",
            image: banner2
        }
    ]

    return (
        <div>
            <div className='w-full h-[70vh] bg-red-600 rounded-xl'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        heroBanners.map((banner) => <SwiperSlide key={banner.id}>
                            <HeroBannerCard banner={banner} />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>

        </div>
    );
}

export default HeroSection;