"use client"

import styles from "./styles.module.scss";
import { SeriesType } from "@/services/seriesServices";

import SlideCard from "../slideCard";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';


interface props {
    series: SeriesType[];
}

export default function SlideComponent( {series}: props ){
  let slideCount = 0;

  if (series.length > 4) {
    slideCount = 4
  }else if(series){
    slideCount = series.length;
  }
 
    return (
        <>
            <div className={styles.container}>
              		<div className="d-flex flex-column align-items-center justify-content-center py-4">
                      <Splide
                        options={{
                          type: "loop",
                          perPage: slideCount,
                          perMove: 1,
                          width: slideCount * 300,
                          pagination: false,
                          arrows: series.length > 4 ? true : false,
                          drag: series.length > 4 ? true : false,
                          breakpoints: {
                            1200: {
                              perPage: slideCount >= 2 ? 2 : 1,
                              width: slideCount >= 2 ? 600 : 300,
                              arrows: series.length > 2 ? true : false,
                              drag: series.length > 2 ? true : false
                            },
                            600: {
                              perPage: 1,
                              width: 300,
                              arrows: series.length > 1 ? true : false,
                              drag: series.length > 1 ? true : false,
                            }
                          }
                        }}
                       
                      >
                        {series?.map((serie) => (
                          <SplideSlide key={serie.id}>
                            <SlideCard series={serie} />
                          </SplideSlide>
                        ))}
                      </Splide>
                </div>

            </div>
        </>
    )
}