import * as React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import hero1 from '../images/hero1.jpeg'
import hero2 from '../images/hero2.jpeg'
import hero3 from '../images/hero3.jpeg'



const Hero = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="transition duration-300 delay-300 ease-in-out rotate-0 scale-100 xl:h-screen mt-20 md:mt-24"
            >
                <SwiperSlide>
                    <img
                        className="w-full"
                        src={hero1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full"
                        src={hero2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full"
                        src={hero3}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Hero