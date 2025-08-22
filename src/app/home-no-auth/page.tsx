import Head from "next/head";
import HeaderNoAuth from "../components/homeNoAuth/headerNoAuth";
import PresentationSection from "../components/homeNoAuth/presentationSection";

export default function HomeNoAuth() {
    return (
        <>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <main>
                <HeaderNoAuth/>
                <PresentationSection/>
            </main>
        </>
    )
}