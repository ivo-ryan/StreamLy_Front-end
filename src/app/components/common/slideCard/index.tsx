import { SeriesType } from "@/services/seriesServices";
import styles from "./styles.module.scss";

interface props{
    series: SeriesType;
}

export default function SlideCard({ series }: props){
    return (
        <>
            <div className={styles.slide}>
                <img src={`${series.thumbnailUrl}`} alt={series.name} className={styles.slideImg}/>
                <p className={styles.slideTitle}>{series.name}</p>
                <p className={styles.slideDescription}>{series.synopsis}</p>
            </div>
        </>
    )
}