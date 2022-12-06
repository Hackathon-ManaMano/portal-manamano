// React & Next
import Head from "next/head";
import { FormEvent, useState } from "react";
// Primereact
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
// Utils
import C from "../../../utils/constants";
// Templates
import { paginatorTemplate } from "../../../components/Templates/templates";

export default function ClassRoom() {
    const [endDate, setEndDate] = useState<Date>();
    const [startDate, setStartDate] = useState<Date>();
    const [description, setDescription] = useState<string>("");
    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

    const handleCreateClassroomSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log("tentou criar turma");
    };

    const openDialog = () => {
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
        setDescription("");
        setStartDate(undefined);
        setEndDate(undefined);
    };

    const renderFooter = () => {
        return (
            <div>
                <Button
                    label="Cancelar"
                    icon="pi pi-times"
                    onClick={() => closeDialog()}
                    className="p-button-text p-button-danger"
                />
                <Button
                    type="submit"
                    label="Confirmar"
                    icon="pi pi-check"
                    onClick={() => closeDialog()}
                    autoFocus
                />
            </div>
        );
    };

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
        <div className="flex justify-content-between align-items-center">
            <p className="text-xl">Turmas</p>
            <Button
                label="Adicionar turma"
                icon="pi pi-plus"
                className="p-button-text p-button-sm"
                onClick={() => openDialog()}
            />
        </div>
    );

    const itemTemplate = (data: any) => {
        return (
            <Card
                className="card col-12 md:col-3 m-5 p-4 hover:shadow-5 cursor-pointer"
                title={data.legenda}
                style={{
                    width: "250px",
                    color: "white",
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
                rows={10}
                rowsPerPageOptions={[5, 10, 15]}
                paginatorTemplate={paginatorTemplate}
            />
            <Dialog
                header="Criar nova turma"
                className="w-10 md:w-6"
                visible={isDialogVisible}
                blockScroll
                draggable={false}
                onHide={() => closeDialog()}
                footer={renderFooter()}
            >
                <form
                    id="create-class"
                    className="grid flex-column"
                    onSubmit={handleCreateClassroomSubmit}
                >
                    <div className="field p-inputgroup mt-6">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-pencil"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                                id="description"
                                value={description}
                                required
                                name="description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label htmlFor="description">Nome da turma</label>
                        </span>
                    </div>
                    <div className="field p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-calendar"></i>
                        </span>
                        <span className="p-float-label">
                            <Calendar
                                dateFormat="dd/mm/yy"
                                value={startDate}
                                inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                                onChange={(e) => {
                                    if (e.value) setStartDate(e.value as Date);
                                }}
                            />
                            <label htmlFor="startDate">Data de início</label>
                        </span>
                    </div>
                    <div className="field p-inputgroup mt-4">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-calendar-times"></i>
                        </span>
                        <span className="p-float-label">
                            <Calendar
                                dateFormat="dd/mm/yy"
                                value={endDate}
                                inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                                onChange={(e) => {
                                    if (e.value) setEndDate(e.value as Date);
                                }}
                            />
                            <label htmlFor="endDate">Data de fim</label>
                        </span>
                    </div>
                </form>
            </Dialog>
        </>
    );
}
