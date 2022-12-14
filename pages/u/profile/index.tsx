// React & Next
import Head from "next/head";
import React, { FormEvent, useEffect, useState } from "react";
// Primeract
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { MultiSelect } from "primereact/multiselect";
import { TabView, TabPanel } from "primereact/tabview";
import { InputTextarea } from "primereact/inputtextarea";
// Supabase
import { supabase } from "../../../services/supabase";
import Link from "next/link";

export default function Profile() {
    const [telefone, setTelefone] = useState("");
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [telefoneNegocio, setTelefoneNegocio] = useState("");
    const [negocio, setNegocio] = useState("");
    const [descricaoNegocio, setDescricaoNegocio] = useState("");
    const [nameUser, setNameUser] = useState("");
    const [selectedNegocio, setSelectedNegocio] = useState(null);

    const setores = [
        { name: "Artesanato" },
        { name: "Confeitaria" },
        { name: "Costura" },
        { name: "Culinária" },
        { name: "Depilação" },
        { name: "Designer" },
        { name: "Jardinagem" },
        { name: "Venda" },
    ];

    useEffect(() => {
        const getNameUser = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();

            if (session) {
                const response = await supabase
                    .from("empreendedora")
                    .select("nome")
                    .filter("id_empreendedora", "eq", session.user.id);
                if (response.data) setNameUser(response.data.shift()?.nome);
            }
        };

        getNameUser();
    }, []);

    const handleFormSubmit = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Perfil</title>
            </Head>
            <div className="flex gap-4 align-items-center m-4 flex-wrap justify-content-center md:justify-content-start">
                <Avatar
                    style={{ height: "180px", width: "180px" }}
                    size="xlarge"
                    shape="circle"
                >
                    <span style={{ fontSize: "5rem" }}>
                        {nameUser.charAt(0)}
                    </span>
                </Avatar>

                <div>
                    <h1 className="ml-3">{nameUser}</h1>

                    <div className="ml-3 flex gap-2">
                        <Link href="https://instagram.com" legacyBehavior>
                            <a target="blank" className="no-underline">
                                <Button
                                    label="Instagram"
                                    icon="pi pi-instagram"
                                    aria-label="Instagram"
                                />
                            </a>
                        </Link>
                        <Link href="https://pt-br.facebook.com/" legacyBehavior>
                            <a target="_blank" className="no-underline">
                                <Button
                                    label="Facebook"
                                    icon="pi pi-facebook"
                                    aria-label="Facebook"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <TabView
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
                className="m-3"
            >
                <TabPanel header="Perfil">
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid p-fluid mt-3 ">
                            <div className="field col-12 md:col-6">
                                <span className="p-float-label ">
                                    <InputText
                                        id="Nome"
                                        value={nome}
                                        onChange={(e) =>
                                            setNome(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Nome">Nome</label>
                                </span>
                            </div>

                            <div className="field col-12 md:col-6">
                                <span className="p-float-label">
                                    <InputMask
                                        mask="(99)99999-9999"
                                        id="Telefone"
                                        value={telefone}
                                        onChange={(e) =>
                                            setTelefone(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Telefone">Telefone</label>
                                </span>
                            </div>
                            <div className="field col-12">
                                <span className="p-float-label">
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        id="Sobre mim"
                                        autoResize
                                        value={descricao}
                                        onChange={(e) =>
                                            setDescricao(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Sobre mim">
                                        Sobre mim...
                                    </label>
                                </span>
                            </div>
                        </div>
                        <Button
                            label="Salvar"
                            type="submit"
                            icon="pi pi-check"
                        />
                    </form>
                </TabPanel>
                <TabPanel header="Negócio">
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid p-fluid mt-3">
                            <div className="field col-12 md:col-4">
                                <span className="p-float-label">
                                    <InputText
                                        id="Negocio"
                                        value={negocio}
                                        onChange={(e) =>
                                            setNegocio(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Negocio">Negócio</label>
                                </span>
                            </div>

                            <div className="field col-12 md:col-4">
                                <span className="p-float-label">
                                    <MultiSelect
                                        value={selectedNegocio}
                                        options={setores}
                                        filter
                                        filterBy="name"
                                        onChange={(e) =>
                                            setSelectedNegocio(e.value)
                                        }
                                        optionLabel="name"
                                        placeholder="Setore(s)"
                                        display="chip"
                                    />
                                    <label htmlFor="Setor">Setore(s)</label>
                                </span>
                            </div>

                            <div className="field col-12 md:col-4">
                                <span className="p-float-label">
                                    <InputMask
                                        mask="(99)99999-9999"
                                        id="Telefone"
                                        value={telefoneNegocio}
                                        onChange={(e) =>
                                            setTelefoneNegocio(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Telefone">Telefone</label>
                                </span>
                            </div>

                            <div className="field col-12 md:col-6">
                                <span className="p-float-label">
                                    <InputTextarea
                                        rows={5}
                                        cols={30}
                                        id="Sobre o negócio"
                                        value={descricaoNegocio}
                                        autoResize
                                        onChange={(e) =>
                                            setDescricaoNegocio(e.target.value)
                                        }
                                    />
                                    <label htmlFor="Sobre o negócio">
                                        Sobre o negócio...
                                    </label>
                                </span>
                            </div>
                            <div className="grid col-12 md:col-6">
                                <div className="field col-12">
                                    <span className="p-float-label">
                                        <InputText
                                            id="Facebook"
                                            value={facebook}
                                            onChange={(e) =>
                                                setFacebook(e.target.value)
                                            }
                                        />
                                        <label htmlFor="Facebook">
                                            Link do Facebook
                                        </label>
                                    </span>
                                </div>

                                <div className="field col-12">
                                    <span className="p-float-label">
                                        <InputText
                                            id="Instagram"
                                            value={instagram}
                                            onChange={(e) =>
                                                setInstagram(e.target.value)
                                            }
                                        />
                                        <label htmlFor="Instagram">
                                            Link do Instagram
                                        </label>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <Button label="Salvar" icon="pi pi-check" />
                        </div>
                    </form>
                </TabPanel>
            </TabView>
        </>
    );
}