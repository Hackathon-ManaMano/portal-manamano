import { useState } from "react";
import Head from "next/head";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";
import { useRouter } from "next/router";

export default function Login() {
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login, senha);
  };

  return (
    <>
      <Head>
        <title>ManaMano login</title>
        <link rel="icon" href="/icon-manamano.png" />
      </Head>

      <LayoutLoginRegister
        title="Conecte-se ao portal"
        subtitle="Entre na plataforma para acessar materiais de aula e criar conexões"
      >
        <form
          id="login"
          className="flex-column p-fluid grid p-4"
          onSubmit={handleSubmit}
        >
          <div className="field p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-envelope"></i>
            </span>
            <span className="p-float-label">
              <InputText
                id="email"
                value={login}
                type="email"
                required
                name="email"
                onChange={(e) => setLogin(e.target.value)}
              />
              <label htmlFor="email">E-mail</label>
            </span>
          </div>

          <div className="field mt-4 p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <span className="p-float-label">
              <Password
                inputId="password"
                value={senha}
                required
                name="password"
                onChange={(e) => setSenha(e.target.value)}
                feedback={false}
                toggleMask
              />
              <label htmlFor="password">Senha</label>
            </span>
          </div>
          <div className="field">
            <Button type="submit" label="ENTRAR" />
          </div>
        </form>
        <p className="flex justify-content-center gap-2">
          Não possui conta? <a href="/register">Cadastre-se</a>
        </p>
      </LayoutLoginRegister>
    </>
  );
}
