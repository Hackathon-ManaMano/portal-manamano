import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import LayoutPublic from "../components/LayoutPublic";

export default function Home() {
  return (
    <>
      <div className="text-indigo-900">
        <div
          className="flex flex-column justify-content-center align-items-center"
          style={{
            height: "500px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Image
            className="opacity-70 shadow-8"
            fill
            src="/home-clareada.jpg"
            alt="Foto Fundo ManaMano"
            style={{ objectFit: "cover" }}
            priority
            quality={100}
          />

          <div
            className="flex flex-column justify-content-center align-items-center gap-7 "
            style={{ position: "absolute" }}
          >
            <Image
              src="/logo/logo-completo-2.png"
              width={317}
              height={240}
              alt="Logotipo ManaMano"
              style={{ objectFit: "cover" }}
              priority
            />

            <p className=" text-center text-3xl font-semibold col-8 line-height-3">
              Ao apoiar o Fundo MANAMANO você contribui para a formação e o
              fomento de nano e micro empreendedores das periferias do Rio de
              Janeiro, criando oportunidades de desenvolvimento de negócios e
              geração de renda para além da crise da Covid-19.
            </p>
          </div>
        </div>

        <div className="flex px-7 mt-7 align-items-center justify-content-center gap-2">
          <Image
            className=" shadow-8"
            width={617}
            height={320}
            src="/home-colorida.jpg"
            alt="Foto Fundo ManaMano"
            style={{ objectFit: "cover", borderRadius: "10px" }}
            priority
            quality={100}
          />

          <div className=" ml-5">
            <p className="text-center text-5xl font-bold ">QUEM SOMOS?</p>
            <p className="mt-4 text-justify text-2xl line-height-3 ">
              O MANAMANO é um fundo de transformação social e de desenvolvimento
              destinado a fortalecer negócios de nano e micro empreendedoras(es)
              de favelas e de periferias da Região Metropolitana do Rio de
              Janeiro, como forma de mitigar os impactos econômicos causados
              pela Covid-19 e criar ferramentas de geração de renda para
              famílias vulneráveis. Seu objetivo é oferecer suporte financeiro,
              formação e consultoria em gestão, para o aperfeiçoamento de
              iniciativas empreendedoras(es). É fruto de uma parceria entre
              instituições de fellows Ashoka (Asplande, Saúde Criança, Luta pela
              Paz, Gastromotiva) e a UFRJ.
            </p>
          </div>
        </div>

        <div className="flex px-7 mt-7 mb-6 align-items-center justify-content-center gap-2">
          <div className=" mr-5">
            <p className="text-center text-5xl font-bold">
              COM QUEM TRABALHAMOS?
            </p>
            <p className="mt-4 text-justify text-2xl line-height-3">
              O Fundo trabalha com nano e micro empreendedoras(es) de regiões
              periféricas, que fazem parte de instituições lideradas por Fellows
              da Ashoka no Rio de Janeiro. Na primeira fase, até 700
              empreendedoras(es) serão beneficiada(os). Serão considerados
              empreendedores(as) formais e informais.
            </p>
          </div>

          <Image
            className=" shadow-8 "
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

      {/* <div
        className="bg-cover"
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          className="shadow-8"
          fill
          src="/home-clareada.jpg"
          alt="Foto Fundo ManaMano"
          style={{ objectFit: "cover" }}
        />

        <div className="field flex col-12 justify-content-center mt-6">
          <Image
            src="/logo/logo-completo-2.png"
            width={317}
            height={240}
            alt="Logotipo ManaMano"
          />
        </div>

        <div className="field col-8 col-offset-2 text-center font-bold">
          <p className="text-2xl ">
            {" "}
            Ao apoiar o Fundo MANAMANO você contribui para a formação e o
            fomento de nano e micro empreendedores das periferias do Rio de
            Janeiro, criando oportunidades de desenvolvimento de negócios e
            geração de renda para além da crise da Covid-19.{" "}
          </p>
        </div>
      </div>

      <div className="grid p-4 mt-5 ml-6 align-items-center">
        <Image
          className="shadow-8"
          width={617}
          height={320}
          src="/home-colorida.jpg"
          alt="Foto Fundo ManaMano"
          style={{ objectFit: "cover", borderRadius:"10px" }}
          sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
        />

        <div className="col-12 md:col-6 flex flex-column text-center">
          <p className="text-3xl font-bold underline"> QUEM SOMOS? </p>
          <p className="mt-3 ml-5 text-justify text-xl">
            O MANAMANO é um fundo de transformação social e de desenvolvimento
            destinado a fortalecer negócios de nano e micro empreendedoras(es)
            de favelas e de periferias da Região Metropolitana do Rio de
            Janeiro, como forma de mitigar os impactos econômicos causados pela
            Covid-19 e criar ferramentas de geração de renda para famílias
            vulneráveis. Seu objetivo é oferecer suporte financeiro, formação e
            consultoria em gestão, para o aperfeiçoamento de iniciativas
            empreendedoras(es). É fruto de uma parceria entre instituições de
            fellows Ashoka (Asplande, Saúde Criança, Luta pela Paz,
            Gastromotiva) e a UFRJ.{" "}
          </p>
        </div>
      </div>

      <div className="grid p-4 align-items-center gap-4 ml-6">
        <div className="col-12 md:col-6 flex flex-column text-xl text-center">
          <p className="text-3xl font-bold underline">
            {" "}
            COM QUEM TRABALHAMOS?{" "}
          </p>
          <p className="mt-3 text-xl text-justify">
            {" "}
            O Fundo trabalha com nano e micro empreendedoras(es) de regiões
            periféricas, que fazem parte de instituições lideradas por Fellows
            da Ashoka no Rio de Janeiro. Na primeira fase, até 700
            empreendedoras(es) serão beneficiada(os). Serão considerados
            empreendedores(as) formais e informais.{" "}
          </p>
        </div>

        <Image
          className="shadow-8 "
          width={617}
          height={320}
          src="/empreendedoras-feira.jpg"
          alt="Empreendedoras em evento"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
        />
      </div> */}
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
