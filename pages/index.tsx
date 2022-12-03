import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import LayoutPublic from "../components/LayoutPublic";

export default function Home() {
  return (
    <>
      <Head>
        <title>ManaMano</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>

      <div
        className="grid flex-column mt-0 text-indigo-900 bg-contain line-height-3"
        style={{ background: `url(${"/home-clareada.jpg"})` }}
      >
        <div className="field flex col-12 justify-content-center mt-6">
          <Image
            src="/logo/logo-completo-2.png"
            width={317}
            height={240}
            alt="Logotipo ManaMano"
          />
        </div>

        <div className="field col-8 col-offset-2 text-center text-2xl">
          <p>
            {" "}
            Ao apoiar o Fundo MANAMANO você contribui para a formação e o
            fomento de nano e micro empreendedores das periferias do Rio de
            Janeiro, criando oportunidades de desenvolvimento de negócios e
            geração de renda para além da crise da Covid-19.{" "}
          </p>
        </div>

        <div className="flex flex-row col-12 mt-4">
          <div className="grid p-4 align-items-center">
            <Image
              className="col-12 md:col-6s border-double border-white shadow-8"
              width={617}
              height={320}
              src="/home-colorida.jpg"
              alt="Foto Fundo ManaMano"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
            />

            <div className="col-12 md:col-6 flex flex-column text-xl text-center">
              <p className="text-3xl font-bold"> QUEM SOMOS? </p>
              <p className="-mt-3 ml-5">
                {" "}
                O MANAMANO é um fundo de transformação social e de
                desenvolvimento destinado a fortalecer negócios de nano e micro
                empreendedoras(es) de favelas e de periferias da Região
                Metropolitana do Rio de Janeiro, como forma de mitigar os
                impactos econômicos causados pela Covid-19 e criar ferramentas
                de geração de renda para famílias vulneráveis. Seu objetivo é
                oferecer suporte financeiro, formação e consultoria em gestão,
                para o aperfeiçoamento de iniciativas empreendedoras(es). É
                fruto de uma parceria entre instituições de fellows Ashoka
                (Asplande, Saúde Criança, Luta pela Paz, Gastromotiva) e a UFRJ.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row col-12">
          <div className="grid p-4 align-items-center">
            <div className="col-12 md:col-6 flex flex-column text-xl text-center">
              <p className="text-3xl font-bold"> COM QUEM TRABALHAMOS? </p>
              <p className="-mt-3 ml-5">
                {" "}
                O Fundo trabalha com nano e micro empreendedoras(es) de regiões
                periféricas, que fazem parte de instituições lideradas por
                Fellows da Ashoka no Rio de Janeiro. Na primeira fase, até 700
                empreendedoras(es) serão beneficiada(os). Serão considerados
                empreendedores(as) formais e informais.{" "}
              </p>
            </div>

            <Image
              className="col-12 md:col-6 border-double border-white shadow-8"
              width={0}
              height={320}
              src="/empreendedoras-feira.jpg"
              alt="Empreendedoras em evento"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
            />
          </div>
        </div>
      </div>
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
