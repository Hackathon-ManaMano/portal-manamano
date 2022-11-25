// React e Next
import Head from "next/head";
import { useRef, useState } from "react";

// Supabase
import { supabase } from "../../services/SupaBase";

// Primereact
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

// Models
import { newUser, User } from "../../models/user_model";
import { Profile, newProfile } from "../../models/profile_model";

// Layout
import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";

export default function Register(props: any) {
  // ref(s)
  const toast = useRef(null);

  // State(s)
  const [user, setUser] = useState<User>(newUser);
  const [profile, setProfile] = useState<Profile>(newProfile);

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
    console.log(user);
    return;
  };

  return (
    <>
      <Head>
        <title>Cadastre-se</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>
      <LayoutLoginRegister title="Faça seu cadastro">
        <form onSubmit={handleSubmit}>
          <div className="p-fluid grid mt-2">
            <div className="field col-12 p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id="nome"
                  type="text"
                  name="nome"
                  required
                  value={profile.nome}
                  onChange={handleChangeProfile}
                />
                <label htmlFor="nome">
                  Nome<span style={{ color: "red" }}>*</span>
                </label>
              </span>
            </div>
            <div className="field col-12 p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <span className="p-float-label">
                <InputText
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={profile.email}
                  onChange={handleChangeProfile}
                />
                <label htmlFor="email">
                  Email<span style={{ color: "red" }}>*</span>
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
                  title="senha"
                  toggleMask
                  required
                  feedback={false}
                  value={user.senha}
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
                  title="confirma_senha"
                  toggleMask
                  required
                  feedback={false}
                  onChange={handleChangeUser}
                />
                <label htmlFor="senha">
                  Confirmar senha<span style={{ color: "red" }}>*</span>
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
        </form>
      </LayoutLoginRegister>
      <Toast ref={toast}></Toast>
    </>
  );
}
