import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import LayoutPublic from "../components/LayoutPublic";

export default function Home() {
  return (
    <>
      <Head>
        <title>ManaMano</title>
      </Head>
      <div className="text-indigo-900">
        <div
          className="flex flex-column bg-bluegray-300 justify-content-center align-items"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            className="opacity-70"
            fill
            src="/home-clareada.jpg"
            alt="Foto Fundo ManaMano"
            style={{ objectFit: "cover" }}
            priority
            quality={100}
          />

          <div
            className="flex flex-column justify-content-center align-items-center gap-4 z-5"
            style={{}}
          >
            <div className="field flex col-12 justify-content-center mt-6">
              <Image
                src="/logo/logo-manamano-2.png"
                width={305}
                height={240}
                alt="Logotipo ManaMano"
                priority
              />
            </div>

            <div className="text-center col-8 mb-6">
              <p className="text-3xl font-semibold line-height-3">
                Ao apoiar o Fundo MAN
                <span className="text-3xl text-red-500">A</span>MAN
                <span className="text-3xl text-red-500">O</span> você contribui
                para a formação e o fomento de nano e micro empreendedores das
                periferias do Rio de Janeiro, criando oportunidades de
                desenvolvimento de negócios e geração de renda para além da
                crise da Covid-19.
              </p>
            </div>
          </div>
        </div>

        <div className="px-7 mt-7 gap-2">
          <div className="flex flex-column md:flex-row align-items-center justify-content-center gap-5">
            <Image
              className="col-12 md:col-6 shadow-8"
              width={617}
              height={320}
              src="/home-colorida.jpg"
              alt="Foto Fundo ManaMano"
              style={{ objectFit: "cover", borderRadius: "10px" }}
              priority
              quality={100}
            />

            <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
              <p className="text-center text-4xl md:text-5xl font-bold pt-5">
                QUE
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  M
                </span>
                {" SOM"}
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  O
                </span>
                S?
              </p>
              <p className="mt-4 text-justify text-2xl line-height-3">
                O MAN<span className="text-2xl text-red-500">A</span>MAN
                <span className="text-2xl text-red-500">O</span> é um fundo de
                transformação social e de desenvolvimento destinado a fortalecer
                negócios de nano e micro empreendedoras(es) de favelas e de
                periferias da Região Metropolitana do Rio de Janeiro, como forma
                de mitigar os impactos econômicos causados pela Covid-19 e criar
                ferramentas de geração de renda para famílias vulneráveis. Seu
                objetivo é oferecer suporte financeiro, formação e consultoria
                em gestão, para o aperfeiçoamento de iniciativas
                empreendedoras(es). É fruto de uma parceria entre instituições
                de fellows Ashoka (Asplande, Saúde Criança, Luta pela Paz,
                Gastromotiva) e a UFRJ.
              </p>
            </div>
          </div>
        </div>

        <div className="px-7 mt-8 mb-6">
          <div className="flex flex-column md:flex-row align-items-center justify-content-center">
            <div className="flex flex-column col-12 md:col-6 ">
              <p className="text-center text-4xl md:text-5xl font-bold">
                {"COM "}
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  Q
                </span>
                {"UEM "}
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  T
                </span>
                RAB
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  A
                </span>
                LHA
                <span className="text-4xl md:text-5xl font-bold text-red-500">
                  M
                </span>
                OS?
              </p>
              <p className="mt-4 text-justify text-2xl line-height-3">
                O Fundo trabalha com nano e micro empreendedoras(es) de regiões
                periféricas, que fazem parte de instituições lideradas por
                Fellows da Ashoka no Rio de Janeiro. Na primeira fase, até 700
                empreendedoras(es) serão beneficiada(os). Serão considerados
                empreendedores(as) formais e informais.
              </p>
            </div>

            <Image
              className="col-12 md:col-6 shadow-8 ml-4"
              width={617}
              height={320}
              src="/empreendedoras-feira.jpg"
              alt="Empreendedoras em evento"
              style={{ objectFit: "cover", borderRadius: "10px" }}
              sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
              priority
              quality={100}
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
