import { SeriesType } from '@/services/seriesServices';
import styles from './styles.module.scss';
import SlideComponent from '../../common/slidesComponents';
import Link from 'next/link';

interface props {
    newstSeries: SeriesType[];
}

export default function SlideSection ( {newstSeries}: props ){
    return (
        <>
            <div className={styles.container}>
                <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
                <SlideComponent series={newstSeries}/>
                <Link href={"/register"} className={styles.slideSectionBtn}>
                    Se cadastre para acessar!
                </Link>
            </div>
        
        </>
    )
}