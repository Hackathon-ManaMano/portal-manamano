import Head from "next/head";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { Divider } from "primereact/divider";
import { paginatorTemplate } from "../../../components/Templates/templates";

// Utils
import C from "../../../utils/constants";

export default function ClassRoom() {
    const classes = [
        {
            id_turma: 1,
            legenda: "Turma 1",
            descricao: "Descrição da turma 1",
        },
        {
            id_turma: 2,
            legenda: "Turma 2",
            descricao: "Descrição da turma 2",
        },
        {
            id_turma: 3,
            legenda: "Turma 3",
            descricao: "Descrição da turma 3",
        },
        {
            id_turma: 4,
            legenda: "Turma 4",
            descricao: "Descrição da turma 4",
        },
        {
            id_turma: 5,
            legenda: "Turma 5",
            descricao: "Descrição da turma 5",
        },
        {
            id_turma: 6,
            legenda: "Turma 6",
            descricao: "Descrição da turma 6",
        },
        {
            id_turma: 7,
            legenda: "Turma 7",
            descricao: "Descrição da turma 7",
        },
    ];

    const headerDataView = (
        <Button
            label="Adicionar turma"
            icon="pi pi-plus"
            className="p-button-text p-button-xl"
        />
    );

    const itemTemplate = (data: any) => {
        return (
            <Card
                className="card col-12 md:col-3 m-5 p-4 hover:shadow-5 cursor-pointer"
                title={data.legenda}
                style={{
                    width: "250px",
                    backgroundColor: `${
                        C.COLORS[data.id_turma % C.COLORS.length]
                    }`,
                }}
            >
                <span>{data.descricao}</span>
            </Card>
        );
    };

    return (
        <>
            <Head>
                <title>Turmas</title>
            </Head>
            <DataView
                value={classes}
                className="p-2"
                layout="grid"
                header={headerDataView}
                itemTemplate={itemTemplate}
                paginator
                rows={9}
                paginatorTemplate={paginatorTemplate}
            />
            {/* <style jsx>{`
                .card:hover {
                    box
                }
            `}</style> */}
        </>
    );
}
