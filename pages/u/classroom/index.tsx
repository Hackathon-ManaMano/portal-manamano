import Head from "next/head";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { FormEvent, useState } from "react";
import { paginatorTemplate } from "../../../components/Templates/templates";

// Utils
import C from "../../../utils/constants";

export default function ClassRoom() {

    const    [description, setDescription]=useState<string>("");
  const    [startDate, setStartDate]=useState<Date>();
  const    [endDate, setEndDate]=useState<Date>();
  
  const [displayBasic, setDispayBasic]= useState(false);

  const handleCreateClassroomSubmit = (event: FormEvent<HTMLFormElement> )=> {
      console.log("tentou criar turma");
  };
  const openDialog = ()=> {
      setDispayBasic(true);
  }
  const closeDialog = () => {
      setDispayBasic(false);
  }
  const renderFooter = () => {
      return (
          <div>
              <Button label="Cancelar" icon="pi pi-times" onClick={() => closeDialog()} className="p-button-text" />
              <Button label="Confirmar" icon="pi pi-check" onClick={() => closeDialog()} autoFocus />
          </div>
      );
  }
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
            onClick={() => openDialog()}
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
            <Dialog header="Criar nova turma" visible={displayBasic} breakpoints={{'960px': '75vw'}} 
                  style={{width: '50vw'}}onHide={() => closeDialog()} footer={renderFooter()}>
          <form 
          id="create-classroom"
          className="grid flex-column"
          onSubmit={handleCreateClassroomSubmit}>
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
                      <Calendar dateFormat="dd/mm/yy" value={startDate} onChange={(e) => {
                        if (e.value)
                          setStartDate(e.value as Date)}}/>
                      <label htmlFor="startDate">Data de início</label>
                  </span>
              </div>
              <div className="field p-inputgroup mt-4">
                  <span className="p-inputgroup-addon">
                  <i className="pi pi-calendar-times"></i>
                  </span>
                  <span className="p-float-label">
                  <Calendar dateFormat="dd/mm/yy" value={endDate} onChange={(e) => {
                        if (e.value)
                          setEndDate(e.value as Date)}}/>
                      <label htmlFor="endDate">Data de fim</label>
                  </span>
              </div>    
          </form>
      </Dialog>
            {/* <style jsx>{`
                .card:hover {
                    box
                }
            `}</style> */}
        </>
    );
}
