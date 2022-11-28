import Head from "next/head";
import HeaderPublic from "../components/HeaderPublic";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <Head>
        <title>ManaMano</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
      <HeaderPublic/>
      
      <div className="grid flex-column mt-0 bg-cover text-indigo-900" style={{background: `url(${"/home-clareada.jpg"})`}}>

        <div className="field flex justify-content-center mt-6">
            <Image src="/logo/logo-completo-2.png" width={300} height={227} alt="Logotipo ManaMano"/>
        </div>

        <div className="field col-8 col-offset-2 text-center">
            <p className="text-2xl mt-0 mb-1"> Ao apoiar o Fundo MANAMANO você contribui para a formação
            e o fomento de nano e microempreendedores das periferias do Rio de Janeiro, criando oportunidades de 
            desenvolvimento de negócios e geração de renda para além da crise da Covid-19. </p>
        </div>

       <div className="flex flex-row col-10 col-offset-1 mt-8">
          
          <Image className="border-double border-white" src="/home-colorida.jpg" width={617} height={305} alt="Foto Fundo ManaMano"/>

          <div className="flex flex-column text-xl"> 
            <p className="text-center text-3xl font-bold mt-6"> QUEM SOMOS? </p>
            <p className="text-justify -mt-3 ml-5"> O MANAMANO é um fundo de transformação social e de desenvolvimento 
            destinado a fortalecer negócios de nano e micro empreendedoras(es) de favelas e de periferias da Região 
            Metropolitana do Rio de Janeiro, como forma de mitigar os impactos econômicos causados pela Covid-19 e 
            criar ferramentas de geração de renda para famílias vulneráveis. Seu objetivo é oferecer suporte financeiro, 
            formação e consultoria em gestão, para o aperfeiçoamento de iniciativas empreendedoras(es). É fruto de uma 
            parceria entre instituições de fellows Ashoka (Asplande, Saúde Criança, Luta pela Paz, Gastromotiva) e a UFRJ. </p>
          </div>

       </div>

       <div className="flex flex-row col-10 col-offset-1 mt-8">

          <div className="flex flex-column text-xl"> 
            <p className="text-center text-3xl font-bold mt-8"> COM QUEM TRABALHAMOS? </p>
            <p className="text-justify -mt-3 mr-5"> O Fundo trabalha com nano e micro empreendedoras(es) de regiões 
            periféricas, que fazem parte de instituições lideradas por Fellows da Ashoka no Rio de Janeiro. Na 
            primeira fase, até 700 empreendedoras(es) serão beneficiada(os). Serão considerados empreendedores(as) 
            formais e informais. </p>
          </div>
          
          <Image className="border-double border-white" src="/empreendedoras-feira.jpg" width={607} height={334} alt="Empreendedoras em evento"/>

       </div>
       
      </div>
    </>
  );
}