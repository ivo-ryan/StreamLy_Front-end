"use client"

import { SeriesType } from "@/services/seriesServices";
import { Swiper , SwiperSlide } from "swiper/react";

import SlideCard from "../slideCard";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

interface props {
    series: SeriesType[];
}

export default function SlideComponent( {series}: props ){
    return (
        <>
            <div style={{width: "90%"}}>
                <Swiper spaceBetween={5}
                        slidesPerView={"auto"} 
                        loop={true}  
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        effect="fade"
                        speed={2000}
                        >
                  
                {
                    series?.map(item => (
                        <SwiperSlide key={item.id}  style={{width: "280px"}}>
                            <SlideCard series={item}/>
                        </SwiperSlide>
                    ))
                }

                </Swiper>
            </div>
        </>
    )
}