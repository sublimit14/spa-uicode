import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {slidesContent} from './slidesContent';
import MainSlide from './MainSlide/MainSlide';

const MainSwiper = (props) => {

    let slides = slidesContent.map((slide) => {
        return (
            <SwiperSlide>
                <MainSlide
                    key={slide.id}
                    subtitle={slide.subtitle}
                    title={slide.title}
                    desc={slide.desc}
                />
            </SwiperSlide>
        );
    });

    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, A11y]}
            navigation
            scrollbar={{ draggable: true }}
        >
            {slides}
        </Swiper>
    );
};


export default MainSwiper;