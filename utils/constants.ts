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
  static readonly SUPABASE_EMAIL_NAO_CONFIRMADO: string = "Email not confirmed";
  static readonly EMAIL_NAO_CONFIRMADO: string = "E-mail não confirmado";

  static readonly MONTHS = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
}
