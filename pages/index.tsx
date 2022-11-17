import Head from "next/head";
import HeaderPublic from "../components/HeaderPublic";


export default function Home() {

  return (
    <>
      <Head>
        <title>ManaMano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
      <HeaderPublic/>
    </>
  );
}
