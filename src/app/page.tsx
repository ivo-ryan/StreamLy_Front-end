import styles from "./page.module.scss";
import Head from "next/head";
import HeaderNoAuth from "./components/homeNoAuth/headerNoAuth";
import PresentationSection from "./components/homeNoAuth/presentationSection";
import CardSection from "./components/homeNoAuth/cardSection";
import SlideSection from "./components/homeNoAuth/slideSection";
import { seriesService } from "@/services/seriesServices";


export default async  function Home() {

  const series = await seriesService.getNewstSeries();
  console.log(series)

  return (
      <>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <main>
              <div className={styles.sectionBackground}>   
                <HeaderNoAuth/>
                <PresentationSection/>

              </div>          
            <CardSection/>
            <SlideSection newstSeries={series.data}/>
            </main>
        </>
  );
}

