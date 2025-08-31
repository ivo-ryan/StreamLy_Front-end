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
      const [loaded, setLoaded] = useState(false);

 const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    created() {
      setLoaded(true);
    },
  
    slides: { perView: 4, spacing: 10 , origin: "center"},
    mode: "snap",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
     breakpoints: {
      "(max-width: 800px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 8 },
      },

      "(max-width: 500px)": {
        slides: { perView: 1 }
      }
    }
  });

    return (
        <>
            <div className={styles.container}>
                <div ref={sliderRef} className="keen-slider " style={{width: "93%"}}>
                    
                  
                {
                    series?.map(item => (
                        <div key={item.id} className="keen-slider__slide " >
                            <SlideCard series={item}/>
                        </div>
                    ))
                }
                </div>
                {loaded && instanceRef.current && (
        <div className={styles.arrowContainer}>
          <button
            onClick={() => instanceRef.current?.prev()}
            className={styles.arrowLeft}
          >
            ←
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className={styles.arrowRight} >
            →
          </button>
        </div>
      )}

                 <div className={styles.containerBullets}>
                      {series.map((_, idx) => (
                          <span
                            key={idx}
                            className={`${styles.bullets} ${
                              currentSlide === idx ? styles.bulletCur : styles.bulletNext
                            }`}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                          />
                      ))}
                  </div>
            </div>
        </>
    )
}