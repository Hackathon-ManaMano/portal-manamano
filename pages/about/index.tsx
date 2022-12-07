import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import LayoutPublic from "../../components/LayoutPublic";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Quem Somos</title>
            </Head>
            <div className="flex flex-column text-indigo-900 mb-7 gap-7 justify-content-center">
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
                    <div className="flex flex-column justify-content-center align-items-center gap-4 z-5">
                        <div className="field flex col-12 justify-content-center mt-4">
                            <Image
                                src="/logo/icon-manamano.png"
                                width={200}
                                height={200}
                                alt="Logotipo ManaMano"
                                priority
                            />
                        </div>
                        <div className="text-center col-8 mb-6">
                            <p className="text-7xl  font-semibold mb-5">
                                QU
                                <span className="text-7xl  font-semibold mb-5 text-red-500">
                                    E
                                </span>
                                M SOM
                                <span className="text-7xl  font-semibold mb-5 text-red-500">
                                    O
                                </span>
                                S
                            </p>
                            <p className="text-3xl line-height-2 font-semibold">
                                <span className="text-3xl font-bold">
                                    {"O MAN"}
                                    <span className="text-3xl font-bold text-red-500">
                                        A
                                    </span>
                                    MAN
                                    <span className="text-3xl font-bold text-red-500">
                                        {"O "}
                                    </span>
                                </span>
                                É UM FUNDO DE TRANSFORMAÇÃO SOCIAL FORMADO PELA
                                UFRJ E ASHOKA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center gap-5 px-7">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="https://ufrj.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={475}
                                    height={200}
                                    src="/logo/logo-ufrj.png"
                                    alt="Logo da UFRJ (Universidade Federal do Rio de Janeiro)"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                    priority
                                    quality={100}
                                    sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5">
                            UFRJ
                        </p>
                        <p className=" text-justify text-2xl line-height-3">
                            Ancorada no tripé ensino, pesquisa e extensão e
                            comprometida com a inovação, a Universidade Federal
                            do Rio de Janeiro é uma instituição pública e
                            gratuita que tem como Missão contribuir para o
                            desenvolvimento científico, tecnológico, artístico e
                            cultural da sociedade. Ao completar 100 anos de
                            existência entrega à sociedade 176 cursos de
                            graduação, 132 programas de pós-graduação, 500
                            cursos de extensão, 1.456 laboratórios e grupos de
                            pesquisa constituindo uma comunidade acadêmica com
                            cerca de 80 mil pessoas, entre estudantes,
                            professores e técnico-administrativos.
                        </p>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-7">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold">
                            Ashoka Brasil
                        </p>
                        <p className="text-justify text-2xl line-height-3 ">
                            A Ashoka é uma organização civil global, pioneira na
                            promoção do empreendedorismo social. Dedica-se à
                            consolidação de um movimento mundial em que todas as
                            pessoas se reconheçam como agentes de transformação
                            positiva na sociedade. Criada em 1980 e presente
                            desde 1986 no Brasil, foi considerada a 5ª ONG de
                            maior impacto social no mundo, segundo a publicação
                            suíça NGO Advisor. A comunidade da Ashoka reúne mais
                            de 3.500 empreendedores sociais no mundo todo (376
                            deles no Brasil), além de 300 Escolas
                            Transformadoras (18 delas no país) e Jovens
                            Transformadores.
                        </p>
                    </div>
                    <div className="col-12 md:col-6 flex justify-content-center md:flex-order-1 flex-order-0">
                        <Link
                            href="https://www.ashoka.org/pt-br"
                            legacyBehavior
                        >
                            <a target="_blank">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/logo/ashoka.png"
                                    alt="Logo ashoka"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                    sizes="(max-width: 320px) 280px,(max-width: 480px)440px,800px"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center gap-5 px-7">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="http://www.asplande.org.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={350}
                                    height={350}
                                    src="/logo/logo-asplande.jpg"
                                    alt="Logo da Asplande"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5">
                            Asplande
                        </p>
                        <p className="text-justify text-2xl line-height-3">
                            Criada em 1992, tem como missão instrumentalizar as
                            populações de baixa renda – especialmente grupos
                            formados por mulheres chefes de família – para o
                            planejamento, implementação e monitoramento de
                            empreendimentos comunitários e cooperativos,
                            voltados para um desenvolvimento integral e
                            harmônico. A ASPLANDE é filiada a ABONG – Associação
                            Brasileira de Organizações Não Governamentais e
                            a Rede ASHOKA.
                        </p>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-7 gap-5">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold">
                            Criola
                        </p>
                        <p className="text-justify text-2xl line-height-3 ">
                            Criola é uma organização da sociedade civil com 30
                            anos de trajetória na defesa e promoção dos direitos
                            das mulheres negras e na construção de uma sociedade
                            onde os valores de justiça, equidade e solidariedade
                            são fundamentais. Nesse percurso, Criola reafirma
                            que a ação transformadora das mulheres negras cis e
                            trans é essencial para o Bem Viver de toda a
                            sociedade brasileira.
                        </p>
                    </div>
                    <div className="col-12 md:col-6 flex justify-content-center md:flex-order-1 flex-order-0">
                        <Link href="https://criola.org.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={200}
                                    height={300}
                                    src="/logo/criola_30_anos.png"
                                    alt="Logo Criola"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                    sizes="(max-width: 350px) 300px,(max-width: 500px)500px,800px"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-7">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="https://gastromotiva.org/" legacyBehavior>
                            <a target="_blank">
                        <Image
                            width={350}
                            height={300}
                            src="/logo/logo-gastromotiva.png"
                            alt="Logo da Gastromotiva"
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            priority
                            quality={100}
                            />
                        </a>
                    </Link>
                    </div>

                    <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
                        <p className="text-center text-4xl md:text-5xl font-bold">
                            Gastromotiva
                        </p>
                        <p className="text-justify text-2xl line-height-3">
                            Fundada no Brasil em 2006 pelo chef e empreendedor
                            social David Hertz, a Gastromotiva tem como missão
                            transformar a vida de pessoas e comunidades através
                            da comida. A partir da experiência acumulada em mais
                            de uma década de trabalho no Brasil e no México, a
                            organização contribui para geração de impacto social
                            positivo nos locais em que atua e cada vez mais
                            amplia sua visão e ação global de cooperação com os
                            Objetivos do Desenvolvimento Sustentável da ONU. A
                            Gastromotiva já formou gratuitamente mais de 6,4 mil
                            jovens e adultos para o mercado de trabalho,
                            promoveu a sensibilização em educação alimentar e
                            nutricional para mais de 100 mil pessoas e resgatou
                            mais de 300 toneladas do desperdício de alimentos,
                            ressignificados em mais de 1,4 milhão de refeições
                            gratuitas para pessoas em situação de
                            vulnerabilidade social.
                        </p>
                    </div>
                </div>

                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-7">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold ">
                            Instituto Dara
                        </p>
                        <p className="text-justify text-2xl line-height-3 ">
                            O Instituto Dara, antigo Saúde Criança, é uma
                            organização da sociedade civil que atua para
                            promover a saúde e o desenvolvimento humano por meio
                            da implementação e da disseminação de uma abordagem
                            integrada de combate à pobreza. Foi fundado pela
                            médica Vera Cordeiro, em 1991, com um grupo de
                            profissionais do Hospital da Lagoa, no Rio de
                            Janeiro, Brasil. Para implementar sua missão, o
                            Instituto Dara trabalha com o atendimento direto de
                            famílias vulneráveis, a disseminação de conhecimento
                            sobre desenvolvimento humano, a influência em
                            políticas públicas e a mobilização da sociedade
                            civil.
                        </p>
                    </div>
                    <div className="col-12 md:col-6 flex justify-content-center md:flex-order-1 flex-order-0">
                    <Link href="https://www.dara.org.br/" legacyBehavior>
                            <a target="_blank">
                        <Image
                            width={400}
                            height={300}
                            src="/logo/dara.jpeg"
                            alt="Logo instituto dara"
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            sizes="(max-width: 320px) 280px,(max-width: 480px)320px,400px"
                            priority
                            quality={100}
                            />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-column md:flex-row align-items-center justify-content-center gap-5 px-7">
                    <div className="col-12 md:col-6 flex justify-content-center">
                    <Link href="https://lutapelapaz.org/" legacyBehavior>
                            <a target="_blank">
                        <Image
                            width={300}
                            height={300}
                            src="/logo/logo-luta-pela-paz.png"
                            alt="Logo da Luta Pela Paz"
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            priority
                            quality={100}
                            />
                            </a>
                        </Link>
                    </div>

                    <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5">
                            Luta Pela Paz
                        </p>
                        <p className="text-justify text-2xl line-height-3">
                            A Luta pela Paz é uma organização sem fins
                            lucrativos fundada no ano de 2000, no Complexo da
                            Maré, no Rio de Janeiro. Nosso objetivo é promover
                            um espaço seguro para crianças e jovens, onde
                            recebem o apoio necessário para alcançar seu
                            potencial.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

AboutUs.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <LayoutPublic>{page}</LayoutPublic>
        </>
    );
};
