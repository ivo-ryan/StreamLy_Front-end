"use client"

import styles from "./styles.module.scss";
import { SeriesType } from "@/services/seriesServices";

import SlideCard from "../slideCard";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react";


interface props {
    series: SeriesType[];
}

export default function SlideComponent( {series}: props ){
      const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 4, spacing: 10 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
     breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },

      "(max-width: 500px)": {
        slides: { perView: 1 }
      }
    }
  });

    return (
        <>
            <div className={styles.container}>
                <div ref={sliderRef} className="keen-slider">
                    
                  
                {
                    series?.map(item => (
                        <div key={item.id} className="keen-slider__slide " >
                            <SlideCard series={item}/>
                        </div>
                    ))
                }
                </div>
                 <div className="flex justify-center mt-4 gap-2">
        {series.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
            </div>
        </>
    )
}