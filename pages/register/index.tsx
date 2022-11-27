// React e Next
import Head from "next/head";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

// Supabase
import { supabase } from "../../services/supabse";

// Primereact
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";

// Service
import { RegisterService } from "../../services/register_service";

// Models
import { Register, newRegister } from "../../models/register_model";
// Layout
import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";

export default function RegisterScreen() {
  // ref(s)
  const toast = useRef(null);

  // Service(s)
  const registerService = new RegisterService();

  // State(s)
  const [register, setRegister] = useState<Register>(newRegister);

  const handleChangeRegister = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister((prev: Register) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(register);

    const response = await registerService.createUser(register);
    console.log(response);
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
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={register.name}
                  onChange={handleChangeRegister}
                />
                <label htmlFor="name">
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
                  value={register.email}
                  onChange={handleChangeRegister}
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
                  id="password"
                  name="password"
                  title="password"
                  toggleMask
                  required
                  inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                  feedback={false}
                  value={register.password}
                  onChange={handleChangeRegister}
                />
                <label htmlFor="password">
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
                  id="confirm_password"
                  name="confirm_password"
                  title="confirm_password"
                  toggleMask
                  required
                  feedback={false}
                  inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
                  onChange={handleChangeRegister}
                />
                <label htmlFor="confirm_password">
                  Confirmar senha<span style={{ color: "red" }}>*</span>
                </label>
              </span>
            </div>
            <div className="field col">
              <Button
                className="p-button-primary"
                label="Cadastre-se"
                icon="pi pi-check"
                iconPos="right"
                type="submit"
              />
            </div>
          </div>
        </form>
      </LayoutLoginRegister>
      <Toast ref={toast}></Toast>
    </>
  );
}
