// React & Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// Primeract
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

export default function LayoutPublic({ children }: React.PropsWithChildren) {
    const router = useRouter();
    const items = [
        {
            label: "Quem Somos",
            command: () => router.push("/about"),
        },
        {
            label: "Quem Apoiamos",
        },
        {
            label: "Contribua",
            command: () => router.push("/contribute"),
        },
    ];

    const start = (
        <Link href="/">
            <Image
                src="/logo/logo-manamano.png"
                alt="Logo ManaMano"
                height={60}
                width={140}
                priority
                quality={100}
                style={{ aspectRatio: 1 }}
            />
        </Link>
    );

    const end = (
        <>
            <Button
                label="Entrar"
                iconPos="right"
                icon="pi pi-sign-in"
                className="p-button-primary hidden sm:inline-flex"
                onClick={() => router.push("/login")}
            />
            <Button
                iconPos="right"
                icon="pi pi-sign-in"
                className="p-button-primary inline-flex sm:hidden"
                onClick={() => router.push("/login")}
            />
        </>
    );

    return (
        <>
            <Menubar model={items} start={start} end={end} />
            {children}

            <footer className="site-footer pt-6">
                <div className="flex flex-column xl:flex-row justify-content-center align-items-center md:col-10 md:col-offset-1 mt-4">
                    <div className="flex flex-column md:flex-row justify-content-center align-items-center">
                        <Link
                            href="https://www.ashoka.org/pt-br"
                            legacyBehavior
                        >
                            <a target="blank">
                                <Image
                                    width={110}
                                    height={150}
                                    src="/parceiros/ashoka.png"
                                    alt="Logo ASHOKA"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>

                        <Link href="https://ufrj.br/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={200}
                                    height={150}
                                    src="/parceiros/ufrj.png"
                                    alt="Logo UFRJ"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>

                        <Link href="http://www.asplande.org.br/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={150}
                                    height={150}
                                    src="/parceiros/asplande.jpg"
                                    alt="Logo Asplande"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="flex flex-column md:flex-row justify-content-center align-items-center">
                        <Link href="https://criola.org.br/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={120}
                                    height={150}
                                    src="/parceiros/criola.png"
                                    alt="Logo Criola"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>

                        <Link href="https://dara.org.br/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={230}
                                    height={150}
                                    src="/parceiros/institutodara.png"
                                    alt="Logo Instituto Dara"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>

                        <Link href="https://gastromotiva.org/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={200}
                                    height={145}
                                    src="/parceiros/gastromotiva.png"
                                    alt="Logo Gastromotiva"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>

                        <Link href="https://lutapelapaz.org/" legacyBehavior>
                            <a target="blank">
                                <Image
                                    width={155}
                                    height={150}
                                    src="/parceiros/lutapelapaz.png"
                                    alt="Logo Luta Pela Paz"
                                    priority
                                    quality={100}
                                />
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row bg-gray-900 justify-content-center">
                    <div className="flex gap-7 md:gap-8 my-6">
                        <Link
                            href="https://www.facebook.com/fundomanamano"
                            legacyBehavior
                        >
                            <a target="_blank">
                                <i
                                    className="text-white pi pi-facebook hover:text-gray-500"
                                    style={{ fontSize: "1.8em" }}
                                />
                            </a>
                        </Link>
                        <Link
                            href="https://www.instagram.com/fundomanamano/"
                            legacyBehavior
                        >
                            <a target="_blank">
                                <i
                                    className="text-white pi pi-instagram hover:text-gray-500"
                                    style={{ fontSize: "1.8em" }}
                                />
                            </a>
                        </Link>
                        <Link
                            href="https://www.youtube.com/@manamano8916"
                            legacyBehavior
                        >
                            <a target="_blank">
                                <i
                                    className="text-white pi pi-youtube hover:text-gray-500"
                                    style={{ fontSize: "1.8em" }}
                                />
                            </a>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/fundomanamano/"
                            legacyBehavior
                        >
                            <a target="_blank">
                                <i
                                    className="text-white pi pi-linkedin hover:text-gray-500"
                                    style={{ fontSize: "1.8em" }}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                
                <div className="flex flex-row bg-gray-900 text-center ">
                    <div className="flex flex-column xl:flex-row justify-content-evenly align-items-center col-12 mb-5 line-height-4">
                        <p className="text-xl text-white">
                            Rua das Palmeiras, 65 - Botafogo, Rio de Janeiro, RJ
                            - Brasil
                        </p>
                        <p className="text-xl text-white">CEP: 22270-070</p>
                        <p className="text-xl text-white">
                            Contato: +55 (21) 22869988 / 30821632
                        </p>
                        <p className="text-xl text-white">
                            Email: manamano@manamano.org.br
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
