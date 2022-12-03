import React, { ReactElement, useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import Head from "next/head";
import { Avatar } from "primereact/avatar";
import { InputTextarea } from "primereact/inputtextarea";
import { InputMask } from "primereact/inputmask";
import LayoutLogged from "../../../components/LayoutLogged";
import { Button } from "primereact/button";
import { supabase } from "../../../services/supabase";
import { Toast } from "primereact/toast";

export default function Profile() {
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [descricao, setDescricao] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [negocio, setEmpresa] = useState("");
  const [descricaoNegocio, setDescricaoNegocio] = useState("");
  const [setor, setSetor] = useState("");
  const [nameUser, setNameUser] = useState("");

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
        //console.log(response)
        if (response.data) setNameUser(response.data.shift()?.nome);
      }
    };

    getNameUser();
  }, []);

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
          <h1 className="ml-3">{nameUser}</h1>

          <div className="ml-3 flex gap-2">
            <Button className="Instagram field col-6" aria-label="Instagram">
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
          <form>
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
            <Button label="Salvar" type="submit" icon="pi pi-check" />
          </form>
        </TabPanel>
        <TabPanel header="Negócio">
          <form>
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
              <div className="field col-12 md:col-4">
                <span className="p-float-label">
                  <InputText
                    id="Facebook"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                  <label htmlFor="Facebook">Link do Facebook</label>
                </span>
              </div>

              <div className="field col-12 md:col-4">
                <span className="p-float-label">
                  <InputText
                    id="Instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                  />
                  <label htmlFor="Instagram">Link do Instagram</label>
                </span>
              </div>
            </div>

            <div className="mt-5">
              <Button label="Salvar" icon="pi pi-check" />
            </div>
          </form>
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
