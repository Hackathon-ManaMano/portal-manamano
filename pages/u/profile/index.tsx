import React, { ReactElement, useState } from "react";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import Head from "next/head";
import { Avatar } from "primereact/avatar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import LayoutLogged from "../../../components/LayoutLogged";
import { Button } from 'primereact/button';

export default function Profile() {
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [descricao, setDescricao] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [negocio, setEmpresa] = useState("");
  const [descricaoNegocio, setDescricaoNegocio] = useState("");
  const [setor, setSetor] = useState("");





  



  return (
    <>
      <Head>
        <title>Perfil</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>

      <div className="flex gap-4 align-items-center p-3 flex-wrap">
        <Avatar
          style={{ height: "180px", width: "180px" }}
          image="/background-manamano.jpg"
          size="xlarge"
          shape="circle"
          
        />
        <div>
          
          <h1 className="ml-3">Jhayson Jales</h1>
          
          <div className="ml-3 flex gap-2">

              <Button  className="Instagram field col-6" aria-label="Instagram">
                    <i className="pi pi-instagram px-2"></i>
                    <span className="px-3">Instagram</span>
                </Button>

                <Button className="facebook field col-6" aria-label="Facebook">
                    <i className="pi pi-facebook px-2"></i>
                    <span className="px-3">Facebook</span>
                </Button>
              </div>

        </div>

      </div>

      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
        className="p-3"
      >
        <TabPanel header="Perfil">




          <div className="grid p-fluid mt-3 ">
            <div className="field col-12 md:col-4">
              <span className="p-float-label ">
                <InputText
                  id="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="Nome">Nome</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  id="Apelido"
                  value={apelido}
                  onChange={(e) => setApelido(e.target.value)}
                />
                <label htmlFor="Apelido">Apelido</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputMask
                  mask="(99)99999-9999"
                  id="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
                <label htmlFor="Telefone">Telefone</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputTextarea
                  rows={5}
                  cols={30}
                  id="Sobre mim"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
                <label htmlFor="Sobre mim">Sobre mim...</label>
              </span>
            </div>
          </div>
          <Button label="Salvar" icon="pi pi-check" />
        </TabPanel>
        <TabPanel header="Negócio">
          <div className="grid p-fluid mt-3">
            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  id="Negocio"
                  value={negocio}
                  onChange={(e) => setNome(e.target.value)}
                />
                <label htmlFor="Negocio">Negócio</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputText
                  id="Setor"
                  value={setor}
                  onChange={(e) => setSetor(e.target.value)}
                />
                <label htmlFor="Setor">Setore(s)</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputMask
                  mask="(99)99999-9999"
                  id="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
                <label htmlFor="Telefone">Telefone</label>
              </span>
            </div>

            <div className="field col-12 md:col-4">
              <span className="p-float-label">
                <InputTextarea
                  rows={5}
                  cols={30}
                  id="Sobre o negócio"
                  value={descricaoNegocio}
                  onChange={(e) => setDescricaoNegocio(e.target.value)}
                />
                <label htmlFor="Sobre o negócio">Sobre o negócio...</label>
              </span>
            </div>
            
          </div>

            <div className="mt-5">  
              <Button label="Salvar" icon="pi pi-check" />
            </div>
            
        </TabPanel>
      </TabView>
    </>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <LayoutLogged>{page}</LayoutLogged>
    </>
  );
};
