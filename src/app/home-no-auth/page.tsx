import Head from "next/head";
import HeaderNoAuth from "../components/homeNoAuth/headerNoAuth";

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
            </main>
        </>
    )
}