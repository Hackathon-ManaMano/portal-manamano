export default class C {
    // SERVER RESPONSE
    static readonly SERVER_SUCCESS: string = "success";
    static readonly SERVER_WARN: string = "warn";
    static readonly SERVER_ERROR: string = "error";

    static readonly LOGIN_INVALIDO: string = "Email ou senha incorretos";
    static readonly FEEDBACK_PADRAO: string = "Por favor, tente novamente.";

    // Register
    static readonly USUARIO_CRIADO: string = "Usuário criado com sucesso.";

    // MESSAGE ERROR SUPABASE
    static readonly SUPABASE_EMAIL_NAO_CONFIRMADO: string =
        "Email not confirmed";
    static readonly EMAIL_NAO_CONFIRMADO: string = "E-mail não confirmado";

    // Colors
    static readonly COLORS = [
        //`var(--blue-100)`,
        //`var(--green-100)`,
        //`var(--pink-100)`,
        `var(--indigo-900)`,
        //`var(--purple-100)`,
        //`var(--yellow-100)`,
        //`var(--cyan-100)`,
        //`var(--orange-100)`,
        //`var(--teal-100)`,
        //`var(--bluegray-100)`,
        `var(--red-500)`,
        `var(--gray-500)`,
        //`var(--primary-100)`,
    ];
}
