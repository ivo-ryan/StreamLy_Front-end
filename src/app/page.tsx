import styles from "./page.module.scss";
import Head from "next/head";
import HeaderNoAuth from "./components/homeNoAuth/headerNoAuth";
import PresentationSection from "./components/homeNoAuth/presentationSection";
import CardSection from "./components/homeNoAuth/cardSection";

export default function Home() {
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
            </main>
        </>
  );
}
