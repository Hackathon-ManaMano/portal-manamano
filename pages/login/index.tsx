// React & Next
import Link from "next/link";
import Head from "next/head";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
// Primereact
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
// Service
import { ManaManoService } from "../../services/manamano_service";
// Models
import { Login, newLogin } from "../../models/login_model";
// Layout
import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";

// Constants
import C from "../../utils/constants";
import { useRouter } from "next/router";
import { showMessage } from "../../utils/utils";

export default function LoginScreen() {
  // Toast
  const toast = useRef(null);
  // Router
  const router = useRouter();
  // State(s)
  const [login, setLogin] = useState<Login>(newLogin);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setButtonLoading(true);
      const { data, error } = await ManaManoService.SignIn(login);
      if (error) {
        if (error.message == C.SUPABASE_EMAIL_NAO_CONFIRMADO)
          showMessage(
            C.SERVER_ERROR,
            C.EMAIL_NAO_CONFIRMADO,
            "Confirme seu e-mail",
            toast
          );
        else
          showMessage(
            C.SERVER_ERROR,
            C.LOGIN_INVALIDO,
            C.FEEDBACK_PADRAO,
            toast
          );
        return;
      }
      router.push("/u/feed");
    } finally {
      setButtonLoading(false);
    }
  };

  const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev: Login) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
          className="flex-column p-fluid grid p-4 mt-4"
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
            <Button
              type="submit"
              label="ENTRAR"
              loading={buttonLoading}
              loadingIcon="pi pi-spin pi-sun"
            />
          </div>
        </form>
        <p className="flex justify-content-center gap-2">
          Não possui conta?
          <Link href="/register">Cadastre-se</Link>
        </p>
      </LayoutLoginRegister>
      <Toast ref={toast} position="bottom-right" />
    </>
  );
}
