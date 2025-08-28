"use client"

import { SeriesType } from "@/services/seriesServices";
import { Swiper , SwiperSlide } from "swiper/react";

import SlideCard from "../slideCard";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css"
import "swiper/css/autoplay"

interface props {
    series: SeriesType[];
}

export default function SlideComponent( {series}: props ){
    return (
        <>
            <div>
                <Swiper spaceBetween={1}
                        slidesPerView={3} 
                        loop={true}  
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        effect="fade"
                        speed={2000}
                        >
                  
                {
                    series?.map(item => (
                        <SwiperSlide key={item.id} >
                            <SlideCard series={item}/>
                        </SwiperSlide>
                    ))
                }

                </Swiper>
            </div>
        </>
    )
}