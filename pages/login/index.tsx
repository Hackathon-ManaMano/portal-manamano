// React & Next
import Link from "next/link";
import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// Primereact
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
// Service
import { ManaManoService } from "../../services/manamano_service";
// Models
import { Login, newLogin } from "../../models/login_model";
// Layout
import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";
import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function LoginScreen() {
  // Service(s)
  const registerService = new ManaManoService();
  const user = useUser();
  const router = useRouter();
  const [login, setLogin] = useState<Login>(newLogin);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await registerService.SignIn(login);
    if (response) router.push("/");
    console.log(response);
  };

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev: Login) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(user);
  }, []);

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
                value={login.email}
                type="email"
                required
                name="email"
                onChange={handleChangeLogin}
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
                value={login.password}
                required
                name="password"
                onChange={handleChangeLogin}
                inputStyle={{ borderRadius: "0px 6px 6px 0px" }}
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
          Não possui conta?
          <Link href="/register">Cadastre-se</Link>
        </p>
      </LayoutLoginRegister>
    </>
  );
}
