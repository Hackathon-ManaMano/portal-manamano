// React & Next
import Head from "next/head";
import { ChangeEvent, MouseEvent, ReactElement, useRef, useState } from "react";
// Primrereact
import { Toast } from "primereact/toast";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";
import { confirmPopup, ConfirmPopup } from "primereact/confirmpopup";
// Utis
import {
  dateBodyTemplate,
  paginatorTemplate,
} from "../../../components/Templates/templates";
import { showMessage } from "../../../utils/utils";
// Models
import { Empreendedora } from "../../../models/empreendedora_models";

export default function ValidateRegistration() {
  // Ref
  const toast = useRef(null);

  const initialFilters = {
    global: { value: "", matchMode: FilterMatchMode.CONTAINS },
  };
  const [filters, setFilters] = useState(initialFilters);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const entrepreneurs: Empreendedora[] = [
    {
      nome: "Ellen Almeida",
      data_cadastro: new Date("10-10-2022"),
      email: "ellenas@dcc.ufrj.br",
      telefone: "(21)99999-9999",
      cadastro_aprovado: false,
    },
    {
      nome: "Kevin Sena",
      data_cadastro: new Date("01-10-2022"),
      email: "kevinsa@dcc.ufrj.br",
      telefone: "(21)88888-8888",
      cadastro_aprovado: false,
    },
    {
      nome: "Vitoria Serafim",
      data_cadastro: new Date(),
      email: "vitoriass@dcc.ufrj.br",
      telefone: "(21)44444-4444",
      cadastro_aprovado: false,
    },
    {
      nome: "Riquelme Gomes",
      data_cadastro: new Date(),
      email: "riquelmefgomes@gmail.com",
      telefone: "(21)7777-7777",
      cadastro_aprovado: false,
    },
    {
      nome: "Jhayson Jales",
      data_cadastro: new Date(),
      email: "jhaysonbj@dcc.ufrj.br",
      telefone: "(21)66666-6666",
      cadastro_aprovado: false,
    },
  ];

  const onGlobalFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const showToast = (action: string) => {
    let message = "Usuário aprovado com sucesso";
    let severity = "Aprovado";
    if (action == "reprovar") {
      message = "Usuário reprovado com sucesso";
      severity = "Reprovado";
    }
    showMessage("info", severity, message, toast);
  };

  const confirm = (
    event: MouseEvent<HTMLButtonElement>,
    action: string,
    rowData: Empreendedora
  ) => {
    confirmPopup({
      target: event.currentTarget,
      message: `Tem certeza que quer ${action} o cadastro de ${rowData.nome}?`,
      icon: "pi pi-exclamation-triangle",
      acceptLabel: `${action}`,
      rejectLabel: "Cancelar",
      acceptClassName:
        action == "aprovar" ? "p-button-primary" : "p-button-danger",
      accept: () => showToast(action),
      reject: () => {},
    });
  };

  const optionsTemplate = (rowData: Empreendedora): ReactElement => {
    return (
      <div className="flex justify-content-around gap-2 align-items-center">
        <Button
          className="p-button-outlined p-button-rounded p-button-sm p-button-primary"
          aria-label="check"
          icon="pi pi-check"
          tooltip="Aprovar cadastro"
          tooltipOptions={{ position: "left" }}
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            confirm(event, "aprovar", rowData)
          }
        />
        <Button
          className="p-button-outlined p-button-rounded p-button-sm p-button-danger"
          aria-label="trash"
          icon="pi pi-trash"
          tooltip="Reprovar cadastro"
          tooltipOptions={{ position: "left" }}
          onClick={(event: MouseEvent<HTMLButtonElement>) =>
            confirm(event, "reprovar", rowData)
          }
        />
      </div>
    );
  };

  const tableHeader = (
    <div className="flex flex-column sm:flex-row gap-2 justify-content-between align-items-center">
      Cadastros pendentes
      <span className="p-input-icon-right">
        <i className="pi pi-search" />
        <InputText
          type="search"
          className="p-inputtext-sm"
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
          placeholder="Buscar"
        />
      </span>
    </div>
  );

  return (
    <>
      <Head>
        <title>Avaliar cadastros</title>
      </Head>
      <DataTable
        value={entrepreneurs}
        rows={10}
        removableSort
        showGridlines
        className="p-datatable m-5"
        header={tableHeader}
        rowsPerPageOptions={[10, 15, 25]}
        responsiveLayout="stack"
        breakpoint="760px"
        paginator
        filters={filters}
        emptyMessage="Sem cadastros pendentes"
        paginatorTemplate={paginatorTemplate}
        globalFilterFields={["nome", "data_cadastro", "email", "telefone"]}
      >
        <Column
          align="center"
          alignHeader="center"
          field="nome"
          header="Nome"
          sortable
        />
        <Column
          align="center"
          alignHeader="center"
          field="data_cadastro"
          header="Data de cadastro"
          sortable
          body={(rowData: Empreendedora) =>
            dateBodyTemplate(rowData, "data_cadastro", true)
          }
        />
        <Column
          align="center"
          alignHeader="center"
          field="email"
          header="E-mail"
          sortable
        />
        <Column
          align="center"
          alignHeader="center"
          field="telefone"
          header="Telefone"
          sortable
        />
        <Column
          align="center"
          alignHeader="center"
          header="Opções"
          body={(rowData: Empreendedora) => optionsTemplate(rowData)}
          style={{ width: "10em" }}
        />
      </DataTable>
      <ConfirmPopup />
      <Toast ref={toast} position="bottom-right" />
    </>
  );
}
