import Head from "next/head";
import { ReactElement } from "react";
import LayoutPublic from "../components/LayoutPublic";

export default function Home() {
  return (
    <>
      <Head>
        <title>ManaMano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
    </>
  );
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutPublic>{page}</LayoutPublic>
    </>
  );
};
