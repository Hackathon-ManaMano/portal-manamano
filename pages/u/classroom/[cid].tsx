// React & Next
import Head from "next/head";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
// Primereact
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Dropdown, DropdownChangeParams } from "primereact/dropdown";
// Models
import { Class } from "../../../models/class_models";
// Utils
import { formatViewDate } from "../../../utils/utils";
// Service
import { ClassService } from "../../../services/class_service";

interface ClassProps {
    query: { cid: number };
    currentClass: Class;
}

export default function CurrentClass({ currentClass }: ClassProps) {
    const [selectedCategory, setSelectedCategory] = useState({
        id_categoria: 0,
        descricao: "Categorias",
    });

    const posts = [
        {
            id_postagem_material: 1,
            titulo: "Marketing Digital",
            data_inclusao: new Date(),
        },
        {
            id_postagem_material: 2,
            titulo: "Gestão de custos",
            data_inclusao: new Date(),
        },
        {
            id_postagem_material: 3,
            titulo: "Ampliando seu negócio",
            data_inclusao: new Date(),
        },
        {
            id_postagem_material: 4,
            titulo: "Como inovar no seu empreendimento",
            data_inclusao: new Date(),
        },
    ];

    const categories = [
        {
            id_categoria: 1,
            descricao: "Semana 1",
        },
        {
            id_categoria: 2,
            descricao: "Semana 2",
        },
        {
            id_categoria: 3,
            descricao: "Semana 3",
        },
        {
            id_categoria: 4,
            descricao: "Semana 4",
        },
        {
            id_categoria: 5,
            descricao: "Semana 5",
        },
        {
            id_categoria: 6,
            descricao: "Semana 6",
        },
    ];
    categories.unshift({ id_categoria: 0, descricao: "Categorias" });

    const categoryTemplate = (categories: any) => {
        return (
            <Card
                className={`flex align-items-center col-12 mb-3 cursor-pointer
        shadow-none hover:shadow-1 hover:surface-300 border-none`}
                style={{ height: "50px" }}
            >
                {categories.descricao}
            </Card>
        );
    };
    const itemTemplate = (posts: any) => {
        return (
            <Card
                className="flex align-items-center col-12 my-3 cursor-pointer shadow-none hover:shadow-1 hover:surface-300 border-1"
                style={{ height: "75px" }}
            >
                <div className="flex align-items-center gap-3">
                    <Avatar
                        icon="pi pi-bookmark"
                        shape="circle"
                        size="large"
                        className="mr-2 mb-2 text-white surface-700"
                    />
                    <div className="flex flex-column gap-2">
                        <p className="text-xl p-1">{posts.titulo}</p>
                        {/* TODO: Mudar formação para dia e mês abreviado */}
                        <p>{formatViewDate(posts.data_inclusao)}</p>
                    </div>
                </div>
            </Card>
        );
    };

    return (
        <>
            <Head>
                <title>{currentClass.descricao}</title>
            </Head>
            <div className="flex flex-column py-4 px-2 sm:px-8 gap-4">
                <header
                    className="flex align-items-end justify-content-between p-4 border-round-md"
                    style={{
                        backgroundColor: `var(--indigo-900)`,
                        height: "200px",
                    }}
                >
                    <p className="text-3xl sm:text-5xl text-white">
                        {currentClass.descricao}
                    </p>
                    <Button
                        className="p-button-outlined text-white new-user"
                        icon="pi pi-user-plus"
                        label="Adicionar aluna"
                    />
                </header>
                <main className="flex flex-column gap-5">
                    <article className="flex gap-4">
                        <aside className="hidden md:inline-flex">
                            <DataView
                                value={categories}
                                dataKey="id_categoria"
                                itemTemplate={categoryTemplate}
                                style={{ width: "150px" }}
                            />
                        </aside>
                        <section className="flex flex-column gap-5">
                            <div className="flex justify-content-between">
                                <Button
                                    className="p-button-outlined p-button-sm md:p-button-lg"
                                    icon="pi pi-plus"
                                    label="Criar nova postagem"
                                />
                                <Dropdown
                                    options={categories}
                                    optionLabel="descricao"
                                    placeholder="Selecione uma categoria"
                                    value={selectedCategory}
                                    className="inline-flex md:hidden"
                                    style={{ height: "43px" }}
                                    onChange={(e: DropdownChangeParams) =>
                                        setSelectedCategory(e.value)
                                    }
                                />
                            </div>
                            <DataView
                                value={posts}
                                emptyMessage="Não há postagens para esta turma."
                                dataKey="id_postagem_material"
                                itemTemplate={itemTemplate}
                            />
                        </section>
                    </article>
                </main>
            </div>
            <style jsx global>
                {`
                    .new-user:focus {
                        box-shadow: 0 0 0px 2px white;
                    }
                `}
            </style>
        </>
    );
}
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    try {
        const classService = new ClassService();
        const classes = await classService.getClasses(Number(query.cid));
        const currentClass = classes?.shift();
        return {
            props: { query, currentClass }, // will be passed to the page component as props
        };
    } catch (error) {
        return {
            props: {}, // will be passed to the page component as props
        };
    }
}
