import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import LayoutPublic from "../../components/LayoutPublic";

export default function Support() {
    return (
        <>
            <Head>
                <title>Quem apoiamos</title>
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
                        src="/background-apoio.jpg"
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
                                AP
                                <span className="text-7xl font-semibold text-red-500">
                                    O
                                </span>
                                IAD
                                <span className="text-7xl font-semibold text-red-500">
                                    O
                                </span>
                                S
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex flex-column md:flex-row align-items-center justify-content-center gap-5">
                    <div className="p-5 flex flex-column align-items-center justify-content-center col-12 md:col-6">
                        <p className="text-center text-4xl md:text-5xl font-bold">
                            QU
                            <span className="text-4xl md:text-5xl font-bold text-red-500">
                                E
                            </span>
                            M AP
                            <span className="text-4xl md:text-5xl font-bold text-red-500">
                                O
                            </span>
                            IAM
                            <span className="text-4xl md:text-5xl font-bold text-red-500">
                                O
                            </span>
                            S?
                        </p>
                        <p className="mt-4 text-justify text-2xl  line-height-3 ">
                            Em vocabulário formal, o nanoempreendedorismo é uma
                            expressão utilizada para definir quaisquer
                            iniciativas rentáveis, por menores que sejam. Então
                            sabe aquela moça que faz empadinha e vende na porta
                            de casa? Aquela senhora que vende artesanato? E o
                            famoso vendedor de doce nos trens e ônibus? Esses
                            são os nanoempreendedores apoiados pelo
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
                            , pessoas que sustentam a casa com muito trabalho
                            duro!
                        </p>
                    </div>
                    <iframe className="mt-2 col-10 md:col-5"
                        height={315}
                        width={300}
                        src="https://www.youtube.com/embed/MOp0zMYVEew"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
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
