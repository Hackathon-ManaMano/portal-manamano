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
                        src="/background-quem-somos.jpg"
                        alt="Foto Fundo ManaMano"
                        style={{ objectFit: "cover" }}
                        priority
                        quality={100}
                    />
                    <div className="flex flex-column justify-content-center align-items-center z-5">
                        <div className="field flex col-12 justify-content-center mt-4">
                            <Image
                                src="/logo/logo-basico.png"
                                width={250}
                                height={250}
                                alt="Logotipo ManaMano"
                                priority
                            />
                        </div>
                        <div className="text-center col-8 mb-8">
                            <p className="text-7xl font-semibold mb-5">
                                QU
                                <span className="text-7xl font-semibold mb-5 text-red-500">
                                    E
                                </span>
                                M S
                                <span className="text-7xl font-semibold mb-5 text-red-500">
                                    O
                                </span>
                                M
                                <span className="text-7xl font-semibold mb-5 text-red-500">
                                    O
                                </span>
                                S
                            </p>
                            <p className="text-3xl line-height-2 ">
                                O
                                <span className="text-3xl font-bold">
                                    {" MAN"}
                                    <span className="text-3xl font-bold text-red-500">
                                        A
                                    </span>
                                    MAN
                                    <span className="text-3xl font-bold text-red-500">
                                        {"O "}
                                    </span>
                                </span>
                                ?? UM FUNDO DE TRANSFORMA????O SOCIAL FORMADO PELA
                                UFRJ E ASHOKA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="https://ufrj.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={310}
                                    height={190}
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
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5 line-height-4">
                            UFRJ
                        </p>
                        <p className=" text-justify text-2xl line-height-4">
                            Ancorada no trip?? ensino, pesquisa e extens??o e
                            comprometida com a inova????o, a Universidade Federal
                            do Rio de Janeiro ?? uma institui????o p??blica e
                            gratuita que tem como Miss??o contribuir para o
                            desenvolvimento cient??fico, tecnol??gico, art??stico e
                            cultural da sociedade. Ao completar 100 anos de
                            exist??ncia entrega ?? sociedade 176 cursos de
                            gradua????o, 132 programas de p??s-gradua????o, 500
                            cursos de extens??o, 1.456 laborat??rios e grupos de
                            pesquisa constituindo uma comunidade acad??mica com
                            cerca de 80 mil pessoas, entre estudantes,
                            professores e t??cnico-administrativos.
                        </p>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold line-height-4">
                            Ashoka Brasil
                        </p>
                        <p className="text-justify text-2xl line-height-4 ">
                            A Ashoka ?? uma organiza????o civil global, pioneira na
                            promo????o do empreendedorismo social. Dedica-se ??
                            consolida????o de um movimento mundial em que todas as
                            pessoas se reconhe??am como agentes de transforma????o
                            positiva na sociedade. Criada em 1980 e presente
                            desde 1986 no Brasil, foi considerada a 5?? ONG de
                            maior impacto social no mundo, segundo a publica????o
                            su????a NGO Advisor. A comunidade da Ashoka re??ne mais
                            de 3.500 empreendedores sociais no mundo todo (376
                            deles no Brasil), al??m de 300 Escolas
                            Transformadoras (18 delas no pa??s) e Jovens
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
                                    width={290}
                                    height={290}
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
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="col-12 md:col-6 flex justify-content-center ">
                        <Link href="http://www.asplande.org.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={300}
                                    height={300}
                                    src="/parceiros/asplande.jpg"
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
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5 line-height-4">
                            Asplande
                        </p>
                        <p className="text-justify text-2xl line-height-4">
                            Criada em 1992, tem como miss??o instrumentalizar as
                            popula????es de baixa renda ?????especialmente grupos
                            formados por mulheres chefes de fam??lia????? para o
                            planejamento, implementa????o e monitoramento de
                            empreendimentos comunit??rios e cooperativos,
                            voltados para um desenvolvimento integral e
                            harm??nico. A??ASPLANDE???? filiada a??ABONG????? Associa????o
                            Brasileira de Organiza????es N??o Governamentais e
                            a??Rede ASHOKA.
                        </p>
                    </div>
                </div>
                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold line-height-4">
                            Criola
                        </p>
                        <p className="text-justify text-2xl line-height-4 ">
                            Criola ?? uma organiza????o da sociedade civil com 30
                            anos de trajet??ria na defesa e promo????o dos direitos
                            das mulheres negras e na constru????o de uma sociedade
                            onde os valores de justi??a, equidade e solidariedade
                            s??o fundamentais. Nesse percurso, Criola reafirma
                            que a a????o transformadora das mulheres negras cis e
                            trans ?? essencial para o Bem Viver de toda a
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

                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="https://gastromotiva.org/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={290}
                                    height={200}
                                    src="/parceiros/gastromotiva.png"
                                    alt="Logo da Gastromotiva"
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
                        <p className="text-center text-4xl md:text-5xl font-bold line-height-4 line-height-4">
                            Gastromotiva
                        </p>
                        <p className="text-justify text-2xl line-height-4">
                            Fundada no Brasil em 2006 pelo chef e empreendedor
                            social David Hertz, a Gastromotiva tem como miss??o
                            transformar a vida de pessoas e comunidades atrav??s
                            da comida. A partir da experi??ncia acumulada em mais
                            de uma d??cada de trabalho no Brasil e no M??xico, a
                            organiza????o contribui para gera????o de impacto social
                            positivo nos locais em que atua e cada vez mais
                            amplia sua vis??o e a????o global de coopera????o com os
                            Objetivos do Desenvolvimento Sustent??vel da ONU. A
                            Gastromotiva j?? formou gratuitamente mais de 6,4 mil
                            jovens e adultos para o mercado de trabalho,
                            promoveu a sensibiliza????o em educa????o alimentar e
                            nutricional para mais de 100 mil pessoas e resgatou
                            mais de 300 toneladas do desperd??cio de alimentos,
                            ressignificados em mais de 1,4 milh??o de refei????es
                            gratuitas para pessoas em situa????o de
                            vulnerabilidade social.
                        </p>
                    </div>
                </div>

                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="flex flex-column col-12 md:col-6 md:flex-order-0 flex-order-1">
                        <p className="text-center text-4xl md:text-5xl font-bold line-height-4">
                            Instituto Dara
                        </p>
                        <p className="text-justify text-2xl line-height-4 ">
                            O Instituto Dara, antigo Sa??de Crian??a, ?? uma
                            organiza????o da sociedade civil que atua para
                            promover a sa??de e o desenvolvimento humano por meio
                            da implementa????o e da dissemina????o de uma abordagem
                            integrada de combate ?? pobreza. Foi fundado pela
                            m??dica Vera Cordeiro, em 1991, com um grupo de
                            profissionais do Hospital da Lagoa, no Rio de
                            Janeiro, Brasil. Para implementar sua miss??o, o
                            Instituto Dara trabalha com o atendimento direto de
                            fam??lias vulner??veis, a dissemina????o de conhecimento
                            sobre desenvolvimento humano, a influ??ncia em
                            pol??ticas p??blicas e a mobiliza????o da sociedade
                            civil.
                        </p>
                    </div>
                    <div className="col-12 md:col-6 flex justify-content-center md:flex-order-1 flex-order-0">
                        <Link href="https://www.dara.org.br/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={290}
                                    height={200}
                                    src="/parceiros/institutodara.png"
                                    alt="Logo instituto dara"
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "10px",
                                    }}
                                    sizes="(max-width: 320px) 280px,(max-width: 480px)320px,400px"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-column md:flex-row align-items-center justify-content-center px-4">
                    <div className="col-12 md:col-6 flex justify-content-center">
                        <Link href="https://lutapelapaz.org/" legacyBehavior>
                            <a target="_blank">
                                <Image
                                    width={280}
                                    height={280}
                                    src="/logo/logo-luta-pela-paz.png"
                                    alt="Logo da Luta Pela Paz"
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
                        <p className="text-center text-4xl md:text-5xl font-bold pt-5 line-height-4">
                            Luta Pela Paz
                        </p>
                        <p className="text-justify text-2xl line-height-4">
                            A Luta pela Paz ?? uma organiza????o sem fins
                            lucrativos fundada no ano de 2000, no Complexo da
                            Mar??, no Rio de Janeiro. Nosso objetivo ?? promover
                            um espa??o seguro para crian??as e jovens, onde
                            recebem o apoio necess??rio para alcan??ar seu
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
