import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import LayoutPublic from "../../components/LayoutPublic";

export default function Contribute() {
    return (
        <>
            <Head>
                <title>Contribua</title>
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
                        src="/empreendedoras-encontro.jpg"
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

                        <div className="text-center mb-8">
                            <p className="text-7xl font-semibold">
                                C
                                <span className="text-7xl font-semibold text-red-500">
                                    O
                                </span>
                                NTR
                                <span className="text-7xl font-semibold text-red-500">
                                    I
                                </span>
                                BU
                                <span className="text-7xl font-semibold text-red-500">
                                    A
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-7 mt-8 gap-2 flex flex-column">
                    <div className="flex flex-column md:flex-row align-items-center justify-content-center gap-5">
                        <div className="flex flex-column align-items-center justify-content-center col-12 md:col-6">
                            <p className="text-center text-4xl md:text-5xl font-bold">
                                P
                                <span className="text-4xl md:text-5xl font-bold text-red-500">
                                    O
                                </span>
                                R Q
                                <span className="text-4xl md:text-5xl font-bold text-red-500">
                                    U
                                </span>
                                E C
                                <span className="text-4xl md:text-5xl font-bold text-red-500">
                                    O
                                </span>
                                NTR
                                <span className="text-4xl md:text-5xl font-bold text-red-500">
                                    I
                                </span>
                                BU
                                <span className="text-4xl md:text-5xl font-bold text-red-500">
                                    I
                                </span>
                                R?
                            </p>

                            <p className="mt-4 text-justify text-2xl line-height-3">
                                Os impactos econ??micos causados pela pandemia do
                                novo coronav??rus s??o graves e afetam de modo
                                ainda mais preocupante a realidade de popula????es
                                mais vulner??veis. Milhares de pessoas perderam
                                seus empregos ou, como trabalhadores aut??nomos,
                                tiveram suas perspectivas de renda drasticamente
                                reduzidas devido ao isolamento social. Nesse
                                cen??rio, ?? urgente o engajamento em solu????es
                                eficientes que beneficiem esses grupos na
                                retomada de suas atividades. Contribuindo com o
                                <span className="text-2xl font-bold">
                                    {" "}
                                    MAN
                                    <span className="text-2xl font-bold text-red-500">
                                        A
                                    </span>
                                    MAN
                                    <span className="text-2xl font-bold text-red-500">
                                        O
                                    </span>
                                </span>
                                , voc?? estar?? apoiando essas fam??lias atrav??s da
                                cria????o de oportunidades de enfrentamento ??
                                crise e gera????o de renda para al??m do per??odo da
                                pandemia.
                                <span className="text-2xl font-bold">
                                    {" Seja um investidor social!"}
                                </span>
                            </p>
                        </div>

                        <Image
                            className="col-12 md:col-6 shadow-8"
                            width={600}
                            height={350}
                            src="/empreendedoras-pascoa-colorida.jpg"
                            alt="Foto Fundo ManaMano"
                            style={{ objectFit: "cover", borderRadius: "10px" }}
                            priority
                            quality={100}
                        />
                    </div>

                    <div className="text-center mt-8 mb-6 line-height-3">
                        <p className="text-3xl font-bold mt-6"> Banco Ita??: </p>
                        <p className="text-3xl"> Ag??ncia 0477 </p>
                        <p className="text-3xl"> CC 28107-5 </p>
                        <p className="text-3xl">
                            {" "}
                            Asplande - Assessoria & Planejamento p/ o
                            Desenvolvimento{" "}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

Contribute.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <LayoutPublic>{page}</LayoutPublic>
        </>
    );
};
