// React & Next
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
// Primereact
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataView } from "primereact/dataview";
import { InputText } from "primereact/inputtext";
import { Calendar, CalendarChangeParams } from "primereact/calendar";
// Models
import { Class, emptyClass } from "../../../models/class_models";
// Utils
import C from "../../../utils/constants";
import { formatViewDate, showMessage } from "../../../utils/utils";
// Templates
import { paginatorTemplate } from "../../../components/Templates/templates";
// Service
import { ClassService } from "../../../services/class_service";

export default function ClassRoom() {
    const toast = useRef(null);
    const router = useRouter();
    const classService = new ClassService();
    const [classes, setClasses] = useState<Class[]>([]);
    const [newClass, setNewClass] = useState<Class>(emptyClass);
    const [isDialogVisible, setIsDialogVisible] = useState<boolean>(false);

    useEffect(() => {
        updateClasses();
    }, []);

    const updateClasses = async () => {
        try {
            const classes = await classService.getClasses();
            setClasses(classes as Class[]);
        } catch (e: any) {}
    };

    const handleNewClassSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const error = await classService.createClass(newClass);
            if (error == null) {
                // Deu certo!
                updateClasses();
                showMessage(
                    C.SERVER_SUCCESS,
                    "Sucesso",
                    "Turma criada com sucesso.",
                    toast
                );
                closeDialog();
            }
        } catch (e: any) {}
    };

    const openDialog = () => {
        setIsDialogVisible(true);
    };

    const closeDialog = () => {
        setIsDialogVisible(false);
        setNewClass(emptyClass);
    };

    const dialogFooter = (
        <footer>
            <Button
                label="Cancelar"
                icon="pi pi-times"
                onClick={closeDialog}
                className="p-button-text p-button-danger"
            />
            <Button
                type="submit"
                form="create-class"
                label="Confirmar"
                icon="pi pi-check"
                autoFocus
            />
        </footer>
    );

    const headerDataView = (
        <div className="flex justify-content-between align-items-center">
            <p className="text-xl">Turmas</p>
            <Button
                label="Adicionar turma"
                icon="pi pi-plus"
                className="p-button-text p-button-sm"
                onClick={openDialog}
            />
        </div>
    );

    const itemTemplate = (data: Class) => {
        return (
            <Card
                className="card col-12 md:col-3 m-5 p-4 hover:shadow-5 cursor-pointer"
                title={data.descricao}
                style={{
                    width: "250px",
                    color: "white",
                    backgroundColor: `${
                        C.COLORS[data.id_turma % C.COLORS.length]
                    }`,
                }}
                onClick={() => router.push(`/u/classroom/${data.id_turma}`)}
            >
                <span>
                    {`Início: ${formatViewDate(
                        (data.data_inicio as Date).toString()
                    )}`}
                </span>
            </Card>
        );
    };

    return (
        <>
            <Head>
                <title>Turmas</title>
            </Head>
            <DataView
                value={classes.sort((a, b) => a.id_turma - b.id_turma)}
                layout="grid"
                header={headerDataView}
                itemTemplate={itemTemplate}
                paginator
                rows={10}
                rowsPerPageOptions={[5, 10, 15]}
                paginatorTemplate={paginatorTemplate}
                emptyMessage="Não há turmas cadastradas"
            />
            <Dialog
                header="Criar nova turma"
                className="w-10 md:w-6"
                visible={isDialogVisible}
                blockScroll
                draggable={false}
                onHide={() => closeDialog()}
                footer={dialogFooter}
            >
                <form
                    id="create-class"
                    className="grid flex-column"
                    onSubmit={handleNewClassSubmit}
                >
                    <div className="field p-inputgroup mt-6">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-pencil"></i>
                        </span>
                        <span className="p-float-label">
                            <InputText
                                id="description"
                                value={newClass.descricao}
                                required
                                name="description"
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    setNewClass({
                                        ...newClass,
                                        descricao: e.target.value,
                                    });
                                }}
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
                                value={newClass.data_inicio}
                                required
                                inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                                onChange={(e: CalendarChangeParams) => {
                                    if (e.value)
                                        setNewClass({
                                            ...newClass,
                                            data_inicio: e.value as Date,
                                        });
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
                                value={newClass.data_fim}
                                inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                                onChange={(e: CalendarChangeParams) => {
                                    if (e.value)
                                        setNewClass({
                                            ...newClass,
                                            data_fim: e.value as Date,
                                        });
                                }}
                            />
                            <label htmlFor="endDate">Data de fim</label>
                        </span>
                    </div>
                </form>
            </Dialog>
            <Toast ref={toast} position="bottom-right" />
        </>
    );
}
