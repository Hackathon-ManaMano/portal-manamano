import Head from "next/head";
import { ReactElement } from "react";
import LayoutPublic from "../../components/LayoutPublic";

export default function Support(){

    return(

        <>
            <Head>
                <title>Quem apoiamos</title>
            </Head>
            
        </>
    );
}

Support.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <LayoutPublic>{page}</LayoutPublic>
        </>
    );
};

