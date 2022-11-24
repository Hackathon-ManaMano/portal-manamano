import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { MultiSelect } from "primereact/multiselect";
import { FileUpload } from "primereact/fileupload";
import { TabView, TabPanel, TabViewTabChangeParams } from "primereact/tabview";

import { newUser, User } from "../../models/user_model";
import { Profile, newProfile } from "../../models/profile_model";
import Link from "next/link";
export default function Register(props: any) {
  // refs
  const toast = useRef(null);

  const [user, setUser] = useState<User>(newUser);
  const [profile, setProfile] = useState<Profile>(newProfile);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleChangeProfile = (e: any) => {
    setProfile((prev: Profile) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangeUser = (e: any) => {
    setUser((prev: User) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(profile);
    return;
  };

  const passwordHeader = <h5>Escolha a senha</h5>;

  const passwordFooter = (
    <>
      <Divider />
      <p className="mt-2">Sugestões</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>Pelo menos uma letra minúscula</li>
        <li>Pelo menos uma letra maiúscula</li>
        <li>Pelo menos um dígito numérico</li>
        <li>Pelo menos 8 caracteres</li>
      </ul>
    </>
  );

  const tabCadastro = (
    <TabPanel header="Cadastro">
      <div className="p-fluid grid mt-2">
        <div className="field col-12 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <span className="p-float-label">
            <InputText
              id="username"
              name="username"
              value={user.username}
              onChange={handleChangeUser}
            />
            <label htmlFor="username">
              Nome de usuário<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <div className="field col-12 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock"></i>
          </span>
          <span className="p-float-label">
            <Password
              id="senha"
              name="senha"
              toggleMask
              promptLabel="Digite a senha"
              weakLabel="Senha fraca"
              mediumLabel="Senha média"
              strongLabel="Senha forte"
              value={user.senha}
              header={passwordHeader}
              footer={passwordFooter}
              onChange={handleChangeUser}
            />
            <label htmlFor="senha">
              Senha<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <div className="field col-12 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock"></i>
          </span>
          <span className="p-float-label">
            <Password
              id="confirma_senha"
              name="confirma_senha"
              toggleMask
              promptLabel="Digite a senha"
              weakLabel="Senha fraca"
              mediumLabel="Senha média"
              strongLabel="Senha forte"
              value={user.confirma_senha}
              header={passwordHeader}
              footer={passwordFooter}
              onChange={handleChangeUser}
            />
            <label htmlFor="senha">
              Confirmar senha<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <Button
          className="p-button-outlined"
          label="Próximo"
          icon="pi pi-chevron-right"
          iconPos="right"
          onClick={() => setActiveIndex((prev: number) => prev + 1)}
        />
      </div>
    </TabPanel>
  );

  const tabPerfil = (
    <TabPanel header="Perfil">
      <div className="p-fluid grid mt-2">
        <div className="field col-12 md:col-6 p-inputgroup">
          <FileUpload
            mode="basic"
            name="demo"
            accept="image/*"
            chooseOptions={{
              label: "Foto de perfil",
              icon: "pi pi-fw pi-plus",
              className: "p-button-outlined",
            }}
            maxFileSize={1000000}
            invalidFileSizeMessageDetail="Tamanho da imagem excedido"
          />
        </div>
        <div className="field col-12 md:col-6 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-user"></i>
          </span>
          <span className="p-float-label">
            <InputText
              id="nome"
              type="text"
              name="nome"
              value={profile.nome}
              onChange={handleChangeProfile}
            />
            <label htmlFor="nome">
              Nome<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <div className="field col-12 md:col-6 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-envelope"></i>
          </span>
          <span className="p-float-label">
            <InputText
              id="email"
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChangeProfile}
            />
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <div className="field col-12 md:col-6 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-phone"></i>
          </span>
          <span className="p-float-label">
            <InputMask
              id="telefone"
              name="telefone"
              mask="(99)99999-9999"
              unmask
              value={profile.telefone}
              onChange={handleChangeProfile}
            />
            <label htmlFor="telefone">
              Telefone<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <div className="field col-12 md:col-6 p-inputgroup">
          <span className="p-inputgroup-addon">
            <i className="pi pi-th-large"></i>
          </span>
          <span className="p-float-label">
            <MultiSelect
              options={[
                "Culinária",
                "Costura",
                "Vendas",
                "Artesanato",
                "Manicure e pedicure",
              ]}
            />
            <label htmlFor="data_nascimento">
              Segmentos de atuação<span style={{ color: "red" }}>*</span>
            </label>
          </span>
        </div>
        <Button
          className="p-button-primary"
          label="Cadastre-se"
          icon="pi pi-check"
          iconPos="right"
          type="submit"
        />
      </div>
    </TabPanel>
  );

  return (
    <div>
      <Head>
        <title>Cadastre-se</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
      <div className="flex justify-content-center align-items-center">
        <div className="p-card flex-column m-4 shadow-7" style={{ width: 700 }}>
          <div className="flex justify-content-center">
            <Link href="/">
              <Image
                src="/logo-completo-manamano.png"
                alt="logo"
                height={200}
                width={227}
              />
            </Link>
          </div>
          <form onSubmit={handleSubmit}>
            <TabView
              activeIndex={activeIndex}
              onTabChange={(e: TabViewTabChangeParams) =>
                setActiveIndex(e.index)
              }
              style={{ margin: 10 }}
            >
              {tabCadastro}
              {tabPerfil}
            </TabView>
          </form>
        </div>
      </div>
      <Toast ref={toast}></Toast>
    </div>
  );
}
