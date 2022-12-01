// React e Next
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
// Primereact
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
// Service
import { ManaManoService } from "../../services/manamano_service";
import { RegisterService } from "../../services/register_service";
// Models
import { Register, newRegister } from "../../models/register_model";
// Layout
import { LayoutLoginRegister } from "../../components/LayoutLoginRegister";
import C from "../../utils/constants";
import { showMessage, showMessageError } from "../../utils/utils";
import { AuthResponse } from "@supabase/supabase-js";

export default function RegisterScreen() {
  // ref(s)
  const toast = useRef(null);

  // State(s)
  const [register, setRegister] = useState<Register>(newRegister);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const handleChangeRegister = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister((prev: Register) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setButtonLoading(true);
      if (register.confirm_password !== register.password) {
        showMessageError("As senhas não conferem", C.FEEDBACK_PADRAO, toast);
        return;
      }

      // verifica se o usuario já está cadastrado
      if (await checkEmpreendedoraAlreadyExists()) return;

      const response = await ManaManoService.SignUp(register);
      if (response.error) {
        showMessageError(
          "Ocorreu um erro. Não foi possível fazer o cadastro",
          C.FEEDBACK_PADRAO,
          toast
        );
        return;
      }

      // Insere na tabela de empreendedoras
      if (!(await insertNewEmpreendedora(response.data))) return;

      showMessage(C.SERVER_SUCCESS, "Sucesso", C.USUARIO_CRIADO, toast);
      setDialogVisible(true);
    } catch (error) {
    } finally {
      setButtonLoading(false);
    }

    return;
  };

  const checkEmpreendedoraAlreadyExists = async (): Promise<boolean> => {
    const empreendedora = await RegisterService.getEmpreendedora(
      register.email
    );
    if (empreendedora?.length! > 0) {
      showMessageError(
        "Usuário já cadastrado",
        "Por favor, tente outro email.",
        toast
      );
      return true;
    }
    return false;
  };

  const insertNewEmpreendedora = async ({
    user,
  }: AuthResponse["data"]): Promise<boolean> => {
    const response = RegisterService.createEmpreendedora(
      register.name,
      user?.email!,
      user?.id!
    );
    if ((response as any).error) {
      showMessageError(
        "Ocorreu um erro. Não foi possível fazer o cadastro",
        C.FEEDBACK_PADRAO,
        toast
      );
      return false;
    }
    return true;
  };

  const headerDialog = (
    <div className="flex align-items-center gap-2">
      <span
        className="pi pi-send text-primary"
        style={{ fontSize: "1.8em" }}
      ></span>
      <h1 className="text-primary">Confirme seu e-mail</h1>
    </div>
  );

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
                type="submit"
                loading={buttonLoading}
                loadingIcon="pi pi-spin pi-sun"
              />
            </div>
          </div>
        </form>
        <p className="flex justify-content-center gap-2">
          Já possui conta?
          <Link href="/login">Acesse sua conta</Link>
        </p>
      </LayoutLoginRegister>
      <Dialog
        header={headerDialog}
        visible={dialogVisible}
        modal
        onHide={() => setDialogVisible(false)}
        blockScroll={true}
        draggable={false}
        breakpoints={{ "960px": "60vw", "320px": "100vw" }}
      >
        <h3>
          Enviamos um e-mail de confimação. Por favor, confirme seu cadastro
          através do e-mail.
        </h3>
      </Dialog>
      <Toast ref={toast} position="bottom-right"></Toast>
    </>
  );
}
