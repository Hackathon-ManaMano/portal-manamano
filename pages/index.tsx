import Head from "next/head";
import { useUser } from "@supabase/auth-helpers-react";
import HeaderLogged from "../components/HeaderLogged";
import HeaderPublic from "../components/HeaderPublic";

export default function Home() {
  const user = useUser();
  return (
    <>
      <Head>
        <title>ManaMano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
      {user ? <HeaderLogged /> : <HeaderPublic />}
    </>
  );
}
